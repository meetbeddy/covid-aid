import React, { Component } from "react";
import { RiseLoader } from "react-spinners";
import "./splash-screen.css";

function LoadingMessage() {
  const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;
  return (
    <div className="splash-screen">
      <h1>CovidAid</h1>
      <RiseLoader color={"#36D7B7"} css={override} size={150} />
    </div>
  );
}
function withSplashScreen(WrappedComponent) {
  return class withSplashScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    async componentDidMount() {
      try {
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 5000);
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }
    render() {
      if (this.state.loading) return LoadingMessage();
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withSplashScreen;
