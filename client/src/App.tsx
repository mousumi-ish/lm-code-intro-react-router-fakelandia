//import { useState } from "react";

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";
//import Home from "./components/Home";
//import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
