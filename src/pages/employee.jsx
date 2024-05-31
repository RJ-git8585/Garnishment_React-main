/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-unused-vars
import { React, useState,useEffect } from 'react'
import Headertop from '../component/Headertop'
import ProfileHeader from '../component/ProfileHeader'
import Sidebar from '../component/sidebar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function employee() {


 

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState([]);
  
  useEffect(()=>{
  // const name = localStorage.getItem("name");
    const fetchData = async () => {
      try {
        const id = localStorage.getItem("id");
        const response = await fetch(`https://garnishment-backend.onrender.com/User/getemployeedetails/${id}/`); // Replace with your API URL
        const jsonData = await response.json();
        setData(jsonData.data) ;
      
        // console.log(jsonData)    
        // console.log(Data)
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors appropriately (display error message, etc.)
      }
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks, no-undef
    
    fetchData(); // Call the function
    toast.success('All Employee Data !!');
  },[])
    // eslint-disable-next-line no-unused-vars
   
   

  return (
    <div>


<div className="min-h-full">
        <Headertop />
        <div className="container main ml-auto mt-6">
        <div className='sidebar'><Sidebar/></div>
        
        <div className=' contant content ml-auto mt-6 '>
            <ProfileHeader/>
            
            <hr />
            <table className="border-separate border-spacing-2 border border-slate-500 ...">
              
               <thead>
                 <tr>
                   <th className="text-center border border-slate-300 text-xs">Employee</th>
                   <th className="border border-slate-300 text-xs">Employee Id</th>
                   <th className="border border-slate-300 text-xs">Employer Id</th>
                   <th className="border border-slate-300 text-xs">Location</th>
                   <th className="border border-slate-300 text-xs">Department</th>
                   <th className="border border-slate-300 text-xs">Minimum Wages</th>
                   <th className="border border-slate-300 text-xs">Netpay</th>
                   <th className="border border-slate-300 text-xs">Number Garnihsment</th>
                   <th className="border border-slate-300 text-xs">Pay Cycle</th>
                   <th className="border border-slate-300 text-xs">Action</th>
                   <th className="border border-slate-300 text-xs">Action</th>
                 </tr>
               </thead>
               
            {data && (
              
                 <tbody> 
                
                {data.map((item) => (
                  <>
               
                   <tr>
                   
                  <td className="border border-slate-300 text-xs">{item.employee_name}</td><td className="border border-slate-300 text-xs">{item.employee_id}</td><td className="border border-slate-300 text-xs">{item.employer_id}</td><td className="border border-slate-300 text-xs">{item.location}</td><td className="border border-slate-300 text-xs">{item.department}</td><td className="border border-slate-300 text-xs">{item.minimun_wages}</td><td className="border border-slate-300 text-xs">{item.net_pay}</td><td className="border border-slate-300 text-xs">{item.number_of_garnishment}</td><td className="border border-slate-300 text-xs">{item.pay_cycle} </td><button className="py-2 px-3 text-sm bg-red-300 text-white font-semibold  shadow-md hover:bg-red-800 focus:outline-none focus:ring focus:ring-red-800 focus:ring-opacity-75">Edit</button><button className="py-2 px-3 text-sm bg-red-300 text-white font-semibold  shadow-md hover:bg-red-800 focus:outline-none focus:ring focus:ring-red-800 focus:ring-opacity-75">Delete</button>
                
                  </tr>
                
                </>
 
  
                ))}
             </tbody>
            
               
      )}
  
  </table>
        </div>  
       
      </div>
      </div>
    
      <ToastContainer />
    </div>
  )
}

export default employee