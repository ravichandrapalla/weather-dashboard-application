import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Forecast from "./components/Forecast";
function App() {
  return (
    <Routes>
      <Route index path="/home" element={<Home />} />
      <Route index path="/forecast" element={<Forecast />} />
    </Routes>
  );
}

export default App;
