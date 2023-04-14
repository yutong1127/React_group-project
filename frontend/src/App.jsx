import React from "react";
import Patient_detail from "./Patient_detail";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Patient_detail />
    </div>
  );
}

export default App;
