import * as React from "react";

import { Link } from "react-router-dom";

import { Container, Row, Col, Button } from "reactstrap";

import AngleSolid from "../gradients/ReactGraphQLPortfolioAngleSolid";

const SideByImageContent = () => {
  return (
    <>
      <section className="content-side-by-image">
        <Container fluid="md">
          <Row>
            <Col md="6">
              <h4>Lorem ipsum</h4>
              <h2>Lorem ipsum</h2>
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
              <section className="content-side-by-image-grid">
                <Row>
                  <Col md="6">
                    <img
                      height="80px"
                      width="80px"
                      loading="lazy"
                      alt="Lorem ipsum"
                      className="img-fluid"
                      src="https://via.placeholder.com/2000x2000"
                    />
                    <h6>Lorem ipsum</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>
                  </Col>
                  <Col md="6">
                    <img
                      height="80px"
                      width="80px"
                      loading="lazy"
                      alt="Lorem ipsum"
                      className="img-fluid"
                      src="https://via.placeholder.com/2000x2000"
                    />
                    <h6>Lorem ipsum</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>
                  </Col>
                </Row>
              </section>
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

        {/* Gradient */}
        <AngleSolid />
      </section>
    </>
  );
};

export default SideByImageContent;
