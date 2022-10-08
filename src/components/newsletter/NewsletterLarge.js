import * as React from "react";

import { Container, Row, Col } from "reactstrap";

import NewsletterForm from "./NewsletterForm";

const NewsletterLarge = () => {
  return (
    <>
      <section className="newsletter-large">
        <Container fluid="md">
          <Row>
            <Col md="12">
              <h4>Lorem ipsum</h4>
              <h2>Lorem ipsum</h2>
              <NewsletterForm />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default NewsletterLarge;
