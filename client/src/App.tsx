//import { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";
import { useState, useEffect } from "react";
import { MisdemeanourKind } from "./components/types/misdemeanours.types";
function MyButton() {
  return <button>Confess</button>;
}
function App() {
  const [misdemeanours, setMisdemeanours] = useState<MisdemeanourKind[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/misdemeanours/10")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((jsonResponse) => {
        setMisdemeanours(jsonResponse);
      });
  }, []);

  console.log(misdemeanours);

  return (
    <>
      <BrowserRouter>
        <Router />
        <MyButton />
      </BrowserRouter>
    </>
  );
}

export default App;
