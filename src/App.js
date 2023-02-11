import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Housing from './pages/Housing';
import Error from "./pages/Error";
// import Api from "./hooks/api";

function App() {
  // console.log(Api(), 'api');
  return (
  <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/housing" element={<Housing />} />
          {/* <Route path="/error" element={<Error />} /> */}
          <Route path="*" element={<Error />} />
      </Routes>
  </>
  );
}

export default App;
