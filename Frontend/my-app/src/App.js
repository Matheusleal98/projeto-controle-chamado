import './App.css';
import Navbar from './componentes/shared/Navbar/navbar';
import CallListPage from './componentes/pages/CalledListPage/listPage';
import CalledManager from './componentes/pages/CalledManagerPage/calledManager';
import ClientRegister from './componentes/pages/ClienteRegisterPage/registerClient';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <Navbar/>
        <section className="container">
          <div className="content-page">
            <Routes>
              <Route path="/" element={<CallListPage/>}/>
              <Route path="/called/add" element={<CalledManager/>}/>
              <Route path="/called/edit/:id" element={<CalledManager/>}/>
              <Route path="/called/client" element={<ClientRegister/>}/>
            </Routes>
          </div>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
