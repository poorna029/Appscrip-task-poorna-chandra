import LogoComponent from "./components/LogoComponent";
import Filter from "./components/Filter";
import Heading from "./components/Heading";
import Products from "./components/Products";
import "./App.css";

function App() {
  return (
    <header className="App">
      <LogoComponent />
      <Heading />
      <Filter />
      {/* <Products /> */}
    </header>
  );
}

export default App;
