import "./App.css";
import ProductsList from "./components/ProductsList/ProductsList";
import ModalWindow from "./components/ModalWindow/ModalWindow";

function App() {
  return (
    <div className="App">
      <ProductsList />
      <ModalWindow />
    </div>
  );
}

export default App;
