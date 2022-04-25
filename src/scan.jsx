import { Component } from "react";
import { getParameterByName, isMobile } from "./utils";
import logo from "./images/logo.svg";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import FIRE_STORE_CONFIG from "./configs/firestore.json";
import { initializeApp } from "firebase/app";
import { getFunctions, connectFunctionsEmulator, httpsCallable } from "firebase/functions";

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
    const getUserInformation = httpsCallable(this.functions, 'getUserInformation');
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
      const sendMessageFunction = httpsCallable(this.functions, 'sendMessage');
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
      <div className="centered">
        <div className="send-message-logo">
          <img src={logo}
               width={100}
               height={130}
               alt="NearU Logo"
          />
        </div>
        <div className="message-container">
          <div className="inner-message-container">
            <div className="send-message-header">CONTACT OWNER</div>
            <div className="send-message-sub-header">Your message will help the owner find his stuff!</div>
            <Form onSubmit={this.handleSendMessage.bind(this)}>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea"
                              placeholder="Write your message here .."
                              disabled={!tag}
                              onChange={this.handleUpdateText.bind(this, "message")}
                              rows={4}
                              required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>If you want the owner to call you back, please leave your phone number</Form.Label>
                <Form.Control type="text"
                              disabled={!tag}
                              onChange={this.handleUpdateText.bind(this, "phone")}
                              placeholder="+2 xxx xxxx xxxx"
                />
              </Form.Group>
              <Form.Group className="mt-5">
                <Button variant="primary"
                        disabled={!tag}
                        type="submit"
                >
                  Send Message
                </Button>
                {tag && tag.showPhoneNumberWhenScanned ?
                  isMobile() ?
                    <a href={`tel:${tag.phoneNumber}`}>
                      <Button className="show-number-button"
                              variant="secondary"
                              disabled={!tag}
                      >
                        Call Owner
                      </Button>
                    </a> :
                    <Button className="show-number-button"
                            variant="secondary"
                            disabled={!tag}
                            onClick={this.handleNumberOperation.bind(this)}
                    >
                      {showPhoneNumber ? tag.phoneNumber : "Show Number"}
                    </Button> : ""}
                {isLoading ? <Spinner animation="border"
                                      className="spinner"
                /> : ""}
              </Form.Group>
              {showUserNotFound ?
                <Alert className="mt-2" variant="danger">
                  No data found for this tag!
                </Alert> : ""}
              {tag?.additionalInformation ?
                <Alert className="mt-2" variant="info">
                  <h6 className="text-decoration-underline">IMPORTANT!</h6>
                  {tag.additionalInformation}
                </Alert> : ""}
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
