import logo from "./logo.svg";
import "./App.css";
import Carousel from "./components/Carousel";
import { defaultImages } from "./utils";

function App({ images }) {
  return (
    <div className="App">
      <Carousel images={images || defaultImages} />
    </div>
  );
}

export default App;
