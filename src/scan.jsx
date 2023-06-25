import { useState, useEffect } from "react";
import { getParameterByName, isMobile, isValidPhoneNumber } from "./utils";
import logo from "./images/logo.svg";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import fireBaseApp from "./configs/firebaseInit.js";
import {
  getFunctions,
  // connectFunctionsEmulator,
  httpsCallable,
} from "firebase/functions";
import MadeWithLove from "./widgets/made_with_love";

export default function ScanPage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [tag, setTag] = useState(null);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const [payload, setPayload] = useState({
    message: "",
    phone: "",
  });

  const tagUuid = getParameterByName("code", props);
  const functions = getFunctions(fireBaseApp);
  // connectFunctionsEmulator(functions, "localhost", 5001);

  useEffect(() => {
    const getUserInformation = httpsCallable(functions, "getUserInformation");
    const fetchData = async () => {
      try {
        const tag = await getUserInformation({ code: tagUuid });

        if (!tag || (tag && !tag.data)) {
          setIsLoading(false);
          window.open("/tagNotFound.html", "_self");
        } else {
          setIsLoading(false);
          setTag(tag.data);
        }
      } catch (error) {
        // Handle error if necessary
      }
    };

    fetchData();
    // window.history.replaceState({}, "", "/scan.html");
  }, [tagUuid, functions]);

  const handleNumberOperation = () => {
    if (isMobile()) {
      window.open(tag.phoneNumber);
    } else {
      setShowPhoneNumber(true);
    }
  };

  const handleUpdateText = (fieldName, e) => {
    const text = e.target.value;
    setPayload((prevState) => ({
      ...prevState,
      [fieldName]: text,
    }));
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    setIsLoading({ isLoading: true });

    try {
      const { message, phone } = payload;
      const sendMessageFunction = httpsCallable(functions, "sendMessage");
      const result = await sendMessageFunction({
        code: tagUuid,
        message,
        phone,
      });

      if (result?.data) {
        setIsLoading(false);
        window.open("/confirmation.html", "_self");
      }
    } catch (error) {
      // Handle error if necessary
      setIsLoading(false);
    }
  };

  return (
    <div className="scan-page">
      <div className="content">
        <div className="send-message-logo">
          <img src={logo} width={100} height={130} alt="NearU Logo" />
        </div>
        <div className="message-container">
          <div className="inner-message-container">
            <div className="send-message-header">CONTACT OWNER</div>
            {tag?.additionalInformation ? (
              <Alert className="mt-2" variant="info">
                <Alert.Heading as="h5">Note from the Owner</Alert.Heading>
                {tag.additionalInformation}
              </Alert>
            ) : (
              ""
            )}
            <Form onSubmit={handleSendMessage}>
              <Form.Group className="mb-3">
                <Form.Label>Enter your phone number</Form.Label>
                <Form.Control
                  type="tel"
                  disabled={!tag}
                  onChange={(e) => handleUpdateText("phone", e)}
                  placeholder="+20-xxx-xxx-xxxx"
                  isInvalid={
                    payload.phone && !isValidPhoneNumber(payload.phone)
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid phone number.
                </Form.Control.Feedback>
                <Form.Text className="text-muted">
                  So the owner can call you back
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="form-message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Write your message here.."
                  disabled={!tag}
                  onChange={(e) => handleUpdateText("message", e)}
                  rows={4}
                  required
                />
              </Form.Group>
              {isLoading ? (
                <div className="text-center">
                  <Spinner
                    animation="border"
                    variant="primary"
                    aria-hidden="true"
                  />
                </div>
              ) : (
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
                        onClick={handleNumberOperation}
                      >
                        {showPhoneNumber ? tag.phoneNumber : "Show Number"}
                      </Button>
                    )
                  ) : (
                    ""
                  )}
                  {isLoading && !tag ? (
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
                  ) : (
                    ""
                  )}
                </Form.Group>
              )}
            </Form>
          </div>
        </div>
        <MadeWithLove />
      </div>
    </div>
  );
}
