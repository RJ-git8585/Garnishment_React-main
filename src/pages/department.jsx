
// eslint-disable-next-line no-unused-vars
import { React, useState,useEffect } from 'react'
import Headertop from '../component/Headertop'
import ProfileHeader from '../component/ProfileHeader'
import Sidebar from '../component/sidebar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaPlusCircle } from "react-icons/fa";


import { TiExport } from "react-icons/ti";


function Department() {

    // const id = localStorage.getItem("id");
//   const Link = `https://garnishment-backend.onrender.com/User/ExportEmployees/${id}/`;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState([]);
  
  useEffect(()=>{
  // const name = localStorage.getItem("name");
    const fetchData = async () => {
      try {
        const id = localStorage.getItem("id");
        const response = await fetch(`https://garnishment-backend.onrender.com/User/GetDepartmentDetails/${id}`); // Replace with your API URL
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
    toast.success('All Department Data !!');
  },[])
    // eslint-disable-next-line no-unused-vars
   
   


  return (
    <>

<div className="min-h-full">
        
        <div className="container main ml-auto">
        <div className='sidebar hidden lg:block'><Sidebar/></div>
        
        <div className=' contant content ml-auto'>
            <Headertop />
            <ProfileHeader/>
            
            <hr />
            <div className='items-right text-right mt-4 mb-4 customexport'>
            <a href="#" className=" border inline-flex items-right rounded-md bg-white px-3 py-2 text-sm font-semibold text-black-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"><TiExport />
        Export
        </a>
        <a href="/adddepartment" className=" border inline-flex ml-2 items-right rounded-md bg-white px-3 py-2 text-sm font-semibold text-black-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"><FaPlusCircle />
       Add
       </a>
       </div>
            <table className="min-w-full divide-y divide-gray-200 mt-6">
              
               <thead>
                 <tr>
                 {/* <th className="text-center border border-slate-300 p-2 uppercase text-xs">Sr</th> */}
                   <th className="pb-4 text-start text-xs  text-gray-500 uppercase">Employer Id</th>
                   <th className="pb-4 text-start text-xs  text-gray-500 uppercase">Department </th>
                   <th className="pb-4 text-start text-xs  text-gray-500 uppercase">Department Id</th>
                   
                   <th className="pb-4 text-start text-xs  text-gray-500 uppercase">Action</th>
                   <th className="pb-4 text-start text-xs  text-gray-500 uppercase">Action</th>
                 </tr>
               </thead>
               
            {data && (
              
                 <tbody className='divide-y divide-gray-200'> 
                
                {data.map((item) => (
                  <>
               
                   <tr key="1">
                   {/* <td className="border border-slate-300 text-xs">{index + 1}</td> */}
                  <td className=" text-xs">{item.employer_id}</td><td className=" text-xs">{item.department_name}</td><td className=" text-xs">{item.department_id}</td><button className="button-cls text-sm  text-blue font-semibold "id={item.employee_id} >Edit</button><td><button id={item.employee_id} className="button-cls text-sm  text-blue font-semibold ">Delete</button></td>
                
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
   
 </>
  )
}

export default Department