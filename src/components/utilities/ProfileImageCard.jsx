import React from "react";
import { Button } from "react-bootstrap";

function ProfileImageCard(props) {
  const { handleShowModal } = props;
  const { name, passport } = props.location?.state || props.user;
  return (
    <div className="col-md-3">
      <div className="card card-primary card-outline">
        <div className="card-body box-profile">
          <div className="text-center">
            <div>
              <img
                className="profile-user-img img-fluid img-circle"
                src={passport}
                alt="User profile"
                style={{
                  height: "100px",
                  width: "100px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          {/* <h3 className="profile-username text-center"> </h3> */}
          <p className="text-muted text-center">{name}</p>

          {/* <ul className="list-group list-group-unbordered mb-3">
            <li className="list-group-item">
              <b>Followers</b>{" "}
              <a href="#profile" className="float-right">
                1,322
              </a>
            </li>
            <li className="list-group-item">
              <b>Following</b>{" "}
              <a href="#profile" className="float-right">
                543
              </a>
            </li>
            <li className="list-group-item">
              <b>Friends</b>{" "}
              <a href="#profile" className="float-right">
                13,287
              </a>
            </li>
          </ul> */}

          <Button
            onClick={() => handleShowModal()}
            className="btn btn-primary btn-block"
          >
            <b>Confirm User</b>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProfileImageCard;
