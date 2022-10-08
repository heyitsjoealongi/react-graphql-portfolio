/* eslint-disable react/prop-types */

import * as React from "react";

import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const CardWide = (props) => {
  const { card } = props;
  return (
    <Card>
      <div
        className="card-image"
        style={{ backgroundImage: `url(${card.image_source})` }}
      ></div>
      <CardBody>
        <h6>{card.date}</h6>
        <CardTitle tag="h4">{card.title}</CardTitle>
        <CardText>{card.paragraph}</CardText>
      </CardBody>
    </Card>
  );
};

export default CardWide;
