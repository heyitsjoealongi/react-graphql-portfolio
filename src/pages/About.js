import * as React from "react";

import { Helmet } from "react-helmet";

import { Container, Row, Col } from "reactstrap";

import ContentIconsByImage from "../components/content/ContentIconsByImage";
import NewsletterLarge from "../components/newsletter/NewsletterLarge";

import AngleGradient from "../components/gradients/ReactGraphQLPortfolioAngleGradient";

function About() {
  return (
    <>
      {/* Meta Data */}
      <Helmet>
        <title>react-graphql-portfolio — about</title>
        <meta name="title" content="react-graphql-portfolio — about" />
        <meta
          name="description"
          content="Hello, my name is Joe Alongi — Full Stack Developer building integrated cloud native technology and software applications for businesses around the globe."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://react-graphql-portfolio.vercel.app/about"
        />
        <meta property="og:title" content="react-graphql-portfolio — about" />
        <meta
          property="og:description"
          content="Hello, my name is Joe Alongi — Full Stack Developer building integrated cloud native technology and software applications for businesses around the globe."
        />
        <meta
          property="og:image"
          content="http://react-graphql-portfolio.io/react-graphql-portfolio-meta.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@" />
        <meta
          property="twitter:url"
          content="https://react-graphql-portfolio.vercel.app/about"
        />
        <meta
          property="twitter:title"
          content="react-graphql-portfolio — about"
        />
        <meta
          property="twitter:description"
          content="Hello, my name is Joe Alongi — Full Stack Developer building integrated cloud native technology and software applications for businesses around the globe."
        />
        <meta
          property="twitter:image"
          content="https://react-graphql-portfolio.vercel.app/react-graphql-portfolio.png"
        />
      </Helmet>

      <main className="about">
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
                  dolore magna{" "}
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Lorem ipsum"
                  >
                    aliqua
                  </a>
                  . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  adipiscing elit Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.{" "}
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Lorem ipsum"
                  >
                    aliqua
                  </a>
                  . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Lorem ipsum"
                  >
                    adipiscing
                  </a>{" "}
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
                <div className="hero-image-frame">
                  <div
                    className="hero-image"
                    style={{
                      backgroundImage: `url(https://via.placeholder.com/2000x2000)`,
                    }}
                  ></div>
                </div>
              </Col>
            </Row>
          </Container>

          {/* Gradient */}
          <AngleGradient />
        </section>

        {/* Components */}
        <ContentIconsByImage />

        {/* Components */}
        <NewsletterLarge />
      </main>
    </>
  );
}

export default About;
