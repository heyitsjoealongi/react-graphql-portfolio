/* eslint-disable react/prop-types */

import * as React from "react";

import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

const CardTall = (props) => {
  const { card } = props;
  return (
    <Card>
      <CardImg
        src={card.image_source}
        loading="lazy"
        top
        width="100%"
        alt="Blog Card Image"
      />
      <CardBody>
        <CardTitle tag="h5">{card.title}</CardTitle>
        <CardText>{card.text}</CardText>
        <Button>{card.button_text}</Button>
      </CardBody>
    </Card>
  );
};

export default CardTall;
