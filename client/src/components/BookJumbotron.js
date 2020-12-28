import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const BookJumbotron = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>{props.title}</h1>
        </Container>
      </Jumbotron>
      <span className="mb-3 p-0">
        Photo by{" "}
        <a href="https://unsplash.com/photos/f2Bi-VBs71M">
          Nick Fewings
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/f2Bi-VBs71M">
          Unsplash
        </a>
      </span>
    </div>
  );
};

export default BookJumbotron;