import LogoComponent from "./components/LogoComponent";
import Filter from "./components/Filter";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <header className="App">
      <LogoComponent />
      {/* <Heading /> */}
      <Filter />
      <Footer />
    </header>
  );
}

export default App;
