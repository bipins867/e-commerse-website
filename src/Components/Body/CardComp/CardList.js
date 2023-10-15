import { Row, Col } from "react-bootstrap";
import CardItem from "./CardItem";
import "./CardList.css";


export default (props) => {

  const cartItems=props.cartList.map(cartItem=>{
    return (
      <Col key={cartItem.id} className="pb-2">
        <CardItem cart={cartItem} />
      </Col>
    );
  })

  return (
    <>
      <h1 className="m-5 fw-bold titleFamily">{props.title}</h1>
      <Row className="row-cols-md-2 ">
        
        {cartItems}
      </Row>
    </>
  );
};
