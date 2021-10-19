import React from "react";

export default function Contents(props) {
  return (
    <div className="col-5 col-sm-3">
      <div className="nav flex-column nav-tabs h-100">
        {props?.post?.map((p, i) => (
          <p
            key={i + p.id}
            className=" btn nav-link"
            style={{ textAlign: "left" }}
            onClick={() => {
              props.history.push({
                pathname: `/covid-blog/${props.pathname}/${p.id}`,
              });
            }}
          >
            {p.title}
          </p>
        ))}
      </div>
    </div>
  );
}
