import * as React from "react";

import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";

import { Container, Row, Col, Button } from "reactstrap";

import ImageGrid from "../components/image-grid/ImageGridPartner";
import LargeContent from "../components/content/ContentLarge";
import ContentSideByImage from "../components/content/ContentSideByImage";
import NewsletterLarge from "../components/newsletter/NewsletterLarge";
import AngleGradient from "../components/gradients/ReactGraphQLPortfolioAngleGradient";

function Home() {
  return (
    <>
      {/* Meta Data */}
      <Helmet>
        <title>react-graphql-portfolio</title>
        <meta name="title" content="react-graphql-portfolio" />
        <meta name="application-name" content="react-graphql-portfolio" />
        <meta name="description" content="Lorem ipsum" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://react-graphql-portfolio.vercel.app/"
        />
        <meta property="og:title" content="react-graphql-portfolio" />
        <meta property="og:description" content="Lorem ipsum" />
        <meta
          property="og:image"
          content="https://react-graphql-portfolio.vercel.app/react-graphql-portfolio.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@" />
        <meta
          property="twitter:url"
          content="https://react-graphql-portfolio.vercel.app/"
        />
        <meta property="twitter:title" content="react-graphql-portfolio" />
        <meta property="twitter:description" content="Lorem ipsum" />
        <meta
          property="twitter:image"
          content="https://react-graphql-portfolio.vercel.app/react-graphql-portfolio.png"
        />
      </Helmet>

      <main className="home">
        {/* Large Hero */}
        <section className="hero-large">
          <Container fluid="md">
            <Row>
              <Col md="6">
                <h4>Lorem ipsum</h4>
                <h1>Lorem ipsum</h1>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut{" "}
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Lorem ipsum"
                  >
                    labore
                  </a>{" "}
                  et dolore magna aliqua. adipiscing elit Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="button-group">
                  <Link to="experience">
                    <Button className="button-filled">Lorem ipsum</Button>
                  </Link>
                  <Link to="about">
                    <Button className="button-outline">Lorem ipsum</Button>
                  </Link>
                </div>
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
          <AngleGradient />
        </section>

        {/* Components */}
        <ImageGrid />
        <LargeContent />
        <NewsletterLarge />
        <ContentSideByImage />
      </main>
    </>
  );
}

export default Home;
