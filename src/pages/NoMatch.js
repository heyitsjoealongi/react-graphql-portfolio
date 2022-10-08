import * as React from "react";

import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";

import { Container, Row, Col, Button } from "reactstrap";

function NoMatch() {
  return (
    <>
      {/* Meta Data */}
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        <title>react-graphql-portfolio — 404</title>
        <meta name="title" content="react-graphql-portfolio — 404" />
        <meta name="description" content="Not Found" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://react-graphql-portfolio.vercel.app/404"
        />
        <meta property="og:title" content="react-graphql-portfolio — 404" />
        <meta property="og:description" content="Not Found" />
        <meta
          property="og:image"
          content="http://react-graphql-portfolio.io/react-graphql-portfolio-meta.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@" />
        <meta
          property="twitter:url"
          content="https://react-graphql-portfolio.vercel.app/404"
        />
        <meta
          property="twitter:title"
          content="react-graphql-portfolio — 404"
        />
        <meta property="twitter:description" content="Not Found" />
        <meta
          property="twitter:image"
          content="https://react-graphql-portfolio.vercel.app/react-graphql-portfolio.png"
        />
      </Helmet>

      <main className="no-match">
        {/* Components */}
        <section className="no-matching-route">
          <Container fluid="md">
            <Row>
              <Col md="12">
                <img
                  height="100%"
                  width="100%"
                  loading="lazy"
                  alt="Lorem ipsum"
                  className="img-fluid"
                  src="https://via.placeholder.com/2000x2000"
                />
                <Link to="/">
                  <Button className="button-filled">Back To The Start</Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}

export default NoMatch;
