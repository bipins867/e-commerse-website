import {  Route} from "react-router-dom";
import MainContent from "./Body/MainContent";
import BaseFooter from "./Footer/BaseFooter";
import Header from "./Header/Header";
import About from "./About/About";
import Home from "./Home/Home";
import RoutesConfig from "./RoutesConfig";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import ContactUs from "./ContactUs/ContactUs";


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
  return (
    <>
      <Header />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/" exact >
          <MainContent />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path='/contactus'>
          <ContactUs/>
        </Route>
      </Switch>
      
      <BaseFooter />
    </>
  );
};

