import React from "react";
import Landing from "./pages/landing";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Abandawell from "./pages/abandawell";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Landing/> }/>
        <Route path="about" element={ <About/> }/>
        <Route path="abandawell" element={ <Abandawell/> }/>
      </Routes>
    </>
  );
}

export default App;
