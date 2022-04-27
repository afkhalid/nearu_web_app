import { Component, Fragment } from "react";
import confirmation from "./images/confirmation.svg";
import ios from "./images/ios.svg";
import android from "./images/android.svg";

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
            <div className="download-our-app-header">DOWNLOAD OUR APP FOR <span>FREE</span>!</div>
            <div className="store-buttons">
              <div>
                <a target="_blank"
                   href="https://apps.apple.com/eg/app/nearu-protect-what-matters/id1616418670"
                >
                  <img src={ios}
                       width={180}
                       alt="iOS Store Button"
                  />
                </a>
              </div>
              <div>
                <a target="_blank"
                   href="https://play.google.com/store/apps/details?id=nearu.nearu"
                >
                  <img src={android}
                       width={180}
                       alt="Play Store Button"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="made-with-love">Made with ❤ by NearU!</div>
      </Fragment>
    );
  }
}
