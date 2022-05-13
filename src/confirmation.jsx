import confirmation from "./images/confirmation.svg";
import DownloadApp from "./widgets/download_app";
import MadeWithLove from "./widgets/made_with_love";

function ConfirmationPage() {
  return (
    <div className="content">
      <div className="send-message-logo">
        <img className="confirm-image" src={confirmation} alt="Message Sent!" />
        <div className="message-sent-header">THANK YOU!</div>
        <div className="message-sub-header">
          Your message has been sent successfully.
        </div>
        <DownloadApp showTitle={true} />
      </div>
      <MadeWithLove />
    </div>
  );
}

export default ConfirmationPage;
