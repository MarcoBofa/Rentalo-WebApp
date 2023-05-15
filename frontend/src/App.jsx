
/*

import { useState } from 'react'
import DropdownMenu from './components/dropDown'
import Register from './components/register'
import Login from './components/Login'
import Header from './components/Header'
import './App.css'
import HomePage from './pages/homePage';

function App() {

  const navigate = useNavigate();

  const navigateToContacts = () => {
      // 👇️ navigate to /contacts
      navigate('/contacts');
  };


  return (
    <div>
      <HomePage></HomePage>
    </div>
  );
}

export default App;

  
*/

import { useState } from 'react';
import HomePage from './pages/homePage';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Test from './pages/test';
import { BrowserRouter } from 'react-router-dom';
import IntermediateReg from './pages/intermediateReg';
import RegisterPrivato from './pages/registerPrivato';
import RegisterAzienda from './pages/registerAzienda';
import RegisterNoleggiatore from './pages/registerNoleggiatore';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/iscrivitiPrivato' element={<RegisterPrivato />} />
          <Route path='/iscrivitiAzienda' element={<RegisterAzienda />} />
          <Route path='/iscrivitiNoleggiatore' element={<RegisterNoleggiatore />} />
          <Route path='/test' element={<Test></Test>} />
          <Route path='/ScegliUtente' element={<IntermediateReg />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
