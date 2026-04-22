import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from './layout/MainLayout';

import Home from "./pages/Home";
import About from "./pages/About";
import Featured from "./pages/Featured";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import './App.css'

function App() {


  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<MainLayout />} >

          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="featured" element={<Featured />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />

          </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
