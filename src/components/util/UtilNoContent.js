import * as React from "react";

import { Link } from "react-router-dom";

import { Container, Row, Col, Button } from "reactstrap";

const UtilNoContent = () => {
  return (
    <>
      <section className="no-content">
        <Container fluid="md">
          <Row>
            <Col md="12">
              <h4>Lorem ipsum</h4>
              <Link to="/">
                <Button className="button-filled">Lorem ipsum</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default UtilNoContent;
