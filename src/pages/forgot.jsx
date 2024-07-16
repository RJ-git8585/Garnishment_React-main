// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import logo from '/src/Logo (1).png';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Forgot() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://garnishment-backend.onrender.com/User/password-reset', { email });
      if (response.data.success) {
        setMessage('Password reset link has been sent to your email.');
        toast.success('Password reset link send!', {
          autoClose: 3000, // Delay in milliseconds
          position: 'top-right',
        }); // Specify duration if needed
      } else {
        setError(response.data.message || 'Failed to send password reset link.');
        toast.success(response.data.message || 'Failed to send password reset link.');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred.');
      toast.success(error.response?.data?.message || 'An error occurred.');
    }
  };

  return (
    <>
      <div className="flex h-screen dark:bg-slate-800 flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
          <h2 className="mt-10 text-center dark:text-white text-2xl font-bold leading-9 tracking-tight text-gray-900">
            PASSWORD RECOVERY
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6 border-gray-50 rounded-md space-y-6 p-6 shadow-lg shadow-blue-500/50">
            <div>
              <label htmlFor="email" className="block dark:text-white text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                Send
              </button>
            </div>
          </form>
          {message && <p className="text-center text-sm p-6 text-green-500">{message}</p>}
          {error && <p className="text-center text-sm p-6 text-red-500">{error}</p>}
          <p className="mt-1 text-center text-sm p-6 text-gray-500 dark:text-white">
            Already a member?{' '} Going to {' '}
            <a href="/" className="font-semibold leading-6 text-orange-500 hover:text-indigo-500">
                Login
            </a>
          </p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Forgot;
