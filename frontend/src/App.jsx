import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import LoginPage from "./LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
