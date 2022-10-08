import * as React from "react";

import { Container, Row, Col } from "reactstrap";

import UtilLoader from "../util/UtilLoader";
import CardWide from "./CardWide";

const CardList = () => {
  const data = [
    {
      id: "0",
      image_source: "https://via.placeholder.com/2000x2000",
      date: "2022 - Present",
      title: "Lorem ipsum",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/",
    },
    {
      id: "1",
      image_source: "https://via.placeholder.com/2000x2000",
      date: "2021 - 2022",
      title: "Lorem ipsum",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/",
    },
    {
      id: "2",
      image_source: "https://via.placeholder.com/2000x2000",
      date: "2020 - 2021",
      title: "Lorem ipsum",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/",
    },
    {
      id: "3",
      image_source: "https://via.placeholder.com/2000x2000",
      date: "2019 - 2020",
      title: "Lorem ipsum",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/",
    },
    {
      id: "4",
      image_source: "https://via.placeholder.com/2000x2000",
      date: "2018 - 2019",
      title: "Lorem ipsum",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/",
    },
  ];

  if (data != null) {
    return (
      <>
        <section className="card-list">
          <Container fluid="md">
            <section className="card-list-intro">
              <Row>
                <Col md="12">
                  <h4>Lorem ipsum</h4>
                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod.
                  </h2>
                </Col>
              </Row>
            </section>
            <section className="card-list-cards">
              <Row>
                {data.map((card) => (
                  <Col md="12" key={card.id}>
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={card.title}
                    >
                      <CardWide card={card} />
                    </a>
                  </Col>
                ))}
              </Row>
            </section>
          </Container>
        </section>
      </>
    );
  } else {
    return <UtilLoader />;
  }
};

export default CardList;
