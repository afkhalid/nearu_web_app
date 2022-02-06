import {
  collection,
  getDocs,
  collectionGroup,
  query,
  where,
} from "firebase/firestore";
import Converters from "./converter";

export default class DataLoader {
  constructor(props) {
    this.db = props.db;
    this.code = props.code;
  }

  async loadUsers() {
    const tagsQuery = query(
      collectionGroup(this.db, 'tags').withConverter(Converters.Tag),
      where("code", "==", this.code)
    );

    const tagsSnapshot = await getDocs(tagsQuery);
    if (tagsSnapshot.docs.length === 0) {
      return null;
    }

    const databaseTag = tagsSnapshot.docs.map(doc => doc.data())[0];
    const uuid = databaseTag.ownerUID;

    const usersQuery = query(
      collection(this.db, "users").withConverter(Converters.User),
      where("uid", "==", uuid)
    );

    const usersSnapshot = await getDocs(usersQuery);
    return usersSnapshot.docs.map(doc => doc.data())[0];
  }
}
