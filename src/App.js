import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Pick_search_type from "./components/Pick_search_type";
import City_search from "./components/City_search";
import Zip_search from "./components/Zip_search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pick_search_type />} />
          <Route path="/city-search" element={<City_search />} />
          <Route path="/zip-search" element={<Zip_search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
