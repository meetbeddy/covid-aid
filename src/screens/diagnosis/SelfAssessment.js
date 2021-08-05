import { Modal, makeStyles, Button } from "@material-ui/core";
import React, { Component } from "react";
import "./selfassess.css";

const getModalStyle = () => {
  const top = 20;
  const left = 20;
  return {
    width: "50%",
    height: "450px",
    position: "fixed",
    top: `${top}%`,
    left: `${left}%`,
    right: "20%",
    // transform: `translate(-${top}%, -${left}%)`,
    margin: "auto",
    backgroundColor: "white",
    overflowY: "scroll",
    textAlign: "center",
    padding: "10px",
    boxSizing: "border-box",
  };
};

export class SelfAssessment extends Component {
  state = {
    test: [
      {
        question: "",
        options: [],
      },
    ],
    response: [],
    start: false,
    modalStyle: getModalStyle,
  };

  render() {
    return (
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        open={this.props.open}
        onClose={this.props.toggleOpen}
      >
        <div style={this.state.modalStyle()}>
          <div className="exit">
            {" "}
            <Button onClick={() => this.props.toggleOpen()} id="exit__button">
              X
            </Button>
          </div>

          <h2>Corona Virus Self Checker</h2>
          <div className="main">
            <p className="start__warning">
              Welcome to Our corona virus Self_checker, <br />
              this tool is not a substitute for proffessional medical advice,
              diagnosis or treatment. Please always consult a medical
              proffessional for serious symptoms or emergencies
            </p>
            <Button color="primary" variant="contained">
              I accept
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default SelfAssessment;
