import React from 'react';
import './pages/App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import All from "./pages/All.js"
import Home from "./pages/Home.js"
import Color from "./pages/Color.js"
import Bnw from "./pages/Bnw.js"

export default function App () {
  return (
<BrowserRouter>
      <nav className="topnav">
      <Link className="topnav" to="/">home</Link>
      <Link className="topnav" to="/color">color</Link>
      <Link className="topnav" to="/bnw">b&w</Link>
      <Link className="topnav" to="/all">all</Link>
      </nav>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/color" element={<Color />} />
  <Route path="/bnw" element={<Bnw />} />
  <Route path="/all" element={<All />} />
  </Routes>
  <footer className="footer">
        <hr></hr>
        CONTACT<br></br>
        <a href="https://www.instagram.com/lina.bean333?igsh=NmV6NzBtODB4bnNj"><button className="button" >@lina.bean333</button></a>
        </footer>
      </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);