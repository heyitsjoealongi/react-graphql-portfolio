import * as React from "react";

import { Form, InputGroup, Input, Button } from "reactstrap";

import axios from "axios";

import UtilAlert from "../util/UtilAlert";

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.alertComponent = React.createRef();
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    const url = `${process.env.NEWSLETTER_BACKEND_ENDPOINT}`;
    axios
      .post(
        url,
        {
          email: this.state.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
        this.alertComponent.current.handleOpen();
        this.alertComponent.current.setState({ text: this.state.value });
      })
      .catch((error) => {
        console.log(error);
        this.alertComponent.current.handleOpen();
        this.alertComponent.current.setState({ text: this.state.value });
      });

    event.preventDefault();
  };

  handleAlertVisible = () => {
    this.alertComponent.current.handleOpen();
  };

  render() {
    return (
      <>
        <UtilAlert ref={this.alertComponent} />
        <Form inline onSubmit={this.handleSubmit}>
          <InputGroup className="mb-2 me-sm-2 mb-sm-0">
            <Input
              id="email"
              name="email"
              type="email"
              htmlFor="email"
              aria-label="Newsletter Email"
              placeholder="Enter Your Email Address"
              value={this.state.value}
              onChange={this.handleChange}
              required
            />
            <Button type="submit" value="Submit">
              Lorem Ipsum
            </Button>
          </InputGroup>
        </Form>
      </>
    );
  }
}

export default NewsletterForm;
