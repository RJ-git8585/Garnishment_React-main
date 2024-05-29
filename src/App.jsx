// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Products from './pages/Tax'
import Signup from './pages/signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './component/form'  
import Dashboard from './pages/dashboard';
import Logout from './pages/Logout';
import Profile from './pages/profile';
import Forgot from './pages/forgot';
import Setting from './pages/setting';
import Help from './pages/Help';
import Tax from './pages/Tax';
import Garnishment from './pages/Garnishment';
// import Privacy from './pages/privacy';
import PrivateRoute from './component/PrivateRoute';
import Employee from './pages/employee';
import Notfound from './pages/Notfound';
import AddEmployee from './component/AddEmployee';

function App() {
  return (
    <>
    
      <BrowserRouter>
      <Routes>

        <Route path="/" element={ <Form />} />
        {/* <Route path="/login" element={<Form />} /> */}
        <Route path="/products" element={<PrivateRoute><Products /></PrivateRoute>} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/setting" element={<PrivateRoute><Setting /></PrivateRoute>} />
        <Route path="/help" element={<PrivateRoute><Help /></PrivateRoute>} />
        <Route path="/tax" element={<PrivateRoute><Tax /></PrivateRoute>} />
        <Route path="/garnishment" element={<PrivateRoute><Garnishment /></PrivateRoute>} />
        {/* <Route path="/privacy" element={<Privacy />} /> */}
        <Route path="/employee" element={<PrivateRoute><Employee /></PrivateRoute>} />
        <Route path="/addemployee" element={<PrivateRoute><AddEmployee /></PrivateRoute>} />
        <Route path="*" element={<Notfound />} />
     
      
      </Routes>
    </BrowserRouter>
       
    </>
  )
}

export default App
