import React, { useState } from "react";
import { Form, Col, Modal } from "react-bootstrap";
import moment from "moment";
import { addCaseContact } from "../../store/actions/adminActions";
import { useDispatch } from "react-redux";

export default function ContactForm(props) {
  const [inputValue, setInputValue] = useState({
    fullName: "",
    gender: "",
    birthDate: "",
    age: "",
    phone: "",
    email: "",
    occupation: "",
    address: "",
    caseRelationship: "",
    lastContact: "",
    caseId: "",
  });
  const dispatch = useDispatch();
  const [error, setErrors] = useState({
    fullName: "",
    gender: "",
    birthDate: "",
    age: "",
    phone: "",
    email: "",
    occupation: "",
    address: "",
    caseRelationship: "",
    lastContact: "",
    caseId: "",
  });
  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
  const calculateAge = (age) => {
    const years = moment().diff(`${age}`, "years", false);
    return years;
  };
  const findError = () => {
    const {
      fullName,
      gender,
      birthDate,
      phone,
      email,
      occupation,
      address,
      caseRelationship,
      lastContact,
    } = inputValue;
    const newErrors = {};
    if (!fullName || fullName === "")
      newErrors.fullName = "name cannot be blank!";
    if (!gender || gender === "") newErrors.gender = "gender cannot be blank!";
    if (!birthDate || birthDate === "")
      newErrors.birthDate = "date of birth cannot be blank!";
    if (!phone || phone === "")
      newErrors.phone = "phone of birth cannot be blank!";
    if (!occupation || occupation === "")
      newErrors.occupation = "occupation cannot be blank!";
    if (!address || address === "")
      newErrors.address = "address cannot be blank!";
    if (!caseRelationship || caseRelationship === "")
      newErrors.caseRelationship = "cannot be blank!";
    if (!lastContact || lastContact === "")
      newErrors.lastContact = "cannot be blank!";
    if (!email || email === "") newErrors.email = "cannot be blank!";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = findError();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      inputValue.age = calculateAge(inputValue.birthDate);
      inputValue.caseId = props.caseId;
      dispatch(addCaseContact(inputValue));
      props.handleCloseModal();
      //clear form
      setInputValue({
        fullName: "",
        gender: "",
        birthDate: "",
        age: "",
        phone: "",
        email: "",
        occupation: "",
        address: "",
        caseRelationship: "",
        lastContact: "",
        caseId: "",
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
          Confirmed Case Contact Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className=" invoice p-3 mb-3 col-12">
          <div className="card-body row">
            <Form.Group className="mb-3 col-md-6" controlId="formdepartment">
              <Form.Label>Full name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={inputValue?.fullName}
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
                value={inputValue?.gender}
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
                value={inputValue?.birthDate}
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
                value={inputValue?.phone}
                onChange={handleChange}
                isInvalid={!!error.phone}
              />
              <Form.Control.Feedback type="invalid">
                {error.phone}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <Form.Group className="col-md-6" controlId="formdepartment">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={inputValue?.email}
              onChange={handleChange}
              isInvalid={!!error.email}
            />
            <Form.Control.Feedback type="invalid">
              {error.email}
            </Form.Control.Feedback>
          </Form.Group>
          <div className="card-body row">
            <Form.Group className="col-md-6" controlId="formdepartment">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={inputValue?.address}
                onChange={handleChange}
                isInvalid={!!error.address}
              />
              <Form.Control.Feedback type="invalid">
                {error.address}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="col-md-6" controlId="formdepartment">
              <Form.Label>Occupation</Form.Label>
              <Form.Control
                type="text"
                name="occupation"
                value={inputValue?.occupation}
                onChange={handleChange}
                isInvalid={!!error.occupation}
              />
              <Form.Control.Feedback type="invalid">
                {error.occupation}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="card-body row">
            <Form.Group className="col-md-6" controlId="formdepartment">
              <Form.Label>Relationship with case</Form.Label>
              <Form.Control
                type="text"
                name="caseRelationship"
                value={inputValue?.caseRelationship}
                onChange={handleChange}
                isInvalid={!!error.caseRelationship}
              />
              <Form.Control.Feedback type="invalid">
                {error.caseRelationship}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="col-md-6" controlId="formdepartment">
              <Form.Label>Last Contact with Case</Form.Label>
              <Form.Control
                type="date"
                name="lastContact"
                value={inputValue?.lastContact}
                onChange={handleChange}
                isInvalid={!!error.lastContact}
              />
              <Form.Control.Feedback type="invalid">
                {error.lastContact}
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
        </Form>
      </Modal.Body>
    </Modal>
  );
}
