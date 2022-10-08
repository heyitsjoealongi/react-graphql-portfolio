/* eslint-disable react/prop-types */

import * as React from "react";

import { Link } from "react-router-dom";

import { Container, Row, Col, Button } from "reactstrap";

import AngleGradient from "../gradients/ReactGraphQLPortfolioAngleGradient";

const HeroLarge = (props) => {
  const { hero } = props;

  return (
    <>
      <section className="hero-large">
        <Container fluid="md">
          <Row>
            <Col md="6" className="introduction">
              <h4>{hero.heading_4}</h4>
              <h1>{hero.heading_1}</h1>
              <p className="lead">{hero.paragraph}</p>
              <div className="button-group">
                <Link to={hero.button_link_one}>
                  <Button className="button-filled">
                    {hero.button_text_one}
                  </Button>
                </Link>
                <Link to={hero.button_link_two}>
                  <Button className="button-outline">
                    {hero.button_text_two}
                  </Button>
                </Link>
              </div>
            </Col>
            <Col md="6">
              <img
                src={hero.image_source}
                height="800px"
                width="800px"
                loading="lazy"
                alt="react-graphql-portfolio Hero Large"
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

export default HeroLarge;
