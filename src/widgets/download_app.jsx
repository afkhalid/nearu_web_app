import ios from "../images/ios.svg";
import android from "../images/android.svg";

function DownloadApp({ showTitle }) {
  return (
    <>
      {showTitle ? (
        <div className="download-our-app-header">
          DOWNLOAD OUR APP FOR <span>FREE</span>!
        </div>
      ) : (
        ""
      )}
      <div className="store-buttons">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://apps.apple.com/eg/app/nearu-protect-what-matters/id1616418670"
        >
          <img src={ios} width={180} alt="iOS Store Button" />
        </a>

        <a
          href="https://play.google.com/store/apps/details?id=nearu.nearu"
          rel="noreferrer"
          target="_blank"
        >
          <img src={android} width={180} alt="Play Store Button" />
        </a>
      </div>
    </>
  );
}

export default DownloadApp;
