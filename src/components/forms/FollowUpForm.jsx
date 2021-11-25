import React, { useState } from "react";
import { Modal, Form, Col } from "react-bootstrap";
import { addFollowUpDetail } from "../../store/actions/adminActions";
import { useDispatch } from "react-redux";

export default function FollowUpForm(props) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({
    healthStatus: "",
    treatmentCenter: "",
    treatmentStartDate: "",
    prescription: "",
    medTeamLeader: "",
    symptoms: "",
    weight: "",
    height: "",
    bodyTemp: "",
  });

  const [error, setErrors] = useState({
    healthStatus: "",
    treatmentCenter: "",
    treatmentStartDate: "",
    prescription: "",
    medTeamLeader: "",
    symptoms: "",
    weight: "",
    height: "",
    bodyTemp: "",
  });
  const findError = () => {
    const {
      healthStatus,
      treatmentCenter,
      treatmentStartDate,
      prescription,
      medTeamLeader,
      symptoms,
      weight,
      height,
      bodyTemp,
    } = inputValue;
    const newErrors = {};
    if (!healthStatus || healthStatus === "")
      newErrors.healthStatus = "health status cannot be blank!";
    if (!treatmentCenter || treatmentCenter === "")
      newErrors.treatmentCenter = "treatment center cannot be blank!";
    if (!treatmentStartDate || treatmentStartDate === "")
      newErrors.treatmentStartDate = "treatment start date cannot be blank!";
    if (!prescription || prescription === "")
      newErrors.prescription = "prescription  cannot be blank!";
    if (!medTeamLeader || medTeamLeader === "")
      newErrors.medTeamLeader = "med team leader cannot be blank!";
    if (!symptoms || symptoms === "")
      newErrors.symptoms = "symptoms cannot be blank!";
    if (!bodyTemp || bodyTemp === "")
      newErrors.bodyTemp = "body temperature cannot be blank!";
    if (!weight || weight === "") {
      newErrors.weight = "weight cannot be blank!";
    } else if (weight < 0) {
      newErrors.weight = "weight cannot be negative!";
    }
    if (!height || height === "") {
      newErrors.height = "height cannot be blank!";
    } else if (height < 0) {
      newErrors.height = "height cannot be negative!";
    }

    return newErrors;
  };
  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = findError();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      inputValue.caseId = props.caseId;
      dispatch(addFollowUpDetail(inputValue));
      props.handleCloseModal();
      //clear form
      setInputValue({
        healthStatus: "",
        treatmentCenter: "",
        treatmentStartDate: "",
        prescription: "",
        medTeamLeader: "",
        symptoms: "",
      });
    }
  };
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
          Case Follow Up Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="  col-12">
          <div className="card-body row">
            <Form.Group
              xs={12}
              as={Col}
              className="col-md-6"
              controlId="formTitle"
            >
              <Form.Label>Case Health Status</Form.Label>
              <Form.Control
                as="select"
                name="healthStatus"
                value={inputValue?.healthStatus}
                onChange={handleChange}
                isInvalid={!!error.healthStatus}
              >
                <option> select Case Health Status</option>
                <option value="Recovered">Recovered</option>
                <option value="Still Ill">Still Ill</option>
                <option value="Dead">Dead</option>
                <option value="Lost to Followup">Lost to followup</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {error.healthStatus}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3 col-md-6" controlId="formdepartment">
              <Form.Label>Date Treament Commenced</Form.Label>
              <Form.Control
                type="date"
                name="treatmentStartDate"
                value={inputValue?.treatmentStartDate}
                onChange={handleChange}
                isInvalid={!!error.treatmentStartDate}
              />
              <Form.Control.Feedback type="invalid">
                {error.treatmentStartDate}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="card-body row">
            <Form.Group className="mb-3 col-md-6" controlId="formdepartment">
              <Form.Label>Body Temperature</Form.Label>
              <Form.Control
                type="number"
                placeholder="highest body temperature recorded during treatment"
                name="bodyTemp"
                value={inputValue?.bodyTemp}
                onChange={handleChange}
                isInvalid={!!error.bodyTemp}
              />
              <Form.Control.Feedback type="invalid">
                {error.bodyTemp}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 col-md-6" controlId="formdepartment">
              <Form.Label>weight</Form.Label>
              <Form.Control
                type="number"
                name="weight"
                value={inputValue?.weight}
                onChange={handleChange}
                isInvalid={!!error.weight}
              />
              <Form.Control.Feedback type="invalid">
                {error.weight}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3 col-md-6" controlId="formdepartment">
              <Form.Label>height</Form.Label>
              <Form.Control
                type="number"
                name="height"
                value={inputValue?.height}
                onChange={handleChange}
                isInvalid={!!error.height}
              />
              <Form.Control.Feedback type="invalid">
                {error.height}
              </Form.Control.Feedback>
            </Form.Group>
          </div>

          <div className="card-body row">
            <Form.Group className="col-md-6" controlId="formbirthdate">
              <Form.Label>Treatment Center</Form.Label>
              <Form.Control
                type="text"
                name="treatmentCenter"
                value={inputValue?.treatmentCenter}
                onChange={handleChange}
                isInvalid={!!error.treatmentCenter}
              />
              <Form.Control.Feedback type="invalid">
                {error.treatmentCenter}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="col-md-6" controlId="formdepartment">
              <Form.Label>Medical Team Leader</Form.Label>
              <Form.Control
                type="text"
                name="medTeamLeader"
                value={inputValue?.email}
                onChange={handleChange}
                isInvalid={!!error.medTeamLeader}
              />
              <Form.Control.Feedback type="invalid">
                {error.medTeamLeader}
              </Form.Control.Feedback>
            </Form.Group>
          </div>

          <div className="card-body row">
            <Form.Group className="col-md-6" controlId="formbirthdate">
              <Form.Label>Prescription used</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter each prescription followed by comma"
                name="prescription"
                value={inputValue?.prescription}
                onChange={handleChange}
                isInvalid={!!error.prescription}
              />
              <Form.Control.Feedback type="invalid">
                {error.prescription}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="col-md-6" controlId="formdepartment">
              <Form.Label>Diagnostic Symptoms</Form.Label>
              <Form.Control
                type="text"
                name="symptoms"
                value={inputValue?.symptoms}
                onChange={handleChange}
                isInvalid={!!error.symptoms}
                placeholder="enter each symptoms followed by comma"
              />
              <Form.Control.Feedback type="invalid">
                {error.symptoms}
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
            <button
              onClick={props.handleCloseModal}
              className="btn btn-danger float-right"
              style={{ marginRight: "15px" }}
            >
              Close
            </button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
