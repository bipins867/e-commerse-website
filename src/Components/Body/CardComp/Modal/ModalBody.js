import { Col, Row, Image, Container, Form, Button } from "react-bootstrap";
import "./ModalBody.css";
import LineSeperator from "./LineSeperator";
import { useContext } from "react";
import ModuleContext from "../../../../Store/module-context";

export default (props) => {
  const cart = props.cart;
  const moduleContext = useContext(ModuleContext);

  function removeButtonHandler(event) {
    moduleContext.removeItem(cart.id);
  }

  return (
    <>
      <Row>
        <Col className="col-5">
          <Row className="d-flex text-center align-items-center">
            <Col>
              <Image className="image-size rounded-2" src={cart.imageUrl} />
            </Col>
            <Col className="">
              <h6 className="h6">{cart.title}</h6>
            </Col>
          </Row>
        </Col>
        <Col className="col-2 align-items-center text-center d-flex">
          <h5 className="text-danger">${cart.price}</h5>
        </Col>
        <Col className="col-5 align-items-center text-center d-flex">
          <Form.Control
            type="number"
            defaultValue={1}
            value={cart.quantity}
            className="input-size"
          />
          <Button variant="danger" className="ms-2" onClick={removeButtonHandler}>
            REMOVE
          </Button>
        </Col>
      </Row>
      <LineSeperator />
    </>
  );
};
