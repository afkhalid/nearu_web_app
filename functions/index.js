const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const db = admin.firestore();

exports.getUserInformation = functions.https.onCall(async(data) => {
  const tag = await getTag(data.code);

  if (!tag.showPhoneNumberWhenScanned) {
    delete tag.phoneNumber;
  }

  return {
    phoneNumber: tag.phoneNumber,
    showPhoneNumberWhenScanned: tag.showPhoneNumberWhenScanned,
  };
});

exports.sendMessage = functions.https.onCall(async(data) => {
  const message = data.message;
  const phone = data.phone;
  const code = data.code;
  const tag = await getTag(code);
  console.log(phone);
  console.log(code);
  console.log(message);
  console.log("TAG", tag);
  const result = await db.collection("messages")
    .doc().set({message, phone, toUID: tag.ownerUID});
  console.log("RESULT:", result);
});

const getTag = async(code) => {
  const tagsSnapshot = await db.collectionGroup("tags")
    .where("code", "==", code).get();

  if (tagsSnapshot.docs.length === 0) {
    return null;
  }

  return tagsSnapshot.docs.map((doc) => doc.data())[0];
};
