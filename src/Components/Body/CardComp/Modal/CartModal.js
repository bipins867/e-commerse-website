import { useContext, useState } from "react";
import { Container, Modal, Row,Col } from "react-bootstrap";
import ReactDOM from "react-dom";
import ModalBody from "./ModalBody";
import ModalHeader from "./ModalHeader";
import ModuleContext from "../../../../Store/module-context";


export default (props) => {
  
    const moduleContext=useContext(ModuleContext)
  
  function onModalCloseHandler() {
    moduleContext.setModuleCond(false);
  }

  const modalList=moduleContext.cartItems.map(cartItem=>{
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
