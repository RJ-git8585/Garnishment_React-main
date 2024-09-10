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
// import SingleChild from './forms/SingleChild';
import Garnishment from './pages/Garnishment';

// import Privacy from './pages/privacy';
import PrivateRoute from './component/PrivateRoute';
import Employee from './pages/employee';
import Notfound from './pages/Notfound';
import AddEmployee from './component/AddEmployee';
import AddDepartment from './component/AddDepartment';
import AddTax from './component/AddTax';

import AddLocation from './component/AddLocation';
import Department from './pages/department';
import Location from './pages/location';
import Iwo from './pages/iwo';
import Apis from './component/Apis';
import PasswordResetConfirm from './pages/PasswordResetConfirm';
import Order from './pages/order';
import Results from './pages/results';
// eslint-disable-next-line no-unused-vars
import Test from './component/test';

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
        <Route path="/logout" element={<PrivateRoute><Logout /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/setting" element={<PrivateRoute><Setting /></PrivateRoute>} />
        <Route path="/help" element={<PrivateRoute><Help /></PrivateRoute>} />
        <Route path="/tax" element={<PrivateRoute><Tax /></PrivateRoute>} />
        <Route path="/garnishment" element={<PrivateRoute><Garnishment /></PrivateRoute>} />
        {/* <Route path="/privacy" element={<Privacy />} /> */}
        <Route path="/employee" element={<PrivateRoute><Employee /></PrivateRoute>} />
        <Route path="/order" element={<PrivateRoute><Order /></PrivateRoute>} />
        <Route path="/addemployee" element={<PrivateRoute><AddEmployee /></PrivateRoute>} />
        <Route path="/adddepartment" element={<PrivateRoute><AddDepartment /></PrivateRoute>} />
        <Route path="/addlocation" element={<PrivateRoute><AddLocation /></PrivateRoute>} />
        <Route path="/department" element={<PrivateRoute><Department /></PrivateRoute>} />
        <Route path="/location" element={<PrivateRoute><Location /></PrivateRoute>} />
        <Route path="/iwo" element={<PrivateRoute><Iwo /></PrivateRoute>} />
        <Route path="/results" element={<PrivateRoute><Results /></PrivateRoute>} />
        <Route path="/addtax" element={<PrivateRoute><AddTax /></PrivateRoute>} />
        <Route path="*" element={<Notfound />} />
        {/* <Route path="/SingleChild" element={<SingleChild />} />  */}
        <Route path="apis" element={<Apis />} />
        <Route path="test" element={<Test />} />
       
        <Route path="/reset-password/:token" element={<PasswordResetConfirm />} />
      
      </Routes>
    </BrowserRouter>
       
    </>
  )
}

export default App
