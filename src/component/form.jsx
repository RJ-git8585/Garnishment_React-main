// eslint-disable-next-line no-unused-vars
import  { React, useState } from 'react';
import logo from '/src/Logo (1).png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {  ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookFill } from "react-icons/ri";
import { BASE_URL } from '../Config';

function Form() {
  const navigate = useNavigate();
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);




  const togglePasswordVisibility = () => {
    // alert(showPassword)
      setShowPassword(!showPassword);
    };
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
      const response = await axios.post(`${BASE_URL}/User/login`, loginCredentials,);
      if (response.data.success) {
        localStorage.setItem('token', response.data.access);
        localStorage.setItem('id', response.data.user_data.employer_id); 
        localStorage.setItem('name', response.data.user_data.name);// Store the access token
        navigate('/dashboard');
        toast('Login successful!', {
          autoClose: 3000, // Delay in milliseconds
          position: 'top-right',
        }); 
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
      <div className="flex lg:h-screen  dark:bg-slate-800 flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="grid grid-flow-row-dense md:max-lg:flex lg:p-6 lg:mr-4 mt-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center place-items-center">
                  <div className=" sm:mx-auto left_side_login   md:border-r-[0.5px]  border-orange-50 sm:w-full sm:max-w-md">
                                  <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
                        <h2 className=" text-center dark:text-white text-2xl font-bold leading-9 tracking-tight text-gray-900">
                          Sign in to your account
                        </h2>
                                <form onSubmit={handleSubmit} className="lg:mr-4 mt-10 border-gray-50 rounded-md space-y-6 p-6 shadow-lg shadow-blue-500/50">
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
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        autoComplete="current-password"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />
                                       <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-2 custom_position text-gray-500"
        >
        {showPassword ? (
            // Eye SVG (colored) for visible password
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.722 2.185-2.064 4.065-3.758 5.473M15 12l5.573 5.573M12 15v-3m6 6l-6-6" />
            </svg>
          ) : (
            // Eye-slash SVG (colored) for hidden password
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A9.972 9.972 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.984 9.984 0 012.45-4.596m6.198-1.203a9.969 9.969 0 014.894.555M12 12a3 3 0 103-3m0 0a9.984 9.984 0 013.742 6.242M3 3l18 18" />
            </svg>
          )}
        </button>
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
                  <div className="text-left mt-20 right_side_login ml-10 sm:mx-auto sm:w-full sm:max-w-lg">
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
             <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default Form;
