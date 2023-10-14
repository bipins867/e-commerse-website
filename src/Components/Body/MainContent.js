import { Button, CardLink, Container } from "react-bootstrap";
import Title from "./Title";
import CardList from "./CardComp/CardList";

export default (props) => {
  return (
    <>
      <Container className="mt-5 text-center">
        <Title />
        <Container className="d-flex ">
          <center>
            <CardList />
            <CardList />
            <Button variant="secondary" className="btn-lg m-2">See the cart</Button>
          </center>
        </Container>
      </Container>
    </>
  );
};
