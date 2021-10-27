import React, { useState } from "react";
import InitialSavingAdminPreview from "../forms/InitialSavingAdminPreview";
import DialogModal from "./DialogModal";
import { useDispatch } from "react-redux";
import { acknowledgeReciept } from "../../store/actions/adminActions";
import IncreaseAdminPreview from "../forms/IncreaseAdminPreview";
import DecreaseAdminPreview from "../forms/DecreaseAdminPreview";

export default function Accordion(props) {
  const renderInfo = (type) => {
    switch (type) {
      case "increase":
        return <IncreaseAdminPreview user={props.member} />;
      case "initial":
        return <InitialSavingAdminPreview user={props.member} />;
      case "decrease":
        return <DecreaseAdminPreview user={props.member} />;

      default:
        return null;
    }
  };
  const [smShow, setSmShow] = useState(false);
  const handleShowModal = () => {
    setSmShow(true);
  };

  const dispatch = useDispatch();
  const handleCloseModal = () => {
    setSmShow(false);
  };
  const {
    member: {
      initialSavingsRequest,
      increaseSavingsRequest,
      decreaseSavingsRequest,
    },
  } = props;
  const userData = {
    initialSavingsRequest,
    increaseSavingsRequest,
    decreaseSavingsRequest,
    id: props.member._id,
    name: props.member.name,
    email: props.member.email,
    memberId: props.member.memberId,
  };

  const handleSubmit = (e) => {
    const type = e.target.value;
    dispatch(acknowledgeReciept(userData, type));
    handleCloseModal();
  };
  return (
    <div className="col-12" id="accordion">
      <div className="card card-primary card-outline">
        <a
          className="d-block w-100"
          data-toggle="collapse"
          href={`#collapse${props.index + 1}`}
        >
          <div className="card-header">
            <h4 className="card-title w-100">
              {props.index + 1}. {props.member.name}
            </h4>
          </div>
        </a>
        <div
          id={`collapse${props.index + 1}`}
          className="collapse"
          data-parent="#accordion"
        >
          <div className="card-body">
            <DialogModal
              type={props.type}
              smShow={smShow}
              handleCloseModal={handleCloseModal}
              handleSubmit={handleSubmit}
            />
            {renderInfo(props.type)}
            {/* <!-- this row will not appear when printing --> */}
            <div className="row no-print" style={{ marginTop: "100px" }}>
              <div className="col-12">
                <button
                  type="button"
                  className="btn btn-danger "
                  style={{ marginRight: "5px" }}
                  onClick={() => props.handleDecline(userData)}
                >
                  <i className="fas fa-eject"></i> {""}Reject
                </button>

                <button
                  type="button"
                  className="btn btn-success float-right"
                  style={{ marginRight: "5px" }}
                  onClick={handleShowModal}
                >
                  <i className="fas fa-download"></i> Acknowledge reciept
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
