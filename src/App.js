import React from "react";

import NavBar from "./components/navbar/navBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Location from "./pages/location";
import Episode from "./pages/episode";
import CardDetails from "./components/cards/cardDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />

        <Route path="/episodes" element={<Episode />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
