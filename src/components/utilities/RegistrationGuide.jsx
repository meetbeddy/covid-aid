import React from "react";
import { Modal } from "react-bootstrap";

function RegistrationGuide(props) {
  return (
    <Modal
      id="about"
      size="lg"
      show={props.regGuideModal}
      onHide={props.handleCloseModal}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          REGISTRATION GUIDE
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {" "}
        <div className="about-footer list-style">
          <div className=" col-sm-12 col-xs-12">
            <ul
              style={{
                listStyleType: "circle",
                fontSize: "0.8em",
                padding: "20px",
              }}
            >
              <li>
                <p>
                  Make payment for registration (N2,000) directly/transfer to
                  our Keystone Bank Account Number: <b>1012305244</b>
                </p>
              </li>
              <li>Log-on to our website: www.lmcsnigltd.org.ng</li>
              <li>Click on Login/Register</li>
              <li>
                <p>
                  Click on Register and fill your registration details
                  (Registration Payment, employment & personal details). Note,
                  “transaction Id” on payment details can be teller/transfer
                  number or put the name of the payer where there is no
                  transaction number.
                </p>
              </li>
              <li>
                <p>
                  Click on Register and fill your registration details
                  (Registration Payment, employment & personal details). Note,
                  “transaction Id” on payment details can be teller/transfer
                  number or put the name of the payer where there is no
                  transaction number.
                </p>
              </li>
              <li>
                <p>
                  Check (√) agreement tab and click on Register (it takes you to
                  your Dashboard/Profile). You can review the details you
                  provided earlier by clicking on previous.
                </p>
              </li>
              <li>
                <p>
                  Click on savings & share capital on your Dashboard/Profile,
                  select initial instruction and fill the ensuing form and click
                  on submit or edit form (to enable you correct your initial
                  instruction(s)).
                </p>
              </li>
            </ul>
            <b>
              <p>
                Please note that once your registration, savings and share
                capital instructions have been reviewed and confirmed, you will
                receive an acknowledgement email.
              </p>
            </b>
            <b>
              <p>
                Also note that your application for membership could be turned
                down as a result of providing false information.
              </p>
            </b>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default RegistrationGuide;
