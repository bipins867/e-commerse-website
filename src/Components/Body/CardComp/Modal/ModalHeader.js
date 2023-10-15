import { Col, Row, Image, Container, Form, Button } from "react-bootstrap";
import LineSeperator from "./LineSeperator";

export default (props) => {
  return (
    <>
      <Row>
        <Col className="col-5  ">
          <Container className=" d-flex justify-content-center">
            <h4>Item </h4>
          </Container>
        </Col>
        <Col className="col-2">
          <Container className=" d-flex justify-content-center">
            <h4>Price </h4>
          </Container>
        </Col>
        <Col className="col-5">
          <Container className=" d-flex justify-content-center">
            <h4>Quantity </h4>
          </Container>
        </Col>
      </Row>
      <LineSeperator />
    </>
  );
};
