import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MainContent from "./Body/MainContent"
import BaseFooter from "./Footer/BaseFooter"
import Header from "./Header/Header"
import About from "./About/About"

const router=createBrowserRouter([{path:'/',element:<MainContent/>},{path:'/about',element:<About/>}])

export default props=>{
    
    return <>
    <Header/>
    <RouterProvider router={router}/>
    <BaseFooter/>
    </>
}