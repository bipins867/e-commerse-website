import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContent from "./Body/MainContent";
import BaseFooter from "./Footer/BaseFooter";
import Header from "./Header/Header";
import About from "./About/About";
import Home from "./Home/Home";

const router = createBrowserRouter([
  { path: "/", element: <MainContent /> },
  { path: "/about", element: <About /> },
{path:'/home',element:<Home/>}
]);

export default (props) => {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <BaseFooter />
    </>
  );
};
