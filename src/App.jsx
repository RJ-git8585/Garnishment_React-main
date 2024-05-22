import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Products from './pages/Products'
import Signup from './pages/signup'
// import Header from './component  /header'
// import Navbar from './Navbar'
// import Footers from './Footers'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Form from './component/form'  
import Dashboard from './pages/dashboard';
import Logout from './pages/Logout';

import Forgot from './pages/forgot';



function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)
 
  return (
    <>
    
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Form />} />
        <Route path="/login" element={<Form />} />
        <Route path="/products" element={<Products />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
       
    </>
  )
}

export default App
