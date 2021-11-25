import React, { useState } from "react";
import ContentWrapper from "../utilities/ContentWrapper";
import { Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { createUser } from "../../store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { clearNotifications } from "../../store/actions/notificationsActions";

export default function CreateUser() {
  const [inputValue, setInputValue] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [error, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const notification = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const { success } = notification;
    if (success.message) {
      const { message } = notification.success;
      toast.success(message);
      return dispatch(clearNotifications());
    }
  }, [dispatch, notification]);

  const findError = () => {
    const { fullName, email, password, confirmpassword } = inputValue;
    const newErrors = {};
    if (!fullName || fullName === "")
      newErrors.fullName = "name cannot be blank!";
    if (!password || password === "")
      newErrors.password = "password cannot be blank!";
    if (!confirmpassword || confirmpassword === "")
      newErrors.confirmpassword = "confirm password cannot be blank!";
    if (!email || email === "") newErrors.email = "email cannot be blank!";

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
      dispatch(createUser(inputValue));
      setInputValue({
        fullName: "",
        email: "",
        password: "",
        confirmpassword: "",
      });
    }
  };

  return (
    <ContentWrapper>
      <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title">Create user form</h3>
        </div>

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

            <Form.Group className="mb-3 col-md-6" controlId="formdepartment">
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
          </div>

          <div className="card-body row">
            <Form.Group className="col-md-6" controlId="formbirthdate">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={inputValue?.password}
                onChange={handleChange}
                isInvalid={!!error.password}
              />
              <Form.Control.Feedback type="invalid">
                {error.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="col-md-6" controlId="formbirthdate">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmpassword"
                value={inputValue?.confirmpassword}
                onChange={handleChange}
                isInvalid={!!error.confirmpassword}
              />
              <Form.Control.Feedback type="invalid">
                {error.confirmpassword}
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
      </div>
      <ToastContainer position="top-center" />
    </ContentWrapper>
  );
}
