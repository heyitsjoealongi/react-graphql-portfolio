import * as React from "react";

import { Link, useParams } from "react-router-dom";

import { Container, Row, Col, List, ListInlineItem } from "reactstrap";

import { ReactComponent as Logo } from "../../assets/img/logo.svg";

const NavigationBar = () => {
  let params = useParams();

  return (
    <>
      <section
        className={`${
          params.slug != "/*" ? "navigation-footer-home" : "navigation-footer"
        }`}
      >
        <Container>
          <Row>
            <Col md="12">
              <div className="footer-brand">
                <Link to="/">
                  <Logo
                    height="80px"
                    width="80px"
                    loading="lazy"
                    alt="Lorem ipsum"
                  />
                </Link>
              </div>
              <div className="footer-menu">
                <Col md="12">
                  <List type="inline">
                    <ListInlineItem>
                      <Link to="experience">Experience</Link>
                    </ListInlineItem>
                    <ListInlineItem>
                      <Link to="work">Work</Link>
                    </ListInlineItem>
                    <ListInlineItem>
                      <Link to="blog">Blog</Link>
                    </ListInlineItem>
                    <ListInlineItem>
                      <Link to="about">About</Link>
                    </ListInlineItem>
                  </List>
                </Col>
              </div>
              <div className="footer-social-menu">
                <List type="inline">
                  <ListInlineItem>
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                    >
                      <i className="ri-twitter-fill"></i>
                    </a>
                  </ListInlineItem>
                  <ListInlineItem>
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <i className="ri-github-fill"></i>
                    </a>
                  </ListInlineItem>
                  <ListInlineItem>
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <i className="ri-linkedin-box-fill"></i>
                    </a>
                  </ListInlineItem>
                  <ListInlineItem>
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Medium"
                    >
                      <i className="ri-medium-fill"></i>
                    </a>
                  </ListInlineItem>
                </List>
              </div>
              <div className="footer-alternate-menu">
                <Col md="12">
                  <List type="inline">
                    <ListInlineItem>
                      <a
                        href="tel:+11111111111"
                        target="_self"
                        rel="noopener noreferrer"
                        aria-label="Call Me"
                      >
                        +1-111-111-1111
                      </a>
                    </ListInlineItem>
                    <ListInlineItem>
                      <a
                        href="mailto:email@email.com"
                        target="_self"
                        rel="noopener noreferrer"
                        aria-label="Email Me"
                      >
                        email@email.com
                      </a>
                    </ListInlineItem>
                    <ListInlineItem>
                      <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Google Maps"
                      >
                        quis nostrud
                      </a>
                    </ListInlineItem>
                  </List>
                </Col>
              </div>
              <p>&copy; 2022 react-graphql-portfolio</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default NavigationBar;
