/* eslint-disable react/prop-types */
import * as React from "react";

import { Alert } from "reactstrap";

class UtilAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, height: 0, text: "Hello" };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleText = this.handleText.bind(this);
  }

  handleOpen = () => {
    this.setState({ visible: true });
    setTimeout(() => {
      this.setState({ visible: false });
    }, 4000);
    if (typeof window !== "undefined") {
      this.setState({
        height: window.scrollY,
      });
      window.addEventListener("scroll", this.handleScroll);
    }
  };

  handleClose = () => {
    this.setState({ visible: false });
    if (typeof window !== "undefined") {
      window.removeEventListener("scroll", this.handleScroll);
    }
  };

  handleScroll = () => {
    if (
      window.scrollY >= this.state.height + 400 ||
      window.scrollY <= this.state.height - 400
    ) {
      this.setState({ visible: false });
      window.removeEventListener("scroll", this.handleScroll);
    }
  };

  handleText = () => {
    this.setState(this.props.text);
  };

  render() {
    return (
      <>
        <Alert
          isOpen={this.state.visible}
          toggle={this.handleClose}
          onScroll={this.handleScroll}
        >
          Thank you for subscribing {this.state.text}!
        </Alert>
      </>
    );
  }
}

export default UtilAlert;
