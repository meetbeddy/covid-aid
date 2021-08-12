import { Modal, Button, Typography, Container } from "@material-ui/core";
import React, { Component } from "react";
import Chatbot from "react-chatbot-kit";

import config from "./configs";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import "./selfassess.css";

const getModalStyle = () => {
  const top = 10;
  const left = 20;
  return {
    width: "50%",
    height: "550px",
    position: "fixed",
    top: `${top}%`,
    left: `${left}%`,
    right: "20%",
    // transform: `translate(-${top}%, -${left}%)`,
    margin: "auto",
    backgroundColor: "white",
    textAlign: "center",
    padding: "10px",
    boxSizing: "border-box",
  };
};

export class SelfAssessment extends Component {
  state = {
    start: false,
    modalStyle: getModalStyle,
  };

  handleStart = () => {
    this.setState({ start: true });
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

          <Typography variant="h6">Corona Virus Self Checker</Typography>
          {!this.state.start ? (
            <Container style={{ marginTop: "20%" }}>
              <>
                <Typography className="start__warning" gutterBottom paragraph>
                  Welcome to Our corona virus Self_checker, <br />
                  this tool is not a substitute for proffessional medical
                  advice, diagnosis or treatment. Please always consult a
                  medical proffessional for serious symptoms or emergencies
                </Typography>

                <Button
                  color="primary"
                  variant="contained"
                  onClick={this.handleStart}
                >
                  I accept
                </Button>
              </>
            </Container>
          ) : (
            <Chatbot
              config={config}
              actionProvider={ActionProvider}
              messageParser={MessageParser}
            />
          )}
        </div>
      </Modal>
    );
  }
}

export default SelfAssessment;
