import React, { useState } from "react";
import { Form, Col, Modal } from "react-bootstrap";

export default function FollowUpForm(props) {
  const [inputValue, setInputValue] = useState({
    fullName: "",
    gender: "",
    birthDate: "",
    age: "",
    phone: "",
    occupation: "",
  });

  return (
    <Modal
      size="lg"
      show={props.showModal}
      onHide={props.handleCloseModal}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="example-modal-sizes-title-lg"
          style={{ textAlign: "center" }}
        >
          Follow Up Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <Form className=" invoice p-3 mb-3 col-12">
        <div className="card-body row">
          <Form.Group className="mb-3 col-md-6" controlId="formdepartment">
            <Form.Label>Full name</Form.Label>
            <Form.Control
              type="text"
              name="fullName"
              //   defaultValue={data?.fullName}
              onChange={handleChange}
              isInvalid={!!error.fullName}
            />
            <Form.Control.Feedback type="invalid">
              {error.fullName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            xs={12}
            as={Col}
            className="col-md-6"
            controlId="formTitle"
          >
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as="select"
              name="gender"
              //   defaultValue={data?.gender}
              onChange={handleChange}
              isInvalid={!!error.gender}
            >
              <option> select your Gender</option>
              <option value="Male">Male </option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {error.gender}
            </Form.Control.Feedback>
          </Form.Group>
        </div>

        <div className="card-body row">
          <Form.Group className="col-md-6" controlId="formbirthdate">
            <Form.Label>Date of birth</Form.Label>
            <Form.Control
              type="date"
              name="birthDate"
              // defaultValue={data?.birthDate}
              onChange={handleChange}
              isInvalid={!!error.birthDate}
            />
            <Form.Control.Feedback type="invalid">
              {error.birthDate}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="col-md-6" controlId="formdepartment">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              // defaultValue={data?.email}
              onChange={handleChange}
              isInvalid={!!error.phone}
            />
            <Form.Control.Feedback type="invalid">
              {error.phone}
            </Form.Control.Feedback>
          </Form.Group>
        </div>

        <div className="card-footer">
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary float-right"
          >
            Submit
          </button>
        </div>
      </Form> */}
      </Modal.Body>
    </Modal>
  );
}
