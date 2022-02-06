export default class User {
  constructor(fullName, phone, numberOfTags) {
    this.fullName = fullName;
    this.phone = phone;
    this.numberOfTags = numberOfTags;
  }

  toString() {
    return this.fullName + ', ' + this.phone + ', ' + this.numberOfTags;
  }
}
