import React from "react";

import NavBar from "./components/navbar/navBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Location from "./pages/location";
import Episode from "./pages/episode";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/episode" element={<Episode />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
