import { Component } from "react";
import confirmation from "./images/confirmation.svg";

export default class ConfirmationPage extends Component {
  render() {
    return (
      <div className="centered">
        <div className="send-message-logo">
          <img src={confirmation}
               alt="Message Sent!"
          />
          <div className="message-sent-header">THANK YOU!</div>
          <div className="message-sub-header">Your message has been sent successfully!</div>
        </div>
      </div>
    );
  }
}
