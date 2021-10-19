import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import UserPannel from "./UserPannel";

function SideNav(props) {
  const { user } = props;
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link to="/dashboard" className="brand-link">
        <img
          src={"img/logo/unn-logo.png"}
          alt="unn Logo"
          className="brand-image  img-circle elevation-3"
        />
        <span className="brand-text font-weight-light">LMCS</span>
      </Link>

      <div className="sidebar">
        <UserPannel user={user} />
        {/* <!-- Sidebar Menu --> */}

        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw"></i>
              </button>
            </div>
          </div>
        </div>
        <NavItem {...props} menus={props.data} />
      </div>
    </aside>
  );
}

export default SideNav;
