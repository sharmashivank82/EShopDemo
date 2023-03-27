import { Routes, Route } from "react-router-dom";
import Home from "./Componennt/Home/Home";
import Card from "./SharedComponent/card";
import MainState from "./Context/mainState";

import './App.css';

function App() {
  return (
    <>
      <MainState>
        <div className="style-padding">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Card />} />
          </Routes>
        </div>
      </MainState>
    </>
  );
}

export default App;
