import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import { useState } from "react";
import Slider from "react-slick";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Portfolio from "./pages/Portfolio";

import Logo from "./components/Logo";

import Blog1 from "./Blogs/Blog1";
import Blog2 from "./Blogs/Blog2";
import Blog3 from "./Blogs/Blog3";
import Blog4 from "./Blogs/Blog4";
import Blog5 from "./Blogs/Blog5";
import Blog6 from "./Blogs/Blog6";
import Blog7 from "./Blogs/Blog7";
import Blog8 from "./Blogs/Blog8";
import Blog9 from "./Blogs/Blog9";
import Blog10 from "./Blogs/Blog10";

import Reference from "./components/Reference";
import Wireframes from "./pages/Wireframes";
import CodeSnippets from "./pages/CodeSnippets";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/RonJames-Portfolio" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/docs" element={<Blogs />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/codeSnippets" element={<CodeSnippets />} />
        <Route exact path="/wireframes" element={<Wireframes />} />
        <Route exact path="/blog1" element={<Blog1 />} />
        <Route exact path="/blog2" element={<Blog2 />} />
        <Route exact path="/blog3" element={<Blog3 />} />
        <Route exact path="/blog4" element={<Blog4 />} />
        <Route exact path="/blog5" element={<Blog5 />} />
        <Route exact path="/blog6" element={<Blog6 />} />
        <Route exact path="/blog7" element={<Blog7 />} />
        <Route exact path="/blog8" element={<Blog8 />} />
        <Route exact path="/blog9" element={<Blog9 />} />
        <Route exact path="/blog10" element={<Blog10 />} />
      </Routes>
      <Reference />
    </div>
  );
}

export default App;
