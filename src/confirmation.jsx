import { Component } from "react";
import confirmation from "./images/confirmation.svg";
import DownloadApp from "./widgets/download_app";
import MadeWithLove from "./widgets/made_with_love";

export default class ConfirmationPage extends Component {
  render() {
    return (
      <div className="content">
        <div className="send-message-logo">
          <img src={confirmation}
               alt="Message Sent!"
          />
          <div className="message-sent-header">THANK YOU!</div>
          <div className="message-sub-header">Your message has been sent successfully!</div>
          <DownloadApp showTitle={true} />
        </div>
        <MadeWithLove />
      </div>
    );
  }
}
