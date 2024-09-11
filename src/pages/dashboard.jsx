
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Sidebar from '../component/sidebar'
// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DiJqueryLogo } from "react-icons/di";
import { BASE_URL } from '../Config';
import Headertop from '../component/Headertop'
import ProfileHeader from '../component/ProfileHeader';
import load  from '../bouncing-circles.svg';



function dashboard(  ) {

    // eslint-disable-next-line no-unused-vars, react-hooks/rules-of-hooks
    const [isChecked, setIsChecked] = useState();
    // eslint-disable-next-line no-unused-vars, react-hooks/rules-of-hooks
    const [isActiveChecked, setIsActiveChecked] = useState();
    // eslint-disable-next-line no-unused-vars
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [jsonData, setData] = useState([]);
  // eslint-disable-next-line no-unused-vars, react-hooks/rules-of-hooks
  const [jsonDatalog, setDatalog] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData1] = useState([]);
 
// eslint-disable-next-line react-hooks/rules-of-hooks


    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/User/DashboardData`); // Replace with your API URL
        const jsonData = await response.json();
        setData(jsonData.data) ;
       console.log(BASE_URL)  
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors appropriately (display error message, etc.)
      }
    };

    // const Setting = async () => {   
    //   try {
    //         const id = localStorage.getItem("id");
    //         const datalog = await fetch(`${BASE_URL}/User/setting/${id}/`); // Replace with your API URL
    //         const jsonDatalog = await datalog.json();
    //         console.log(jsonDatalog.data.modes);
    //         // localStorage.setItem('Mode', jsonDatalog.data.modes);
    //         // localStorage.setItem('Mode', jsonDatalog.data.modes);
           
    //       } catch (error) {
    //         console.error('Error fetching data:', error);
    //         // Handle errors appropriately (display error message, etc.)
    //       }
    //     };

    
    const logsData = async () => {
      try {
        const datalog = await fetch(`${BASE_URL}/User/logdata`); // Replace with your API URL
        const jsonDatalog = await datalog.json();
        setData1(jsonDatalog.data) ;
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors appropriately (display error message, etc.)
      }
    };
      
      

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
      logsData();
        fetchData();
        // Setting();
  },[]);
  
 
    const { Active_employees,Employees_with_Multiple_IWO,Total_IWO,Employees_with_Single_IWO } = jsonData;

  return (
      <div className="min-h-full"> 
       <div  className='container' >
         {/* <div  className={isChecked === 'light-mode container main' ?  'light-mode container main' : 'dark-mode container main' } > */}
         <div className='sidebar hidden lg:block'><Sidebar/></div>
        <div className='contant content ml-auto remove-btns'>
        {/* {isHidden ? null : (  */}
        <Headertop />
       <ProfileHeader/>
            <div className="grid  gap-4  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 custom_tab">
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

<div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2  lg:grid-cols-2 mt-2">
            <div className=" border-single pb-2 rounded-xl mb-4 border-2">
              <h5 className="mt-0 py-2  px-2 text-lg bg-cyan-100  font-semibold">Activity</h5> 
              {data.length > 0 ? (  // Check if data is available
      <ul>
        {data.map((item) => (
          <li className="text-sm mb-2 mt-2 flex logs_cls p-2"key={item.id}><DiJqueryLogo /> 
            {item.details} 
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-sm"><div className="text-sm w-full  text-center m-0"><div className="text-sm w-full  text-center m-0"><img
      className="mx-auto h-10 logo-inner w-auto custom_logo_side"
      src={load}
      alt="Your Company"
    /></div></div></p>
    )}
              </div>
              <div className=" border-single border-2 rounded-xl ml-2">
              <h5 className="mt-0 py-2  px-2 text-lg bg-cyan-100  font-semibold">Logs</h5> 
              {data.length > 0 ? (  // Check if data is available
      <ul>
        {data.map((item) => (
          <li className="text-sm mb-2 mt-2 flex logs_cls p-2"key={item.id}><DiJqueryLogo /> 
            {item.details} 
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-sm"><div className="text-sm w-full  text-center m-0"><div className="text-sm w-full  text-center m-0"><img
      className="mx-auto h-10 logo-inner w-auto custom_logo_side"
      src={load}
      alt="Your Company"
    /></div></div></p>
    )}
              </div>
</div>    
        </div>  
   
      </div>
      {/* <ToastContainer /> */}
      </div>
    
  )
}

export default dashboard