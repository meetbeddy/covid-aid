import React from "react";

function InfoBox(props) {
  return (
    <div className="col-md-5 col-sm-6 col-9">
      <div className="info-box">
        <span className={`info-box-icon ${"bg-success"}`}>
          <i className={props.icon}></i>
        </span>

        <div className="info-box-content">
          <span className="info-box-text">{props.title}</span>
          <span className="info-box-number">{props.number}</span>
        </div>
      </div>
    </div>
  );
}

export default InfoBox;
