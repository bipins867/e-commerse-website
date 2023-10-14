import { Row, Col } from "react-bootstrap";
import CardItem from "./CardItem";
import './CardList.css'

export default (props) => {
  return (
    <>
      <h1 className="m-5 fw-bold titleFamily">Title</h1>
      <Row className="row-cols-md-2 ">
        <Col className="pb-2">
          <CardItem />
        </Col>
        <Col className="pb-2">
          <CardItem />
        </Col>
        <Col className="pb-2">
          <CardItem />
        </Col>
        <Col className="pb-2">
          <CardItem />
        </Col>
      </Row>
    </>
  );
};
