import React, { useState } from "react";

import { Link } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  NavbarText,
  Button,
} from "reactstrap";

import { ReactComponent as Logo } from "../../assets/img/logo.svg";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNavigationMenu = () => setIsOpen(!isOpen);
  const closeNavigationMenu = () => setIsOpen(false);

  return (
    <>
      <section className="navigation">
        <Container>
          <Row>
            <Col md="12">
              <Navbar color="light" expand="lg" light>
                <NavbarBrand>
                  <Link to="/">
                    <Logo
                      height="64px"
                      width="64px"
                      loading="lazy"
                      alt="Lorem ipsum"
                      aria-label="Lorem ipsum"
                      onClick={closeNavigationMenu}
                    />
                  </Link>
                </NavbarBrand>
                <NavbarToggler onClick={openNavigationMenu} />
                <Collapse navbar isOpen={isOpen}>
                  <Nav className="mx-auto" navbar>
                    <NavItem>
                      <NavLink>
                        <Link
                          to="experience"
                          aria-label="Experience"
                          onClick={closeNavigationMenu}
                        >
                          Experience
                        </Link>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink>
                        <Link
                          to="work"
                          aria-label="Work"
                          onClick={closeNavigationMenu}
                        >
                          Work
                        </Link>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink>
                        <Link
                          to="blog"
                          aria-label="Blog"
                          onClick={closeNavigationMenu}
                        >
                          Blog
                        </Link>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink>
                        <Link
                          to="about"
                          aria-label="About"
                          onClick={closeNavigationMenu}
                        >
                          About
                        </Link>
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <NavbarText>
                    <a
                      href="mailto:email@email.com"
                      target="_self"
                      rel="noopener noreferrer"
                      aria-label="Contact"
                      onClick={closeNavigationMenu}
                    >
                      <Button className="button-call-to-action">Contact</Button>
                    </a>
                  </NavbarText>
                </Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default NavigationBar;
