import React from "react";
import { Link } from "react-router-dom";

export default function SecondaryNav(props) {
  return (
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>{props.title}</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <Link to="/#blogs">Home</Link>
              </li>
              <li className="breadcrumb-item active">{props.title}</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
