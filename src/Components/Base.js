import { Route } from "react-router-dom";
import MainContent from "./Body/MainContent";
import BaseFooter from "./Footer/BaseFooter";
import Header from "./Header/Header";
import About from "./About/About";
import Home from "./Home/Home";
import RoutesConfig from "./RoutesConfig";
import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom.min";
import ContactUs from "./ContactUs/ContactUs";
import ItemDetail from "./Body/ItemDetails/ItemDetail";
import Login from "./Login/Login";
import { useContext } from "react";
import ModuleContext from "../Store/module-context";

// const HELLO = (props) => {
//   return <h1>HELLO</h1>;
// };
// const router = createBrowserRouter([
//   { path: "/", element: <MainContent /> },
//   { path: "/about", element: <About /> },
// {path:'/home',element:<Home/>}
// ]);
//<RouterProvider router={router} /><Header />
/*
 <RouterProvider router={router} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/home" element={<Home />}></Route>
          */
export default (props) => {
  const moduleContext = useContext(ModuleContext);
  return (
    <>
      <Header />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        {moduleContext.isLoggedIn && (
          <Route path="/" exact>
            <MainContent />
          </Route>
        )}
        {!moduleContext.isLoggedIn && (
          <Route path="/login">
            <Login />
          </Route>
        )}

        <Route path="/about">
          <About />
        </Route>
        <Route path="/contactus">
          <ContactUs />
        </Route>
        <Route path="/items/:itemId" exact>
          <ItemDetail />
        </Route>
        {moduleContext.isLoggedIn && (
          <Route path="*" exact>
            <Redirect to="/" />
          </Route>
        )}
        <Route path="*" exact>
          <Redirect to="/home" />
        </Route>
      </Switch>

      <BaseFooter />
    </>
  );
};
