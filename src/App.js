import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Public from "./routings/Public";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Education from "./pages/Education";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Public element={<Home />} />} />
        <Route path="/about" element={<Public element={<About />} />} />
        <Route path="/contact" element={<Public element={<Contact />} />} />
        <Route path="/work" element={<Public element={<Work />} />} />
        <Route path="/projects" element={<Public element={<Projects />} />} />
        <Route path="/skills" element={<Public element={<Skills />} />} />
        <Route path="/education" element={<Public element={<Education />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
