// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Sidebar from '../component/sidebar'

import Headertop from '../component/Headertop'



function dashboard() {
  // eslint-disable-next-line react-hooks/rules-of-hooks, no-unused-vars
  const [jsonData, setData] = useState([]);

  // const ID = localStorage.getItem("id")
  // const name = localStorage.getItem("name");
  // eslint-disable-next-line no-unused-vars
  // const admin = 'Admin';
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch('https://garnishment-backend.onrender.com/User/DashboardData'); // Replace with your API URL
    //     const jsonData = await response.json();
    //     // eslint-disable-next-line no-unused-vars
    //     // const data = setData(jsonData);
    //     // eslint-disable-next-line no-undef
    //     console.log(jsonData); // Update data state
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //     // Handle errors appropriately (display error message, etc.)
    //   }
    // };
  
    // fetchData(); // Call the function
   


  return (
    
   
      <div className="min-h-full">
        <Headertop />
        <div className="container main ml-auto mt-6">
        <div className='sidebar'><Sidebar/></div>
        
        <div className=' contant content ml-auto mt-6 '>
     
        
          
        </div>
      </div>
      </div>
    
  )
}

export default dashboard