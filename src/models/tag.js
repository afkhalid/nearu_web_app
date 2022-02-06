export default class Tag {
  constructor(name, phoneNumber, ownerUID, additionalInformation) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.ownerUID = ownerUID;
    this.additionalInformation = additionalInformation;
  }

  toString() {
    return (
      this.name +
      ', ' +
      this.phoneNumber +
      ', ' +
      this.ownerUID +
      ', ' +
      this.additionalInformation
    );
  }
}
