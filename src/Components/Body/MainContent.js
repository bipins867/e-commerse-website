import { Button, CardLink, Container } from "react-bootstrap";
import Title from "./Title";
import CardList from "./CardComp/CardList";
import CartModal from "./CardComp/Modal/CartModal";
import ReactDOM from 'react-dom';
import { useContext } from "react";
import ModuleContext from "../../Store/module-context";
import PopupToast from "./CardComp/Popup/PopupToast";

const cartList1 = [
  { id: "al1", title: "Album 1", price: 30.5, imageUrl: "/Assets/Album 1.png" },
  { id: "al2", title: "Album 2", price: 45.5, imageUrl: "/Assets/Album 2.png" },
  {
    id: "al3",
    title: "Album 3",
    price: 33.15,
    imageUrl: "/Assets/Album 3.png",
  },
  { id: "al4", title: "Album 4", price: 10.4, imageUrl: "/Assets/Album 4.png" },
];
const cartList2 = [
  { id: "m1", title: "Cofee", price: 20.5, imageUrl: "/Assets/Cofee.png" },
  { id: "m2", title: "Shirt", price: 15.5, imageUrl: "/Assets/Shirt.png" },
];

export default (props) => {

  const moduleContext = useContext(ModuleContext);
  function onGetCartHandler(event) {
    moduleContext.setModuleCond(true);
  }
  return (
    <>
      <Container className="mt-5 text-center">
        <Title />
        <Container className="d-flex ">
          <center>
            <CardList title="MUSIC" cartList={cartList1} />
            <CardList title="MERCH" cartList={cartList2} />

            <Button variant="secondary" className="btn-lg m-2" onClick={onGetCartHandler}>
              See the cart
            </Button>
          </center>
        </Container>
        {ReactDOM.createPortal(
        <CartModal></CartModal>, document.getElementById("cart-modal") )}

        {ReactDOM.createPortal(<PopupToast/>,document.getElementById("popup-modal"))}
      </Container>
    </>
  );
};
