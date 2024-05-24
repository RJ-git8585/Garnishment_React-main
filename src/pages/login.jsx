// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '/src/Logo (1).png';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://garnishment-backend.onrender.com/User/login', formData);
      if (response.data.success) {
        // Save the tokens or any other relevant data
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);

        toast.success('Login successful');
        navigate('/dashboard');
      } else {
        setErrorMessage(response.data.message);
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error.response.data);
      setErrorMessage(error.response.data.message || 'An error occurred');
      toast.error(error.response.data.message || 'An error occurred');
    }
  };

  return (
    <div className="flex h-screen dark:bg-slate-800 flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
        <h2 className="mt-10 text-center dark:text-white text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Login to your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6 border-gray-50 rounded-md space-y-6 p-6 shadow-lg shadow-blue-500/50" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block dark:text-white text-sm font-medium leading-6 text-gray-900">Email</label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="text"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block dark:text-white text-sm font-medium leading-6 text-gray-900">Password</label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">
              Login
            </button>
          </div>
          {errorMessage && <p className="error text-red-500 text-sm mt-2">{errorMessage}</p>}
          <ToastContainer 
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </form>
        <p className="mt-1 text-center text-sm p-6 text-gray-500 dark:text-white">
          Dont have an account?{' '}
          <a href="/signup" className="font-semibold leading-6 text-orange-500 hover:text-indigo-500">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
