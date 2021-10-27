import React from "react";
import { Modal, Button } from "react-bootstrap";

function DialogModal(props) {
  const { smShow, handleSubmit, handleCloseModal, inputValue } = props;
  return (
    <Modal
      size="sm"
      show={smShow}
      onHide={() => handleCloseModal()}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">
          Confirm user result
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h3>Can you confirm that this is a {inputValue?.testResult} case?</h3>
        {inputValue.testResult === "positive" ? (
          <p>
            once this form is submitted a new confirmed case would be created
          </p>
        ) : null}
        <Button onClick={() => handleCloseModal()}>NO </Button>{" "}
        <Button onClick={(e) => handleSubmit(e)}>YES</Button>{" "}
      </Modal.Body>
    </Modal>
  );
}

export default DialogModal;
