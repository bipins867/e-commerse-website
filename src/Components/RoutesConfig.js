import { Route} from "react-router-dom";
import MainContent from "./Body/MainContent";
import About from "./About/About";
import Home from "./Home/Home";


//<RouterProvider router={router} /><Header />
/*
          <Route path="/about" element={<About />}></Route>
          <Route path="/home" element={<Home />}></Route>
          */
export default (props) => {
  return (
    <>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/">
        <MainContent />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </>
  );
};
