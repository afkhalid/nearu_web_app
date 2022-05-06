import { Component, Fragment } from "react";
import ios from "../images/ios.svg";
import android from "../images/android.svg";

export default class DownloadApp extends Component {
  render() {
    const {showTitle} = this.props;
    return (
      <Fragment>
        {showTitle ?
          <div className="download-our-app-header">
            DOWNLOAD OUR APP FOR <span>FREE</span>!
          </div> : ""}
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
      </Fragment>
    );
  }
}
