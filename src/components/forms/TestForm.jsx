import React, { useState } from "react";
import ContentWrapper from "../utilities/ContentWrapper";
import DialogModal from "../utilities/DialogModal";
import { Form, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { submitTestResult } from "../../store/actions/adminActions";
import { clearNotifications } from "../../store/actions/notificationsActions";

export default function TestForm(props) {
  const [inputValue, setInputValue] = useState({
    labId: "",
    specimenNumber: "",
    sampleCollected: "",
    sampleRecievedDate: "",
    testResult: "",
    resultDate: "",
    caseId: "",
  });
  const [error, setErrors] = useState({});
  const [smShow, setSmShow] = useState(false);
  const notification = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  const data = props.location?.state;

  console.log(data);
  React.useEffect(() => {
    const { success } = notification;
    if (success.message) {
      const { message } = notification.success;
      toast.success(message);
      return dispatch(clearNotifications());
    }
  }, [dispatch, notification]);

  const handleShowModal = (e) => {
    e.preventDefault();
    const newErrors = findError();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setSmShow(true);
    }
  };

  const handleCloseModal = () => {
    setSmShow(false);
  };

  const findError = () => {
    const {
      labId,
      specimenNumber,
      sampleCollected,
      sampleRecievedDate,
      testResult,
      resultDate,
    } = inputValue;
    const newErrors = {};
    if (!labId || labId === "") newErrors.labId = "Lab Id cannot be blank!";
    if (!specimenNumber || specimenNumber === "")
      newErrors.specimenNumber = "Number of specimen cannot be blank!";
    else if (specimenNumber < 0) {
      newErrors.specimenNumber =
        "number of specimen collected cannot be negative!";
    }
    if (!sampleRecievedDate || sampleRecievedDate === "")
      newErrors.sampleRecievedDate = "date recieved cannot be blank!";
    if (!testResult || testResult === "")
      newErrors.testResult = "test result cannot be blank!";
    if (!resultDate || resultDate === "")
      newErrors.resultDate = "result date cannot be blank!";
    if (!sampleCollected || sampleCollected === "") {
      newErrors.sampleCollected = "sample collected cannot be blank!";
    } else if (sampleCollected < 0) {
      newErrors.sampleCollected =
        "number of sample collected cannot be negative!";
    }

    return newErrors;
  };
  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    inputValue.caseId = data._id;
    dispatch(submitTestResult(inputValue));
    setInputValue({
      labId: "",
      specimenNumber: "",
      sampleCollected: "",
      sampleRecievedDate: "",
      testResult: "",
      resultDate: "",
      caseId: "",
    });

    // console.log(inputValue);
    handleCloseModal();
  };

  return (
    <ContentWrapper>
      <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title">Virological Test Result</h3>
        </div>
        <div className=" callout callout-info">
          <h5>
            <i className="fas fa-info"></i> Note:
          </h5>
          patient information
        </div>
        <Form className=" invoice p-3 mb-3 col-12">
          <div className="card-body row">
            <Form.Group className="mb-3 col-md-6" controlId="formdepartment">
              <Form.Label>Full name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={data?.fullName}
                readOnly
              />
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
                value={data?.gender}
                readOnly
              >
                <option> select your Gender</option>
                <option value="Male">Male </option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </Form.Control>
            </Form.Group>
          </div>

          <div className="card-body row">
            <Form.Group className="col-md-6" controlId="formbirthdate">
              <Form.Label>Date of birth</Form.Label>
              <Form.Control
                type="date"
                name="birthDate"
                defaultValue={data?.birthDate}
                readOnly
              />
            </Form.Group>
            <Form.Group className="col-md-6" controlId="formdepartment">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={data?.phone}
                readOnly
              />
            </Form.Group>
          </div>

          <div className="card-body row">
            <Form.Group className="col-md-6" controlId="formdepartment">
              <Form.Label>Occupation</Form.Label>
              <Form.Control
                type="text"
                name="occupation"
                value={data?.occupation}
                readOnly
              />
            </Form.Group>
          </div>
          <div className=" callout callout-info">fill in test result here</div>

          <div className="card-body row">
            <Form.Group className="col-md-6" controlId="formdepartment">
              <Form.Label>Lab Id</Form.Label>
              <Form.Control
                type="text"
                name="labId"
                value={inputValue?.labId}
                onChange={handleChange}
                isInvalid={!!error.labId}
              />
              <Form.Control.Feedback type="invalid">
                {error.labId}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="col-md-6" controlId="formdepartment">
              <Form.Label>Number of Specimen Collected</Form.Label>
              <Form.Control
                type="number"
                name="specimenNumber"
                value={inputValue?.specimenNumber}
                onChange={handleChange}
                isInvalid={!!error.specimenNumber}
              />
              <Form.Control.Feedback type="invalid">
                {error.specimenNumber}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="card-body row">
            <Form.Group className="col-md-6" controlId="formdepartment">
              <Form.Label>sample collected</Form.Label>
              <Form.Control
                type="text"
                name="sampleCollected"
                value={inputValue?.sampleCollected}
                onChange={handleChange}
                isInvalid={!!error.sampleCollected}
              />
              <Form.Control.Feedback type="invalid">
                {error.sampleCollected}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="col-md-6" controlId="formdepartment">
              <Form.Label>Date recieved</Form.Label>
              <Form.Control
                type="date"
                name="sampleRecievedDate"
                value={inputValue?.sampleRecievedDate}
                onChange={handleChange}
                isInvalid={!!error.sampleRecievedDate}
              />
              <Form.Control.Feedback type="invalid">
                {error.sampleRecievedDate}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="card-body row">
            <Form.Group
              xs={12}
              as={Col}
              className="col-md-6"
              controlId="formTitle"
            >
              <Form.Label>Test Result</Form.Label>
              <Form.Control
                as="select"
                name="testResult"
                value={inputValue?.testResult}
                onChange={handleChange}
              >
                <option> Select Test Result</option>
                <option value="positive">Positive </option>
                <option value="negative">Negative</option>
                isInvalid={!!error.testResult}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {error.testResult}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="col-md-6" controlId="formdepartment">
              <Form.Label>Result Date</Form.Label>
              <Form.Control
                type="date"
                name="resultDate"
                value={inputValue?.resultDate}
                onChange={handleChange}
                isInvalid={!!error.resultDate}
              />
              <Form.Control.Feedback type="invalid">
                {error.resultDate}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="card-footer">
            <button
              onClick={handleShowModal}
              className="btn btn-primary float-right"
            >
              Submit
            </button>
          </div>
        </Form>
      </div>

      <DialogModal
        smShow={smShow}
        handleCloseModal={handleCloseModal}
        handleSubmit={handleSubmit}
        inputValue={inputValue}
      />
      <ToastContainer position="top-center" />
    </ContentWrapper>
  );
}
