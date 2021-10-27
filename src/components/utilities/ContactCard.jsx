import React from "react";

function ContactCard(props) {
  const { member } = props;

  return (
    <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
      <div className="card bg-light d-flex flex-fill">
        <div className="card-header text-muted border-bottom-0">
          {member?.employmentDetails?.rank}
        </div>
        <div className="card-body pt-0">
          <div className="row">
            <div className="col-7">
              <h2 className="lead">
                <b>{member?.name}</b>
              </h2>
              <p className="text-muted text-sm">
                <b>Member Id: </b> {member?.memberId}{" "}
              </p>
              <ul className="ml-4 mb-0 fa-ul text-muted">
                <li className="small">
                  <span className="fa-li">
                    <i className="fas fa-lg fa-building"></i>
                  </span>{" "}
                  Address: {member?.homeAddress}
                </li>
                <li className="small">
                  <span className="fa-li">
                    <i className="fas fa-lg fa-phone"></i>
                  </span>{" "}
                  Phone #: {member?.phone}
                </li>
              </ul>
            </div>
            <div
              className="col-5 text-center"
              style={{
                width: "200px",
                height: "200px",
                overFlow: "hidden",
              }}
            >
              <img
                src={member?.passport}
                alt="user-avatar"
                className="img-circle img-fluid"
                style={{
                  height: "100px",
                  width: "100px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="text-right">
            <button
              className="btn btn-sm btn-primary"
              onClick={() => {
                props.history.push({
                  pathname: `/dashboard/memberprofile/${member?._id}`,
                  state: {
                    id: member._id,
                  },
                });
              }}
            >
              <i className="fas fa-user"></i> View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
