import React from "react";
import { Card, CardImg, CardBody, CardTitle, ButtonToggle } from "reactstrap";
import "./CardComponent.css";

const Example = (props) => {
  return (
    <div>
      <Card id="card-area">
        <CardImg src={props.img} top width="100%" alt="Card image cap" />
        <CardBody>
          <CardTitle id="card-tittle-area" tag="h5">
            {props.title}
          </CardTitle>
        </CardBody>
        <p id="point">Vote Points: {props.point}</p>
        <div>
          <ButtonToggle
            id="button"
            color="success"
            onClick={() => props.increament()}
          >
            Vote
          </ButtonToggle>
          <ButtonToggle
            id="button"
            color="danger"
            onClick={() => props.decrease()}
          >
            Un Vote
          </ButtonToggle>
        </div>
      </Card>
    </div>
  );
};

export default Example;
