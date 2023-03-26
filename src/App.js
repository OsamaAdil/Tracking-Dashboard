import "./App.css";
import "../src/Components/main/main.css";
import Main from "./Components/main/main";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>}></Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
