import { Link } from "react-router-dom";
function SmallBox(props) {
  const amount = new Intl.NumberFormat("en-US").format(props?.amount);
  return (
    <div className="col-lg-3 col-6">
      <div className="small-box " style={{ backgroundColor: `${props.color}` }}>
        <div className="inner">
          <h3 style={{ fontSize: "2em" }}>
            {props.amount ? `\u{020A6}` + amount : `\u{020A6}` + 0}
          </h3>
          <p> {props.name}</p>
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

export default SmallBox;
