import { Toast } from "react-bootstrap";
import ModuleContext from "../../../../Store/module-context";
import { useContext } from "react";

export default (props) => {

  const moduleContext = useContext(ModuleContext);
 const toastContent=moduleContext.toastContent;
 let bgColor='';
 if(toastContent.dangerType){
    bgColor='bg-danger'
 }
 else{
    bgColor='bg-info'
 }
  return (
    <Toast
      show={toastContent.show}
      className={"position-fixed bottom-0 end-0 "+bgColor}
      style={{ zIndex: 1000 }}
    >
      <Toast.Header closeButton={false}>
        <h1 className="h5 text-primary">{toastContent.title}</h1>
      </Toast.Header>
      <Toast.Body className=" text-light">
        <h6>{toastContent.body}</h6>
      </Toast.Body>
    </Toast>
  );
};
