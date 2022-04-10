const functions = require("firebase-functions");
const admin = require("firebase-admin");
const {v4: uuidv4} = require("uuid");

admin.initializeApp();

const db = admin.firestore();

exports.getUserInformation = functions.https.onCall(async(data) => {
  const tag = await getTag(data.code);

  if (!tag) {
    return null;
  } else if (!tag.showPhoneNumberWhenScanned) {
    delete tag.phoneNumber;
  }

  return {
    phoneNumber: tag.phoneNumber,
    showPhoneNumberWhenScanned: tag.showPhoneNumberWhenScanned,
  };
});

exports.sendMessage = functions.https.onCall(async(data) => {
  try {
    const message = data.message;
    const phone = data.phone;
    const code = data.code;
    const tag = await getTag(code);
    const result = await db.collection("messages")
      .add({message, phone, toUID: tag.ownerUID, id: uuidv4()});
    return result.id;
  } catch {
    return null;
  }
});

const getTag = async(code) => {
  const tagsSnapshot = await db.collectionGroup("tags")
    .where("code", "==", code).get();

  if (tagsSnapshot.docs.length === 0) {
    return null;
  }

  return tagsSnapshot.docs.map((doc) => doc.data())[0];
};
