import { Link } from "react-router-dom";

function SmallBox2(props) {
  return (
    <div className="col-lg-3 col-6">
      <div className={`small-box ${props.color}`}>
        <div className="inner">
          <h3>{props.number}</h3>

          <p>{props.title}</p>
        </div>
        <div className="icon">
          <i className={props.icon}></i>
        </div>
        <Link to={props.path} className="small-box-footer">
          More info <i className="fas fa-arrow-circle-right"></i>
        </Link>
      </div>
    </div>
  );
}

export default SmallBox2;
