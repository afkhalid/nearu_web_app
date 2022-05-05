import { Component, Fragment } from "react";
import confirmation from "./images/confirmation.svg";
import DownloadApp from "./download_app";

export default class ConfirmationPage extends Component {
  render() {
    return (
      <Fragment>
        <div className="content">
          <div className="send-message-logo">
            <img src={confirmation}
                 alt="Message Sent!"
            />
            <div className="message-sent-header">THANK YOU!</div>
            <div className="message-sub-header">Your message has been sent successfully!</div>
            <DownloadApp />
          </div>
        </div>
        <div className="made-with-love">Made with ❤ by NearU!</div>
      </Fragment>
    );
  }
}
