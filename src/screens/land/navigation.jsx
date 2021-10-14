import { Link } from "react-router-dom";
export const Navigation = (props) => {
  return (
    <nav
      id="menu"
      className="navbar navbar-expand-lg nav-light bg-light navbar-main navbar-top "
    >
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggler collapsed"
            data-toggle="collapse"
            data-target="#example-navbar-collapse-1"
          >
            {" "}
            <span className="navbar-toggler-icon">
              <i className="fas fa-bars" />
            </span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Covid Aid
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="example-navbar-collapse-1"
        >
          <ul className="navbar-nav  mr-auto navbar-right">
            <li className="nav-item">
              <a href="#covid-tracker" className="nav-link page-scroll">
                Covid Tracker
              </a>
            </li>
            <li className="nav-item ">
              <a
                href="#"
                onClick={props.toggleOpen}
                className="nav-link page-scroll"
              >
                Self Assessment
              </a>
            </li>
            <li className="nav-item">
              <a href="#covid-tracker" className="nav-link page-scroll">
                Report a case
              </a>
            </li>
            <li className="nav-item">
              <a href="#covid-tracker" className="nav-link page-scroll">
                Covid Blogs
              </a>
            </li>
          </ul>
          <span className=" form-inline my-2 my-lg-0">
            <Link to="/signin" className="nav-link page-scroll">
              <button className="nav-link auth-button"> LOGIN</button>{" "}
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};
