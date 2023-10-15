import { useState } from "react";
import ModuleContext from "./module-context";

export default (props) => {
  const [moduleCond, setModuleCond] = useState(true);
  const value = { moduleCond: moduleCond, setModuleCond: setModuleCond };
  return (
    <ModuleContext.Provider value={value}>
      {props.children}
    </ModuleContext.Provider>
  );
};
