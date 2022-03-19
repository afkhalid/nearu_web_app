export default class User {
  constructor(fullName, phone, numberOfTags, showPhoneNumberWhenScanned) {
    this.fullName = fullName;
    this.phone = phone;
    this.numberOfTags = numberOfTags;
    this.showPhoneNumberWhenScanned = showPhoneNumberWhenScanned;
  }

  toString() {
    return this.fullName + ', ' +
      this.phone + ', ' +
      this.numberOfTags + ', ' +
      this.showPhoneNumberWhenScanned;
  }
}
