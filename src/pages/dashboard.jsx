// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Sidebar from '../component/sidebar'

import Headertop from '../component/Headertop'
import ProfileHeader from '../component/ProfileHeader';



function dashboard() {
  // eslint-disable-next-line react-hooks/rules-of-hooks, no-unused-vars
  const [jsonData, setData] = useState([]);
  // const [at, setData] = useState([]);
  // const ID = localStorage.getItem("id")
  // const name = localStorage.getItem("name");
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
  },[])
    // eslint-disable-next-line no-unused-vars
    const { Active_employees,Employees_with_Multiple_IWO,Total_IWO,Employees_with_Single_IWO } = jsonData;
   

  return (
    
   
      <div className="min-h-full">
        <Headertop />
        <div className="container main ml-auto mt-6">
        <div className='sidebar'><Sidebar/></div>
        
        <div className=' contant content ml-auto mt-6 '>
            <ProfileHeader/>
            <hr />
     
  
            <div className="grid grid-cols-4 gap-4 mt-8">
                            <div className="mx-auto flex max-w-xs flex-col shadow-lg px-4 py-4 gap-y-4">
                              <dt className="text-xs leading-3 text-gray-600">Total IWO</dt>
                              <dd className=" text-3xl font-semibold text-center tracking-tight text-black-900 sm:text-5xl">{Total_IWO}</dd>
                            </div>
                            <div className="mx-auto flex max-w-xs flex-col shadow-lg px-4 py-4 gap-y-4">
                              <dt className="text-xs leading-3 text-gray-600">Single IWO</dt>
                              <dd className="text-3xl font-semibold  text-center tracking-tight text-black-900 sm:text-5xl">{Employees_with_Single_IWO}</dd>
                            </div>
                            <div className="mx-auto flex max-w-xs flex-col shadow-lg px-4 py-4 gap-y-4">
                              <dt className="text-xs leading-3 text-gray-600">Multiple IWO </dt>
                              <dd className=" text-3xl font-semibold text-center tracking-tight text-black-900 sm:text-5xl">{Employees_with_Multiple_IWO}</dd>
                            </div>
                            <div className="mx-auto flex max-w-xs flex-col shadow-lg px-4 py-4 gap-y-4">
                              <dt className="text-xs leading-3 text-gray-600">Active Employees</dt>
                              <dd className=" text-3xl font-semibold  text-center tracking-tight text-black-900 sm:text-5xl">{Active_employees}</dd>
                            </div>
              
            </div>
          
        </div>  
      </div>
      </div>
    
  )
}

export default dashboard