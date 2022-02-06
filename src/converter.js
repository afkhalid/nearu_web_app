import User from "./models/user";
import Tag from "./models/tag";

export default class Converters {
  static User = {
    toFirestore: (user) => {
      return {
        fullName: user.fullName,
        phone: user.phone,
        numberOfTags: user.numberOfTags,
      };
    },
    fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options);
      return new User(data.fullName, data.phone, data.numberOfTags);
    },
  };

  static Tag = {
    toFirestore: (tag) => {
      return {
        name: tag.name,
        phoneNumber: tag.phoneNumber,
        ownerUID: tag.ownerUID,
        additionalInformation: tag.additionalInformation,
      };
    },
    fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options);
      return new Tag(
        data.name,
        data.phoneNumber,
        data.ownerUID,
        data.additionalInformation
      );
    },
  };
}
