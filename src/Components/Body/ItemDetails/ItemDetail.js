import { useContext } from "react"
import {Image, Container } from "react-bootstrap"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import ModuleContext from "../../../Store/module-context"


export default props=>{

    const param=useParams()
    
    const moduleContext=useContext(ModuleContext)

    const productList=[...moduleContext.productList1,...moduleContext.productList2]

    
    const product=productList.filter(product=>product.id===param.itemId)[0]
    console.log(product)
    return (
      <>
        <Container className="mt-5 text-center">
          <h1 className="pt-2">{product.title}</h1>
         
         <Image className="py-2" src={product.imageUrl}/>
         <span >
            <h4 className="text-danger fw-bold">Price :- {product.price}</h4>
         </span>
        </Container>
      </>
    );
}