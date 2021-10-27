import React from "react";

function Preloader() {
  return (
    <div className="preloader flex-column justify-content-center align-items-center">
      <img
        className="animation__shake"
        src="https://res.cloudinary.com/lmcs/image/upload/v1630055729/static/favicon-32x32_fbthbv.png"
        alt="unn logo"
        height="60"
        width="60"
      />
    </div>
  );
}

export default Preloader;
