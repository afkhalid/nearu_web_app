const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.getUserInformation = functions.https.onCall(async (data) => {
  const code = data.code;
  const db = admin.firestore();

  const tagsSnapshot = await db.collectionGroup("tags")
      .where("code", "==", code).get();

  if (tagsSnapshot.docs.length === 0) {
    return null;
  }

  const databaseTag = tagsSnapshot.docs.map((doc) => doc.data())[0];
  const uuid = databaseTag.ownerUID;
  const usersSnapshot = await db.collection("users")
      .where("uid", "==", uuid).get();

  const user = usersSnapshot.docs.map((doc) => doc.data())[0];
  user.showPhoneNumberWhenScanned = databaseTag.showPhoneNumberWhenScanned;

  if (!user.showPhoneNumberWhenScanned) {
    delete user.phone;
  }

  return user;
});
