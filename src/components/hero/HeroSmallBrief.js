/* eslint-disable react/prop-types */

import * as React from "react";

import { Container, Row, Col } from "reactstrap";

import AngleGradient from "../gradients/ReactGraphQLPortfolioAngleGradient";

const HeroSmallBrief = (props) => {
  const { hero } = props;
  return (
    <>
      <section className="hero-small">
        <Container fluid="md">
          <Row>
            <Col md="12">
              <h4>{hero.heading_4}</h4>
              <h1>{hero.heading_1}</h1>
            </Col>
          </Row>
        </Container>

        {/* Gradient */}
        <AngleGradient />
      </section>
    </>
  );
};

export default HeroSmallBrief;
