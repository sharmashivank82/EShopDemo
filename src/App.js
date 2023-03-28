import { Routes, Route } from "react-router-dom";
import Home from "./Componennt/Home/Home";
import MainState from "./Context/mainState";
import Checkout from "./Componennt/Checkout/Checkout";

import './App.css';

function App() {
  return (
    <>
      <MainState>
        <div className="style-padding">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </MainState>
    </>
  );
}

export default App;
