import React from "react";
import Landing from "./pages/landing";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";

import WellAbandonment from "./pages/wellAbandonment";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Landing/> }/>
        <Route path="about" element={ <About/> }/>
        <Route path="well-abandonment" element={ <WellAbandonment/> }/>
      </Routes>
    </>
  );
}

export default App;
