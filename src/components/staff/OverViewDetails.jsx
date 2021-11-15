import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ContactForm from "../forms/ContactForm";
import FollowUpForm from "../forms/FollowUpForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchContact } from "../../store/actions/adminActions";
import moment from "moment";

export default function OverViewDetails(props) {
  const state = props.location.state;

  console.log(state);

  const { contacts } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const data = [];
  contacts?.caseContacts?.forEach((c, index) => {
    c.serial = index + 1;
    data.push(c);
  });

  React.useEffect(() => {
    dispatch(fetchContact(state._id));
  }, [dispatch, state._id]);

  const [showModal, setShowModal] = React.useState(false);
  const [modal, selectedModal] = React.useState("");

  const handleShowModal = (e) => {
    selectedModal(e.target.value);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    dispatch(fetchContact(state._id));
    setShowModal(false);
  };
  const openProfile = (cell, row, rowIndex, formatExtraData) => {
    return (
      <button
        className="btn btn-primary"
        onClick={() => {
          const data = row;
          props.history.push({
            pathname: `/dashboard/test-reporting/${data._id}`,
            state: data,
          });
        }}
      >
        View Details
      </button>
    );
  };

  const columns = [
    {
      dataField: "serial",
      text: "#",
    },
    {
      dataField: "fullName",
      text: "Name",
      sort: true,
    },
    {
      dataField: "contacted",
      text: "Contacted",
    },
    {
      dataField: "viewdetails",
      text: "View Details",
      formatter: openProfile,
      sort: true,
    },
  ];
  return (
    <div className="card-body row">
      <div className="col-5 col-sm-3">
        <div
          className="nav flex-column nav-tabs h-100"
          id="vert-tabs-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <a
            className="nav-link active"
            id="vert-tabs-home-tab"
            data-toggle="pill"
            href="#vert-tabs-personal"
            role="tab"
            aria-controls="vert-tabs-home"
            aria-selected="true"
          >
            Personal Details
          </a>
          <a
            className="nav-link"
            id="vert-tabs-profile-tab"
            data-toggle="pill"
            href="#vert-tabs-test"
            role="tab"
            aria-controls="vert-tabs-profile"
            aria-selected="false"
          >
            Test Results
          </a>
          <a
            className="nav-link"
            id="vert-tabs-messages-tab"
            data-toggle="pill"
            href="#vert-tabs-contacts"
            role="tab"
            aria-controls="vert-tabs-messages"
            aria-selected="false"
          >
            Contacts
          </a>
        </div>
      </div>
      <div className="col-7 col-sm-9">
        <div className="tab-content " id="vert-tabs-tabContent">
          <div
            className="tab-pane text-left fade show active"
            id="vert-tabs-personal"
            role="tabpanel"
            aria-labelledby="vert-tabs-home-tab"
          >
            <div className="card-header">
              <button
                className="btn btn-primary float-right"
                onClick={handleShowModal}
                value="follow-up"
              >
                Enter Follow up Information
              </button>
            </div>
            <p className="lead text-primary">Identification</p>
            <dl className="row">
              <dt className="col-sm-4">Full name</dt>
              <dd className="col-sm-8">{state?.fullName}</dd>
              <dt className="col-sm-4">Date of birth</dt>
              <dd className="col-sm-8">{state?.birthDate}</dd>
              <dt className="col-sm-4">Gender</dt>
              <dd className="col-sm-8">{state?.gender}</dd>
              <dt className="col-sm-4">Email</dt>
              <dd className="col-sm-8">{state?.email}</dd>
              <dt className="col-sm-4">Phone number</dt>
              <dd className="col-sm-8">{state?.phone}</dd>
              <dt className="col-sm-4">Occupation</dt>
              <dd className="col-sm-8">{state?.occupation}</dd>
            </dl>
            <p className="lead text-primary">Follow Up Information</p>
            <dl className="row">
              <dt className="col-sm-4">Number of Virological Test</dt>
              <dd className="col-sm-8">{state?.fullName}</dd>
              <dt className="col-sm-4">Date of Last Test</dt>
              <dd className="col-sm-8">{state?.birthDate}</dd>
              <dt className="col-sm-4">Complication </dt>
              <dd className="col-sm-8">{state?.gender}</dd>
            </dl>
          </div>
          <div
            className="tab-pane fade"
            id="vert-tabs-test"
            role="tabpanel"
            aria-labelledby="vert-tabs-profile-tab"
          >
            {state.testResult?.map((test, i) => {
              return (
                <div key={test._id}>
                  <p className="lead text-primary">Result {i + 1}</p>
                  <dl className="row">
                    <dt className="col-sm-4">Lab Id</dt>
                    <dd className="col-sm-8">{test?.labId}</dd>
                    <dt className="col-sm-4">Number of Specimen</dt>
                    <dd className="col-sm-8">{test.specimenNumber}</dd>
                    <dt className="col-sm-4">sample collected</dt>
                    <dd className="col-sm-8">{test.sampleCollected}</dd>
                    <dt className="col-sm-4">Result</dt>
                    <dd className="col-sm-8">{test.testResult}</dd>
                    <dt className="col-sm-4"> date</dt>
                    <dd className="col-sm-8">
                      {moment(test.resultDate).format("llll")}
                    </dd>
                  </dl>
                </div>
              );
            })}
          </div>
          <div
            className="tab-pane fade"
            id="vert-tabs-contacts"
            role="tabpanel"
            aria-labelledby="vert-tabs-messages-tab"
          >
            <div className="card-header">
              <button
                className="btn btn-success float-right"
                style={{ marginLeft: "10px" }}
              >
                Fetch Contacts
              </button>
              <button
                onClick={handleShowModal}
                className="btn btn-primary float-right"
                value="add-contact"
              >
                Add Contact
              </button>
            </div>
            <div style={{ padding: "20px" }}>
              {data.length > 0 ? (
                <BootstrapTable keyField="_id" data={data} columns={columns} />
              ) : (
                <h1>No Contact Found </h1>
              )}
            </div>
          </div>
        </div>
      </div>
      <FollowUpForm
        showModal={modal === "follow-up" ? showModal : false}
        handleCloseModal={handleCloseModal}
        caseId={props.location.state?._id}
      />
      <ContactForm
        showModal={modal === "add-contact" ? showModal : false}
        handleCloseModal={handleCloseModal}
        caseId={props.location.state?._id}
      />
    </div>
  );
}
