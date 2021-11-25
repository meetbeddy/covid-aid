import React, { useState } from "react";
import { Modal, Form, Col } from "react-bootstrap";
import moment from "moment";
import { editCase } from "../../store/actions/adminActions";
import { useDispatch } from "react-redux";

export default function EditCase(props) {
  const { state } = props;
  const [inputValue, setInputValue] = useState({
    fullName: state.fullName,
    gender: state.gender,
    birthDate: state.birthDate,
    age: state.age,
    phone: state.phone,
    email: state.email,
    occupation: state.occupation,
    address: state.address,
  });

  //   const [submit, setSubmit] = useState(false);
  const [error, setErrors] = useState({
    fullName: "",
    gender: "",
    birthDate: "",
    age: "",
    phone: "",
    email: "",
    occupation: "",
    address: "",
    state: "",
    lga: "",
    town: "",
  });

  const dispatch = useDispatch();

  const findError = () => {
    const {
      fullName,
      gender,
      birthDate,
      phone,
      occupation,
      address,
      email,
      state,
      lga,
      town,
    } = inputValue;
    const newErrors = {};
    if (!fullName || fullName === "")
      newErrors.fullName = "name cannot be blank!";
    if (!gender || gender === "") newErrors.gender = "gender cannot be blank!";
    if (!birthDate || birthDate === "")
      newErrors.birthDate = "date of birth cannot be blank!";
    if (!phone || phone === "") newErrors.phone = "phone cannot be blank!";
    if (!occupation || occupation === "")
      newErrors.occupation = "occupation cannot be blank!";
    if (!address || address === "")
      newErrors.address = "address cannot be blank!";
    if (!email || email === "") newErrors.email = "email cannot be blank!";
    if (!state || state === "") newErrors.state = "state cannot be blank!";
    if (!lga || lga === "") newErrors.lga = "lga cannot be blank!";
    if (!town || town === "") newErrors.town = "town cannot be blank!";

    return newErrors;
  };
  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const calculateAge = (age) => {
    const years = moment().diff(`${age}`, "years", false);
    return years;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = findError();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      inputValue.age = calculateAge(inputValue.birthDate);
      inputValue.caseId = props.caseId;
      dispatch(editCase(inputValue));

      setInputValue({
        fullName: "",
        gender: "",
        birthDate: "",
        age: "",
        phone: "",
        email: "",
        occupation: "",
        address: "",
      });
      props.handleCloseModal();
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
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={inputValue?.email}
                onChange={handleChange}
                isInvalid={!!error.email}
              />
              <Form.Control.Feedback type="invalid">
                {error.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="col-md-6" controlId="formdepartment">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                name="state"
                value={inputValue?.state}
                onChange={handleChange}
                isInvalid={!!error.state}
              />
              <Form.Control.Feedback type="invalid">
                {error.state}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="card-body row">
            <Form.Group className="col-md-6" controlId="formdepartment">
              <Form.Label>LGA</Form.Label>
              <Form.Control
                type="text"
                name="lga"
                value={inputValue?.lga}
                onChange={handleChange}
                isInvalid={!!error.lga}
              />
              <Form.Control.Feedback type="invalid">
                {error.lga}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="col-md-6" controlId="formdepartment">
              <Form.Label>Town</Form.Label>
              <Form.Control
                type="text"
                name="town"
                value={inputValue?.town}
                onChange={handleChange}
                isInvalid={!!error.town}
              />
              <Form.Control.Feedback type="invalid">
                {error.town}
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
