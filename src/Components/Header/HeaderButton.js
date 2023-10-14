import { Badge, Button } from "react-bootstrap"

export default props=>{

    return (
      <Button>
        Cart{" "}
        <Badge className="bg-secondary">
          <span className="h6 rounded-2 p-1">0</span>
        </Badge>
      </Button>
    );
}