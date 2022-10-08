import * as React from "react";

import { Container, Row, Col } from "reactstrap";

import UtilLoader from "../util/UtilLoader";
import CardTall from "./CardTall";

const CardList = () => {
  const data = [
    {
      id: "0",
      title: "Lorem ipsum",
      subtitle: "Lorem ipsum",
      link: "/",
    },
    {
      id: "1",
      title: "Lorem ipsum",
      subtitle: "Lorem ipsum",
      link: "/",
    },
    {
      id: "2",
      title: "Lorem ipsum",
      subtitle: "Lorem ipsum",
      link: "/",
    },
    {
      id: "3",
      title: "Lorem ipsum",
      subtitle: "Lorem ipsum",
      link: "/",
    },
    {
      id: "4",
      title: "Lorem ipsum",
      subtitle: "Lorem ipsum",
      link: "/",
    },
    {
      id: "5",
      title: "Lorem ipsum",
      subtitle: "Lorem ipsum",
      link: "/",
    },
  ];

  if (data != null) {
    return (
      <>
        <section className="card-grid">
          <Container fluid="md">
            <section className="card-grid-intro">
              <Row>
                <Col md="12">
                  <h4>Lorem ipsum</h4>
                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </h2>
                </Col>
              </Row>
            </section>
            <section className="card-grid-cards flex-box-container-start-stretch">
              {data.map((card) => (
                <div className="flex-box-start-stretch" key={card.id}>
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={card.title}
                  >
                    <CardTall card={card} />
                  </a>
                </div>
              ))}
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
