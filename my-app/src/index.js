import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './apppp.css';
import reportWebVitals from './reportWebVitals';
import Nav from './Pages/navbar';
import About from './Pages/about';
import Home from './Pages/home'
import Login from './Pages/login';
import Register from './Pages/register';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Anuj() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav/>}>
          <Route index element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Register/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>

}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Anuj />);


reportWebVitals();
