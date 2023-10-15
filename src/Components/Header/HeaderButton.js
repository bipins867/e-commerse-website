import { Badge, Button } from "react-bootstrap"
import ModuleContext from "../../Store/module-context";
import { useContext } from "react";

export default props=>{
  const moduleContext = useContext(ModuleContext);
  function onClickHandler(event){
    moduleContext.setModuleCond(true);
  }
    return (
      <Button onClick={onClickHandler}>
        Cart{" "}
        <Badge className="bg-secondary">
          <span className="h6 rounded-2 p-1">0</span>
        </Badge>
      </Button>
    );
}