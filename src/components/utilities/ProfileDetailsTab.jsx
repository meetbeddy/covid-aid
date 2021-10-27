import React from "react";
import Preloader from "./Preloader";

function ProfileDetailsTab(props) {
  const { state } = props?.location || props.user;

  return state && state ? (
    <div className="col-md-9">
      <div className="card">
        <div className="card-header p-2">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link active" href="#activity" data-toggle="tab">
                Personal Details
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#timeline" data-toggle="tab">
                Employment Details
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#settings" data-toggle="tab">
                Payment Details
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <div className="tab-content">
            {/* personal details tab */}
            <div className="active tab-pane" id="activity">
              <div className="card">
                <div className="card-body">
                  <dl className="row">
                    <dt className="col-sm-4">Full name</dt>
                    <dd className="col-sm-8">{state?.name}</dd>
                    <dt className="col-sm-4">Date of birth</dt>
                    <dd className="col-sm-8">{state?.birthDate}</dd>

                    <dt className="col-sm-4">Email</dt>
                    <dd className="col-sm-8">{state?.email}</dd>
                    <dt className="col-sm-4">Phone number</dt>
                    <dd className="col-sm-8">{state?.phone}</dd>
                    <dt className="col-sm-4">Home address</dt>
                    <dd className="col-sm-8">{state?.homeAddress}</dd>
                  </dl>
                </div>
              </div>
            </div>

            {/* personaldetails end */}
            <div className="tab-pane" id="timeline">
              <div className="card">
                <div className="card-body">
                  <dl className="row">
                    <dt className="col-sm-6">Name of organisation</dt>
                    <dd className="col-sm-6">
                      {state?.employmentDetails.organisationName}
                    </dd>
                    <dt className="col-sm-6">campus Name</dt>
                    <dd className="col-sm-6">
                      {state?.employmentDetails?.campusName}
                    </dd>

                    <dt className="col-sm-6">Faculty</dt>
                    <dd className="col-sm-6">
                      {state?.employmentDetails.faculty}
                    </dd>

                    <dt className="col-sm-6">Department</dt>
                    <dd className="col-sm-6">
                      {state?.employmentDetails.department}
                    </dd>
                    <dt className="col-sm-6">Rank/Designation</dt>
                    <dd className="col-sm-6">
                      {state?.employmentDetails.gradeLevel}
                    </dd>

                    <dt className="col-sm-6">Step</dt>
                    <dd className="col-sm-6">{state.employmentDetails.step}</dd>
                    <dt className="col-sm-6">Date of retirement</dt>
                    <dd className="col-sm-6">
                      {state?.employmentDetails.retirementDate}
                    </dd>
                    <dt className="col-sm-6">IPPIS Number</dt>
                    <dd className="col-sm-6">
                      {state?.employmentDetails.ippisNum}
                    </dd>
                    <dt className="col-sm-6">Salary Structure</dt>
                    <dd className="col-sm-6">
                      {state?.employmentDetails.salaryStructure}
                    </dd>
                    <dt className="col-sm-6">Category</dt>
                    <dd className="col-sm-6">{state.category}</dd>
                    <dt className="col-sm-6">Date of Assumption of duty </dt>
                    <dd className="col-sm-6">
                      {state?.employmentDetails.assumptionOfdutyDate}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>

            <div className="tab-pane" id="settings">
              <div className="card">
                <div className="card-body">
                  <dl className="row">
                    <dt className="col-sm-4">Teller Name</dt>
                    <dd className="col-sm-8">
                      {state?.paymentDetails.tellerName}
                    </dd>

                    <dt className="col-sm-4">Teller Number</dt>
                    <dd className="col-sm-8">
                      {state?.paymentDetails.tellerRefNum}
                    </dd>

                    <dt className="col-sm-4">Payment date</dt>
                    <dd className="col-sm-8">
                      {" "}
                      {state?.paymentDetails.paymentDate}
                    </dd>

                    <dt className="col-sm-4">Bank Name</dt>
                    <dd className="col-sm-8">
                      {state.paymentDetails.bankName}
                    </dd>
                    <dt className="col-sm-4">Amount Paid</dt>
                    <dd className="col-sm-8">{state?.paymentDetails.amount}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Preloader />
  );
}

export default ProfileDetailsTab;
