export default class Tag {
  constructor(name, phoneNumber, ownerUID, additionalInformation, showPhoneNumberWhenScanned) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.ownerUID = ownerUID;
    this.additionalInformation = additionalInformation;
    this.showPhoneNumberWhenScanned = showPhoneNumberWhenScanned;
  }

  toString() {
    return (
      this.name +
      ', ' +
      this.phoneNumber +
      ', ' +
      this.ownerUID +
      ', ' +
      this.additionalInformation+
      ', ' +
      this.showPhoneNumberWhenScanned
    );
  }
}
