/* eslint-disable react/prop-types */

import * as React from "react";

import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const CardTall = (props) => {
  const { card } = props;
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h4">{card.title}</CardTitle>
        <CardSubtitle>{card.subtitle}</CardSubtitle>
      </CardBody>
    </Card>
  );
};

export default CardTall;
