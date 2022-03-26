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
    this.state = {
      isLoading: true,
      showUserNotFound: false,
      showPhoneNumber: false,
      code,
    };
  }

  async componentDidMount() {
    const fireBaseApplication = initializeApp(FIRE_STORE_CONFIG);
    const functions = getFunctions(fireBaseApplication);
    // connectFunctionsEmulator(functions, "localhost", 5001);
    const getUserInformation = httpsCallable(functions, 'getUserInformation');
    const user = await getUserInformation({ code: this.state.code });

    if (!user) {
      this.setState({isLoading: false, showUserNotFound: true});
    } else {
      this.setState({isLoading: false, user: user.data});
    }
  }

  handleNumberOperation() {
    if (isMobile()) {
      window.open(this.state.user.phone);
    } else {
      this.setState({showPhoneNumber: true});
    }
  }

  render() {
    const {isLoading, user, showPhoneNumber, showUserNotFound} = this.state;
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
            <div className="send-message-header">SEND MESSAGE</div>
            <div className="send-message-sub-header">Your message will help the owner find his stuff!</div>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea"
                              placeholder="Write your message here .."
                              disabled={!user}
                              rows={4}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>If you want the owner to call you back, please leave your phone number</Form.Label>
                <Form.Control type="text"
                              disabled={!user}
                              placeholder="+2 xxx xxxx xxxx"
                />
              </Form.Group>
              <Form.Group className="mt-5">
                <Button variant="primary"
                        disabled={!user}
                >
                  Send Message
                </Button>
                {user && user.showPhoneNumberWhenScanned ?
                  isMobile() ?
                    <a href="tel:+201007032896">
                      <Button className="show-number-button"
                              variant="secondary"
                              disabled={!user}
                      >
                        Call Owner
                      </Button>
                    </a> :
                    <Button className="show-number-button"
                            variant="secondary"
                            disabled={!user}
                            onClick={this.handleNumberOperation.bind(this)}
                    >
                      {showPhoneNumber ? user.phone : "Show Number"}
                    </Button> : ""}
                {isLoading ? <Spinner animation="border"
                                      className="spinner"
                /> : ""}
              </Form.Group>
              {showUserNotFound ? <Alert className="mt-2"
                                         variant="danger"
              >
                No data found for this tag!
              </Alert> : ""}
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
