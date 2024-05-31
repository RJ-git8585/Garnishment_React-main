
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Sidebar from '../component/sidebar'
// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DiJqueryLogo } from "react-icons/di";

import Headertop from '../component/Headertop'
import ProfileHeader from '../component/ProfileHeader';



function dashboard() {
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [jsonData, setData] = useState([]);
    const fetchData = async () => {
      try {
        const response = await fetch('https://garnishment-backend.onrender.com/User/DashboardData'); // Replace with your API URL
        const jsonData = await response.json();
        setData(jsonData.data) ;
        // console.log(jsonData)  
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors appropriately (display error message, etc.)
      }
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
    fetchData(); // Call the function
    // alert('Welcome to Dashboard')
    toast.success('Welcome to Dashboard!', {
      position: 'bottom-left', // Set the position here
    });
  
  },[])
    // eslint-disable-next-line no-unused-vars
    const { Active_employees,Employees_with_Multiple_IWO,Total_IWO,Employees_with_Single_IWO } = jsonData;
   

  return (
    
   
      <div className="min-h-full">  
       
        <div className="container main">
        <div className='sidebar'><Sidebar/></div>
        
        <div className=' contant content ml-auto '>
        <Headertop />
            <ProfileHeader/>
            
     
  
            <div className="grid grid-cols-4 gap-4 mt-8 custom_tab">
                            <div className="mx-auto flex max-w-xs flex-col shadow-lg px-4 py-4 gap-y-4">
                              <dt className="text-xs leading-3 text-black-600">Total IWO</dt>
                              <dd className=" text-3xl font-semibold text-center tracking-tight text-black-900 sm:text-5xl">{Total_IWO}</dd>
                            </div>
                            <div className="mx-auto flex max-w-xs flex-col shadow-lg px-4 py-4 gap-y-4">
                              <dt className="text-xs leading-3 text-black-600">Single IWO</dt>
                              <dd className="text-3xl font-semibold  text-center tracking-tight text-black-900 sm:text-5xl">{Employees_with_Single_IWO}</dd>
                            </div>
                            <div className="mx-auto flex max-w-xs flex-col shadow-lg px-4 py-4 gap-y-4">
                              <dt className="text-xs leading-3 text-black-600">Multiple IWO </dt>
                              <dd className=" text-3xl font-semibold text-center tracking-tight text-black-900 sm:text-5xl">{Employees_with_Multiple_IWO}</dd>
                            </div>
                            <div className="mx-auto flex max-w-xs flex-col shadow-lg px-4 py-4 gap-y-4">
                              <dt className="text-xs leading-3 text-black-600">Active Employees</dt>
                              <dd className=" text-3xl font-semibold  text-center tracking-tight text-black-900 sm:text-5xl">{Active_employees}</dd>
                            </div>
              
            </div>
<hr className="mt-6"></hr>

<div className="grid grid-flow-row-dense grid-cols-2 mt-2">
  <div className=" border-single pb-2 rounded-xl border-2">
    <h5 className="mt-0 py-2  px-2 text-lg bg-cyan-100  font-semibold">Activity</h5> 
    <ul className="list-inside ...">
       <li className="mt-2 ml-5 text-sm" ><DiJqueryLogo /> 5 cups chopped Porcini mushrooms</li>
       <li className="mt-2 ml-5 text-sm" ><DiJqueryLogo />5 cups chopped Porcini mushrooms</li>
       <li className="mt-2 ml-5 text-sm" ><DiJqueryLogo />5 cups chopped Porcini mushrooms</li>
       <li className="mt-2 ml-5 text-sm" ><DiJqueryLogo />5 cups chopped Porcini mushrooms</li>
       <li className="mt-2 ml-5 text-sm" ><DiJqueryLogo />5 cups chopped Porcini mushrooms</li>
       <li className="mt-2 ml-5 text-sm" ><DiJqueryLogo />5 cups chopped Porcini mushrooms</li>

      </ul>
    </div>
    <div className=" border-single border-2 rounded-xl ml-2">
    <h5 className="mt-0 py-2  px-2 text-lg bg-cyan-100  font-semibold">Logs</h5> 
    <ul className="list-inside ...">
       <li className="mt-2 ml-5 text-sm" >5 cups chopped Porcini mushrooms</li>
       <li className="mt-2 ml-5 text-sm" >5 cups chopped Porcini mushrooms</li>
       <li className="mt-2   ml-5 text-sm" >5 cups chopped Porcini mushrooms</li>

      </ul>
    </div>
</div>

          
        </div>  
   
      </div>
      <ToastContainer />
      </div>
    
  )
}

export default dashboard