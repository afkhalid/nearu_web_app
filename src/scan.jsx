import { Component, Fragment } from "react";
import { getParameterByName, isMobile } from "./utils";
import logo from "./images/logo.svg";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import FIRE_STORE_CONFIG from "./configs/firestore.json";
import { initializeApp } from "firebase/app";
import {
  getFunctions,
  connectFunctionsEmulator,
  httpsCallable,
} from "firebase/functions";
import DownloadApp from "./download_app";

export default class ScanPage extends Component {
  constructor(props) {
    super(props);

    const code = getParameterByName("code", this.props);
    window.history.replaceState({}, "", "/scan.html");

    this.fireBaseApplication = initializeApp(FIRE_STORE_CONFIG);
    this.functions = getFunctions(this.fireBaseApplication);

    // connectFunctionsEmulator(this.functions, "localhost", 5001);

    this.state = {
      isLoading: true,
      showUserNotFound: false,
      showPhoneNumber: false,
      code,
    };
  }

  async componentDidMount() {
    const getUserInformation = httpsCallable(
      this.functions,
      "getUserInformation"
    );
    const tag = await getUserInformation({code: this.state.code});

    if (!tag || (tag && !tag.data)) {
      this.setState({isLoading: false, showUserNotFound: true});
    } else {
      this.setState({isLoading: false, tag: tag.data});
    }
  }

  handleNumberOperation() {
    if (isMobile()) {
      window.open(this.state.tag.phoneNumber);
    } else {
      this.setState({showPhoneNumber: true});
    }
  }

  handleUpdateText(fieldName, e) {
    const text = e.target.value;
    this.setState({[fieldName]: text});
  }

  async handleSendMessage(e) {
    e.preventDefault();
    this.setState({isLoading: true}, async() => {
      const {code, message, phone} = this.state;
      const sendMessageFunction = httpsCallable(this.functions, "sendMessage");
      const result = await sendMessageFunction({code, message, phone});
      if (result?.data) {
        this.setState({isLoading: false});
        window.open("/confirmation.html", "_self");
      }
    });
  }

  render() {
    const {isLoading, tag, showPhoneNumber, showUserNotFound} = this.state;
    return (
      <div className="scan-page">
        <div className="content">
          <div className="send-message-logo">
            <img src={logo} width={100} height={130} alt="NearU Logo" />
          </div>
          <div className="message-container">
            <div className="inner-message-container">
              <div className="send-message-header">CONTACT OWNER</div>
              {showUserNotFound ? (
                <Fragment>
                  <Alert className="mt-2" variant="danger">
                    No data found for this tag!
                  </Alert>
                  <DownloadApp />
                </Fragment>
              ) : ""}
              {tag?.additionalInformation ? (
                <Alert className="mt-2" variant="info">
                  <Alert.Heading as="h5">Note from the Owner</Alert.Heading>
                  {tag.additionalInformation}
                </Alert>
              ) : ""}
              <Form onSubmit={this.handleSendMessage.bind(this)}>
                <Form.Group className="mb-3">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={!tag}
                    onChange={this.handleUpdateText.bind(this, "phone")}
                    placeholder="+20-xxx-xxx-xxxx"
                  />
                  <div className="send-message-sub-header">
                    So the owner can call you back
                  </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="form-message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Write your message here.."
                    disabled={!tag}
                    onChange={this.handleUpdateText.bind(this, "message")}
                    rows={4}
                    required
                  />
                </Form.Group>
                <Form.Group className="mt-5">
                  <Button variant="primary" disabled={!tag} type="submit">
                    Send Message
                  </Button>
                  {tag && tag.showPhoneNumberWhenScanned ? (
                    isMobile() ? (
                      <a href={`tel:${tag.phoneNumber}`}>
                        <Button
                          className="show-number-button"
                          variant="secondary"
                          disabled={!tag}
                        >
                          Call Owner
                        </Button>
                      </a>
                    ) : (
                      <Button
                        className="show-number-button"
                        variant="secondary"
                        disabled={!tag}
                        onClick={this.handleNumberOperation.bind(this)}
                      >
                        {showPhoneNumber ? tag.phoneNumber : "Show Number"}
                      </Button>
                    )
                  ) : ""}
                  {isLoading ? (
                    <Button className="show-number-button" variant="secondary">
                      <Spinner
                        as="span"
                        animation="grow"
                        className="loading"
                        role="status"
                        size="sm"
                        aria-hidden="true"
                      />
                      Loading
                    </Button>
                  ) : ""}
                </Form.Group>
              </Form>
            </div>
          </div>
          <div className="made-with-love">Made with ❤ by NearU!</div>
        </div>
      </div>
    );
  }
}
