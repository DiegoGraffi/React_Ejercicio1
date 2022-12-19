import logo from "./logo.svg";
import "./App.css";
import Contactos from "./components/container/contactos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Contactos></Contactos>
      </header>
    </div>
  );
}

export default App;
