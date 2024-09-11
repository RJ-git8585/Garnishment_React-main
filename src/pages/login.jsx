// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import logo from '/src/Logo (1).png';
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; 
import Form from '../component/form';

function Login() {

  if (sessionStorage.getItem("token") == null) {
    console.log('yaha tokan nhi h ')
  }
  console.log('token hai abhi')
  
  return (
  <Form/>





)
}

export default Login;
