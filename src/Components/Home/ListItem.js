import { Button, Row ,Col} from "react-bootstrap";

export default props=>{

    const item=props.item;

    return (
      <>
        <li className="list-group-item">
          <Row>
            <Col className="col-2 fw-bold">{item.date}</Col>
            <Col className="col-3">{item.title}</Col>
            <Col>{item.description}</Col>
            <Col className="col-2"><Button>Buy Ticket</Button></Col>
          </Row>
        </li>
      </>
    );
}