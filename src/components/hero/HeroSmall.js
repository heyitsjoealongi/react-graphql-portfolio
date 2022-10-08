/* eslint-disable react/prop-types */

import * as React from "react";

import { Container, Row, Col } from "reactstrap";

import AngleGradient from "../gradients/ReactGraphQLPortfolioAngleGradient";

const HeroSmall = (props) => {
  const { hero } = props;
  return (
    <>
      <section className="hero-small">
        <Container fluid="md">
          <Row>
            <Col md="12">
              <h4>{hero.heading_4}</h4>
              <h1>{hero.heading_1}</h1>
              <p className="lead">{hero.paragraph_one}</p>
              <p className="lead">{hero.paragraph_two}</p>
            </Col>
            <Col md="12">
              <img
                src={hero.image_source}
                loading="lazy"
                height="800px"
                width="auto"
                alt="react-graphql-portfolio Hero Small"
                className="img-fluid"
              ></img>
            </Col>
          </Row>
        </Container>

        {/* Gradient */}
        <AngleGradient />
      </section>
    </>
  );
};

export default HeroSmall;
