import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Counter.css";

function Counter(props) {
  return (
    <Card border="success" className={props.counterName}>
      <Card.Body classname="counter" id={props.counterName}>
        <Card.Title>Username</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Date</Card.Subtitle>
        <Card.Text>Post text goes here.</Card.Text>
        
       
      </Card.Body>
    </Card>
  );
}

export default Counter;
