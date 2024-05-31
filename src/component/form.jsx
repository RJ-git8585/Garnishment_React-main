// eslint-disable-next-line no-unused-vars
import  { React, useState } from 'react';
import logo from '/src/Logo (1).png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {  ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Form() {
  const navigate = useNavigate();
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      
      return; // Exit function if email is invalid
    }

    // Password validation (adjust validation rules as needed)
    if (password.length < 9 ) {
      setErrorMessage('Password must be at least 9 characters long.');
      
      return; // Exit function if password is invalid
    }

    const loginCredentials = { email, password };

    try {
      const response = await axios.post('https://garnishment-backend.onrender.com/User/login', loginCredentials,);
      if (response.data.success) {
        localStorage.setItem('token', response.data.access);
        localStorage.setItem('id', response.data.user_data.employer_id); 
        localStorage.setItem('name', response.data.user_data.name);// Store the access token
        navigate('/dashboard');
        toast.success("You have successfully logged in!");
      } else {
        // toast.success("Please Check Credentials!");
        setErrorMessage(response.data.message);
        
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Login failed');
      toast.warning("Please Check Credentials!");
    }
  };

  
  
  return (
    <>
      <div className="flex h-screen dark:bg-slate-800 flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
          <h2 className=" text-center dark:text-white text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="border-gray-50 rounded-md space-y-6 p-6 shadow-lg shadow-blue-500/50">
            <div>
              <label htmlFor="username" className="block dark:text-white text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block dark:text-white text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errorMessage && <p className="error">{errorMessage}</p>}
            </div>
            <div className="text-sm">
                <a href="/forgot" className="font-semibold py-1.5 text-orange-500 hover:text-indigo-500">
                  Forgot password?
                </a>
                <p className="italic text-xs text-gray-400">By signing in, you agree to our  <a href="/privacy" className="font-semibold py-1.5 text-orange-500 hover:text-indigo-500">Privacy Policy. </a></p>
              </div>
             
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                Sign in
              </button>
             
              
            </div>
          </form>
          <p className="mt-10 text-center text-sm p-6 text-gray-500 dark:text-white">
            Not a member?{' '}
            <a href="/signup" className="font-semibold leading-6 text-orange-500 hover:text-indigo-500">
              Signup
            </a>
          </p>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Form;
