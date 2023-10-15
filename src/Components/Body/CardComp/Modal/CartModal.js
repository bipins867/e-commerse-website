import { useContext, useState } from "react";
import { Container, Modal, Row,Col } from "react-bootstrap";
import ReactDOM from "react-dom";
import ModalBody from "./ModalBody";
import ModalHeader from "./ModalHeader";
import ModuleContext from "../../../../Store/module-context";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },

  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

export default (props) => {
  
    const moduleContext=useContext(ModuleContext)
  
  function onModalCloseHandler() {
    moduleContext.setModuleCond(false);
  }

  const modalList=cartElements.map(cartItem=>{
   return  <ModalBody key={Math.random().toString()} cart={cartItem}/>
  })
  return (
    <Modal show={moduleContext.moduleCond} onHide={onModalCloseHandler}>
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <ModalHeader/>
          {modalList}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <span>
          <h3 className="h4 fw-bold">Total</h3>
        </span>{" "}
        <span className="px-2">
          <h4 className="text-danger">
            {"$"}
            {29.98}
          </h4>
        </span>
      </Modal.Footer>
    </Modal>
  );
};
