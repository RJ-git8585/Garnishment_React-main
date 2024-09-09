// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import logo from '/src/Logo (1).png';
// eslint-disable-next-line no-unused-vars
// import {  toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import {  ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiFacebookFill } from "react-icons/ri";
import { BASE_URL } from '../Config';


function Form() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password1: '',
    password2: ''
  });

  // const navigate = useNavigate();s

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert('Registration successful1');
    try {
      const response = await axios.post(`${BASE_URL}/User/register`, formData);
      alert('Registration successful2');
      if (response.data.message) {
        // alert(response.data);
        // alert('Registration successful');
        toast.success('Registration successful');
        console.log(response.data)
        // navigate('/');
      }
    } catch (error) {
      console.error(error.response.data);
      console.log(error.response.data);
      toast.warning(error.response.data)
      alert(error.response.data.error);
    }
  };
  return (
    <div className="flex lg:h-screen dark:bg-slate-800 flex-1 flex-col justify-center px-6 py-2 lg:px-8">
      <div className="grid grid-flow-row-dense items-center place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-2">
            <div className="sm:mx-auto   sm:w-full sm:max-w-md md:border-r-[0.5px]">
            <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
                      <h2 className=" mb-10 text-center dark:text-white text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign up to your account
                      </h2>
                      <form className= "grid grid-cols-2 lg:mr-4 gap-4 space-y-6 border-gray-50 rounded-md space-y-6 p-6 shadow-lg shadow-blue-500/50" onSubmit={handleSubmit}>
                        <div className="mt-4">
                          <label htmlFor="name" className="block dark:text-white text-sm font-medium leading-6 text-gray-900">Employer Name</label>
                          <div className="mt-2">
                            <input
                              id="name"
                              name="name"
                              type="text"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div >
                          <label htmlFor="username" className="block dark:text-white text-sm font-medium leading-6 text-gray-900">Username</label>
                          <div className="mt-2">
                            <input
                              id="username"
                              name="username"
                              type="text"
                              value={formData.username}
                              onChange={handleChange}
                              required
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div className="col-span-2 mt-0">
                          <label htmlFor="email" className="block dark:text-white text-sm font-medium leading-6 text-gray-900">Email</label>
                          <div className="">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div className="mt-0"> 
                          <label htmlFor="password1" className="block dark:text-white text-sm font-medium leading-6 text-gray-900">Password</label>
                          <div className="mt-0">
                            <input
                              id="password1"
                              name="password1"
                              type="password"
                              value={formData.password1}
                              onChange={handleChange}
                              required
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div className="mt-0">
                          <label htmlFor="password2" className="block dark:text-white text-sm font-medium leading-6 text-gray-900">Re-enter Password</label>
                          <div className="mt-0">
                            <input
                              id="password2"
                              name="password2"
                              type="password"
                              value={formData.password2}
                              onChange={handleChange}
                              
                              required
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div className="col-span-2">
                          <button type="submit" className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">
                            Sign up
                          </button>
                        </div>
                      </form>
                      <p className="mt-1 text-center text-sm p-6 text-gray-500 dark:text-white">
                        Already a member?{' '} 
                        <a href="/" className="font-semibold leading-6 text-orange-500 hover:text-indigo-500">Login</a>
                      </p>
           
            </div>
            <div className="mt-10 mt-20  ml-10 sm:mx-auto sm:w-full sm:max-w-lg ">
            <div className='text-white  text-2xl'>Sign in easily using your existing account from <b className="text-amber-500" >Social Accounts</b>. No need to create a new password or remember multiple login credentials.</div>
                                  <div className='text-white  border-b-[0.5px] border-orange-50 pb-5 text-2xl'>
                                    Keep the text clear, concise, and easy to understand.
                         Security: If applicable, you can mention that the SSO login process is secure and user credentials are not stored locally.  </div>
                  <div className="custom_page  mt-8 pb-16">
                   
                          <h1 className='text-white text-2xl font-bold'>Login with SSO</h1>
                          
                         
                            <h4 className='text-white mt-2'>We encountered an issue while signing you in with SSO.</h4>
                            <p className='text-white text-xs mt-2'>SSO login process is secure and user credentials are not stored locally.</p>
                          <div className='inline-block_cus'>
                          <a href="https://dev-ntapzgi6ocsiwjal.us.auth0.com/samlp/PxYyuHmOIVRrsEHkWFpnOeJL0UpBAXD9">
                          <FcGoogle className='text-3xl text-white mt-10' />
                          </a>  
                          <a href="https://www.facebook.com">
                          <RiFacebookFill className='text-blue-500 text-3xl mt-10'  />
                          </a>
                          </div>
       </div>
                    
                    </div>
              </div>
              <ToastContainer />
    </div>
  );
}



export default Form;
