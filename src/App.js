import logo from './logo.svg';
import './App.css';
import Base from './Components/Base';
import ModuleProvider from './Store/ModuleProvider';


function App() {
  return (
    <>
      <ModuleProvider>
        <Base />
      </ModuleProvider>
    </>
  );
}

export default App;
