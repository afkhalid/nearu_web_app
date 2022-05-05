const functions = require("firebase-functions");
const admin = require("firebase-admin");
const {v4: uuidv4} = require("uuid");

admin.initializeApp();

const db = admin.firestore();

exports.getUserInformation = functions.https.onCall(async(data) => {
  try {
    const code = data.code;
    const tag = await getTag(code);

    if (!tag) {
      return null;
    } else if (!tag.showPhoneNumberWhenScanned) {
      delete tag.phoneNumber;
    }

    return {
      phoneNumber: tag.phoneNumber,
      showPhoneNumberWhenScanned: tag.showPhoneNumberWhenScanned,
      additionalInformation: tag.additionalInformation,
    };
  } catch (e) {
    console.error(e);
    return null;
  }
});

exports.sendMessage = functions.https.onCall(async(data) => {
  try {
    const code = data.code;
    const message = data.message;
    const phone = data.phone;
    const tag = await getTag(code);

    if (tag) {
      const result = await db.collection("messages")
        .add({
          message, phone, toUID: tag.ownerUID, id: uuidv4(),
          createdAt: new Date(), type: tag.type, name: tag.name,
        });

      if (result.id) {
        const user = await getUser(tag.ownerUID);
        if (user && user.deviceToken) {
          console.log(`Sending message to ${user.name} with 
          device token: ${user.deviceToken}`);

          await admin.messaging().sendMulticast({
            tokens: [user.deviceToken],
            notification: {
              title: "New Message!",
              body: `You received a new message on your tag ${tag.name}`,
            },
          });
        }
      }

      return result.id;
    }
    return null;
  } catch (e) {
    console.error(e);
    return null;
  }
});

// eslint-disable-next-line no-unused-vars
const isMessageSenderBlacklisted = async(phone) => {
  phone = phone ?? "Anonymous";
  const blacklistedSnapshot = await db.collectionGroup("blacklisted")
    .where("phone", "==", phone).get();
  return blacklistedSnapshot.docs.length > 0;
};

const getTag = async(code) => {
  const tagsSnapshot = await db.collectionGroup("tags")
    .where("code", "==", code).get();

  if (tagsSnapshot.docs.length === 0) {
    return null;
  }

  return tagsSnapshot.docs.map((doc) => doc.data())[0];
};

const getUser = async(uid) => {
  const usersSnapshot = await db.collection("users")
    .where("uid", "==", uid).get();

  if (usersSnapshot.docs.length === 0) {
    return null;
  }

  return usersSnapshot.docs.map((doc) => doc.data())[0];
};
