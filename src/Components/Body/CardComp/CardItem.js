import "./Card.css";
//import helloImage from "../../../Assets/Album 1.png";
import {Button,Card,Row,Col} from 'react-bootstrap'

export default (props) => {
  
  
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
           <span className="fw-bold text-danger h5">{'$'}{props.cart.price}</span>
         </Col>
         <Col sm={8} className="text-end">
           <Button className="">Add to Cart</Button>
         </Col>
       </Row>
     </Card.Footer>
   </Card>
 );
};
