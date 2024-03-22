import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Menu from './Components/default/Menu';
import Container from './Pages/Container';
import './App.css';
import "./index.css"

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <ToastContainer autoClose={4000} position="top-right"/>
      <div className="container-main">
         <Container/>
      </div>
    </BrowserRouter>
  );
}

export default App;