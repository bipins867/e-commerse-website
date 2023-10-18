import { useContext } from "react";
import "./Card.css";
import { Button, Card, Row, Col } from "react-bootstrap";
import ModuleContext from "../../../Store/module-context";

export default (props) => {
  const moduleContext = useContext(ModuleContext);
  function checkItemInCart(id) {
    let cond = false;

    for (const cartItem of moduleContext.cartItems) {
      if (cartItem.id === id) {
        cond = true;
        break;
      }
    }
    let toast={};
    if (cond) {
       toast = {
        show: true,
        title: props.cart.title,
        body: "Product is already added to the cart",
        dangerType: true,
      };
    } else {
       toast = {
        show: true,
        title: props.cart.title,
        body: "Product added to the cart",
        dangerType: false,
      };
    }
    moduleContext.setToastContent(toast);
    setTimeout(() => {
      const toast = {
        show: false,
        title:'',
        body: "",
        dangerType: true,
      };
      moduleContext.setToastContent(toast);
    }, 3000);
    return cond;
  }
  function add2CartHandler(event) {
    const cond = checkItemInCart(props.cart.id);
    if (!cond) {
      moduleContext.addItem(props.cart.id);
    }
  }
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header>
        <h3 className="text-center">{props.cart.title}</h3>
      </Card.Header>
      <Card.Body>
        <div className="image-container">
          <Card.Img className="image-style" src={props.cart.imageUrl} />
        </div>
      </Card.Body>
      <Card.Footer>
        <Row>
          <Col className="text-start">
            <span className="fw-bold text-danger h5">
              {"$"}
              {props.cart.price}
            </span>
          </Col>
          <Col sm={8} className="text-end">
            <Button className="" onClick={add2CartHandler}>
              Add to Cart
            </Button>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};
