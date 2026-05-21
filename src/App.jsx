import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="https://ngqkhoi31.github.io/beautiful-portfolio-cv/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
