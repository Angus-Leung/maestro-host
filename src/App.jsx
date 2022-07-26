import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from './pages/Home';
import Receipts from './pages/Receipts';
import Colors from './pages/Colors';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/receipts" element={<Receipts />} />
      <Route path="/colors" element={<Colors />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("app")
);

// ReactDOM.render(<App />, document.getElementById("app"));

// <div>Name: maestro-host</div>
// <Questionaire />