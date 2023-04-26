import "./App.css";
import Form from "./Form";
import Weatherinfo from "./Weatherinfo";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Form />
      <hr />
      <Weatherinfo />

      <Forecast />

      <hr />
      <Footer />
    </div>
  );
}
