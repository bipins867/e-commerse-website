import { useEffect, useState } from "react";
import ModuleContext from "./module-context";
import { getCartData, postCartData } from "./CrudCrud";

const cartElements = [];

const productList1 = [
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
const productList2 = [
  { id: "m1", title: "Cofee", price: 20.5, imageUrl: "/Assets/Cofee.png" },
  { id: "m2", title: "Shirt", price: 15.5, imageUrl: "/Assets/Shirt.png" },
];

export default (props) => {
  
  
  const [moduleCond, setModuleCond] = useState(true);
  const [cartItems, setCartItems] = useState(cartElements);
  const [toastContent, setToastContent] = useState({
    title: "Title",
    body: "Product is added to the cart.",
    show: false,
    dangerType:false
  });
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const [idToken,setIdToken]=useState('')

  
  useEffect(()=>{

    const email =localStorage.getItem('email')
    const idToken=localStorage.getItem('idToken')

    if(email && idToken){
      setIsLoggedIn(true)
      getCartData(setCartItems, email);
    }
  },[])
  
  function addItem2Cart(id) {
    const cartItem = [...productList1, ...productList2].filter(
      (cart) => cart.id === id
    )[0];
    postCartData(cartItem,localStorage.getItem('email'))
    setCartItems((prevState) => {
      const newState = [...prevState];
      newState.push(cartItem);
      return newState;
    });
  }

  function removeItemFromCart(id) {
    setCartItems((prevState) => {
      const newCart = prevState.filter((cart) => cart.id !== id);

      return newCart;
    });
  }

  function updateItemInCart(id, quantity) {}

  const value = {
    moduleCond: moduleCond,
    setModuleCond: setModuleCond,
    cartItems: cartItems,
    setCartItems:setCartItems,
    addItem: addItem2Cart,
    removeItem: removeItemFromCart,
    updateItem: updateItemInCart,
    productList1: productList1,
    productList2: productList2,
    toastContent: toastContent,
    setToastContent :setToastContent,
    isLoggedIn:isLoggedIn,
    setIsLoggedIn:setIsLoggedIn,
    idToken:idToken,
    setIdToken:setIdToken,
    fetchCartData:getCartData
  };
  return (
    <ModuleContext.Provider value={value}>
      {props.children}
    </ModuleContext.Provider>
  );
};
