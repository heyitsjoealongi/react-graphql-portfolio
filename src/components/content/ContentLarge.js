import * as React from "react";

import { Link } from "react-router-dom";

import { Container, Row, Col, Button } from "reactstrap";

const HeroLarge = () => {
  return (
    <>
      <section className="content-large">
        <Container fluid="md">
          <Row>
            <Col md="12">
              <h4>Lorem ipsum</h4>
              <h2>Lorem ipsum</h2>
            </Col>
            <Col md="6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                adipiscing elit Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                adipiscing elit Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <div className="button-group">
                <Link to="/">
                  <Button className="button-filled">Lorem ipsum</Button>
                </Link>
              </div>
            </Col>
            <Col md="6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                adipiscing elit Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                adipiscing elit Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </Col>
          </Row>
        </Container>
        <section className="image-grid-content">
          <Container>
            <Row>
              <Col md="6">
                <img
                  height="800px"
                  width="800px"
                  loading="lazy"
                  alt="Lorem ipsum"
                  className="img-fluid"
                  src="https://via.placeholder.com/2000x2000"
                />
              </Col>
              <Col md="6">
                <img
                  height="800px"
                  width="800px"
                  loading="lazy"
                  alt="Lorem ipsum"
                  className="img-fluid"
                  src="https://via.placeholder.com/2000x2000"
                />
              </Col>
            </Row>
          </Container>
        </section>
      </section>
    </>
  );
};

export default HeroLarge;
