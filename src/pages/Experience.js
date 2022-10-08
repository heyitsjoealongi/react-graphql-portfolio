import * as React from "react";

import { Helmet } from "react-helmet";

import { Container, Row, Col, Button } from "reactstrap";

import CardList from "../components/card/CardList";
import NewsletterLarge from "../components/newsletter/NewsletterLarge";
import AngleGradient from "../components/gradients/ReactGraphQLPortfolioAngleGradient";

function Experience() {
  return (
    <>
      {/* Meta Data */}
      <Helmet>
        <title>react-graphql-portfolio — experience</title>
        <meta name="title" content="react-graphql-portfolio — experience" />
        <meta
          name="description"
          content="Experienced top-tier developer, iterating through definitive JavaScript &amp; Java methods for equating data analysis, strategy, and experience to construct a vision."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://react-graphql-portfolio.vercel.app/experience"
        />
        <meta
          property="og:title"
          content="react-graphql-portfolio — experience"
        />
        <meta
          property="og:description"
          content="Experienced top-tier developer, iterating through definitive JavaScript &amp; Java methods for equating data analysis, strategy, and experience to construct a vision."
        />
        <meta
          property="og:image"
          content="http://react-graphql-portfolio.io/react-graphql-portfolio-meta.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@" />
        <meta
          property="twitter:url"
          content="https://react-graphql-portfolio.vercel.app/experience"
        />
        <meta
          property="twitter:title"
          content="react-graphql-portfolio — experience"
        />
        <meta
          property="twitter:description"
          content="Experienced top-tier developer, iterating through definitive JavaScript &amp; Java methods for equating data analysis, strategy, and experience to construct a vision."
        />
        <meta
          property="twitter:image"
          content="https://react-graphql-portfolio.vercel.app/react-graphql-portfolio.png"
        />
      </Helmet>

      <main className="experience">
        {/* Small Hero */}
        <section className="hero-small">
          <Container fluid="md">
            <Row>
              <Col md="12">
                <h4>Lorem ipsum</h4>
                <h1>Lorem ipsum</h1>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  adipiscing elit Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  adipiscing elit Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </Col>
              <Col md="12">
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
          <AngleGradient />
        </section>

        {/* Components */}
        <CardList />

        {/* Call To Action */}
        <section className="call-to-action">
          <Container fluid="md">
            <Row>
              <Col md="12">
                <h4>Lorem ipsum</h4>
                <h2>Lorem ipsum</h2>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Lorem ipsum"
                >
                  <Button className="button-filled">Lorem ipsum</Button>
                </a>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Components */}
        <NewsletterLarge />
      </main>
    </>
  );
}

export default Experience;
