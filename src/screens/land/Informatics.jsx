import React from "react";
import { Link } from "react-router-dom";

export default function Informatics(props) {
  return (
    <div id="blogs" className=" text-center">
      <div className="container">
        <div className="section-title">
          <h2>Covid 19 Resources and Information</h2>
        </div>
        <div className="card ">
          <div className="row">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    className="callout callout-danger col-md-6"
                    key={d.name + i}
                  >
                    <Link to={d.path}>
                      <h5>{d.name}</h5>
                    </Link>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    </div>
  );
}
