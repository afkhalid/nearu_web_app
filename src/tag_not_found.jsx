import notFound from "./images/not_found.svg";
import DownloadApp from "./widgets/download_app";
import MadeWithLove from "./widgets/made_with_love";

function TagNotFoundPage() {
  return (
    <div className="content">
      <div className="send-message-logo">
        <img src={notFound} alt="Tag not found!" />
        <div className="tag-not-found-header">THIS TAG IS UNCLAIMED</div>
        <div className="tertiary-text">
          Download NearU to unlock its powers!
        </div>
      </div>
      <DownloadApp showTitle={false} />
      <MadeWithLove />
    </div>
  );
}

export default TagNotFoundPage;
