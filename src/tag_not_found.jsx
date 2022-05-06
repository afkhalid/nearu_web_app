import { Component } from "react";
import notFound from "./images/not_found.svg";
import DownloadApp from "./widgets/download_app";
import MadeWithLove from "./widgets/made_with_love";

export default class TagNotFoundPage extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="send-message-logo">
            <img src={notFound}
                 alt="Tag not found!"
            />
            <div className="tag-not-found-header">THIS TAG IS UNCLAIMED!</div>
            <div className="message-sub-header">Download NearU to unlock its powers</div>
            <DownloadApp showTitle={false} />
          </div>
          <MadeWithLove />
        </div>
      </div>
    );
  }
}
