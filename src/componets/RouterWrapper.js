import React from 'react'
import InputText from './InputText'; 
import Form from './Form';
import NavBar from './NavBar';

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";



export default function RouterWrapper() {
  return (
    
      <BrowserRouter>
    <Routes>
    <Route path="/" element={<NavBar/>}>
      </Route>
      <Route path="/form" element={<Form/>}>
      </Route>
      <Route  path="/InputText" element={<InputText/>}>
      </Route>

    </Routes>
  </BrowserRouter>
    
  )
}
