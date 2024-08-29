/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-unused-vars
import { React, useState, useEffect } from 'react'
import Headertop from '../component/Headertop'
import ProfileHeader from '../component/ProfileHeader'
import Sidebar from '../component/sidebar'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeleteItemComponent from '../component/DeleteItemComponent';
import EditItemComponent from '../component/editItemComponent';
import { CgImport } from "react-icons/cg";
import { TiExport } from "react-icons/ti";
// import Garnishment from './Garnishment';
import load  from '../bouncing-circles.svg';
import { BASE_URL } from '../Config';


function employee(onDeleteSuccess,onEditSuccess) {
  // this is for the pagination
  const id = localStorage.getItem("id");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  // const [Loading, setIsLoading] = useState(true);
  const Link = `${BASE_URL}/User/ExportEmployees/${id}/`;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState(null);
  // const totalPages = Math.ceil(data.length / 10);  
  useEffect(()=>{
  // const name = localStorage.getItem("name");
    const fetchData = async () => {
      setLoading(true);
      try {
        const id = localStorage.getItem("id");
        const response = await fetch(`${BASE_URL}/User/getemployeedetails/${id}/`); // Replace with your API URL
        const jsonData = await response.json();
        setData(jsonData.data);
        setLoading(false);
        
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
        // Handle errors appropriately (display error message, etc.)
      }
      
    };

    fetchData(); // Call the function
    toast.success('All Employee Data !!');
  },[])
    // eslint-disable-next-line no-unused-vars
    const selectPageHandler = (seletedPage) =>{
      setPage(seletedPage);
    }

   

  return (
    <div>


<div className="min-h-full">
        
        <div className="container main ml-auto">
        <div className='sidebar'><Sidebar/></div>
        
        <div className=' contant content ml-auto flex flex-col'>
            <Headertop />
            <ProfileHeader/>
            
            <hr />
            
            <div className='items-right text-right mt-4 mb-4 customexport'>
            
            <a href={Link} className=" border inline-flex items-right rounded-md bg-white px-3 py-2 text-sm font-semibold text-black-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"><TiExport />
        Export
        </a>
        <a href="#" className=" border inline-flex ml-2 items-right rounded-md bg-white px-3 py-2 text-sm font-semibold text-black-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"><CgImport />
       Import
       </a>
       </div>
       <div className="flex flex-col mt-6">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="overflow-hidden">
     
            <table className="min-w-full divide-y divide-gray-200">
          
               <thead>
                 <tr>
                 {/* <th className="text-center border border-slate-300 p-2 uppercase text-xs">Sr</th> */}
                   <th className="pb-4 text-start text-xs  text-gray-500 uppercase">Employee Name</th>
                   <th className="pb-4 text-start text-xs  text-gray-500 uppercase">Employee Id</th>
                   <th className="pb-4 text-start text-xs  text-gray-500 uppercase">Employer Id</th>
                   <th className="pb-4 text-start text-xs  text-gray-500 uppercase">Location</th>
                   <th className="pb-4 text-start text-xs  text-gray-500 uppercase">Department</th>
                   {/* <th className="pb-4 text-start text-xs  text-gray-500 uppercase">Minimum Wages</th>
                   <th className="pb-4 text-start text-xs  text-gray-500 uppercase">Netpay</th> */}
                   <th className="pb-4 text-start text-xs  text-gray-500 uppercase">N0. of Garnihsment</th>
                   {/* <th className="pb-4 text-start text-xs  text-gray-500 uppercase">Calculation</th> */}
                   <th className="pb-4 text-start text-xs  text-gray-500 uppercase">Pay Cycle</th>
                   <th className="pb-4 text-start text-xs  text-gray-500 uppercase">Action</th>
                   <th className="pb-4 text-start text-xs  text-gray-500 uppercase">Action</th>
                 </tr>
               </thead>
              
               
                {loading ? (
          <div className="text-sm w-full  text-center m-0"><div className="text-sm w-full  text-center m-0"><img
          className="mx-auto h-10 logo-inner w-auto custom_logo_side"
          src={load}
          alt="Your Company"
        /></div></div>
        ) : data ? (
              
                 <tbody className='divide-y divide-gray-200'> 
                
                {data.slice(page * 10 - 10,page * 10).map((item) => (
                
                   <tr key={item.employer_id}>
                   {/* <td className="border border-slate-300 text-xs">{index + 1}</td> */}
                  <td className="  text-xs">{item.employee_name}</td><td className=" text-xs">{item.employee_id}</td><td className=" text-xs">{item.employer_id}</td><td className=" border-slate-300 text-xs">{item.location}</td><td className=" border-slate-300 text-xs">{item.department}</td><td className=" border-slate-300 custom-cls_td col-span-full text-xs">{item.number_of_garnishment}</td>
                  {/* <td>NA</td> */}
                  <td className=" border-slate-300 text-xs">{item.pay_cycle} </td><td>
                  <EditItemComponent id={item.employee_id} // Pass the record ID
 onEditSuccess={onEditSuccess} // Optional callback for successful deletion
          />
                  </td><td>
                  <DeleteItemComponent
            id={item.employee_id} // Pass the record ID
            onDeleteSuccess={onDeleteSuccess} // Optional callback for successful deletion
          />
                  </td>
                  </tr>
                )) } 
             </tbody>
             
            
               
          
      
            ) : <div className="text-center text-sm nodatacls">No data found</div>}
  
  </table>
  
  {data?.length  > 0 &&  <div className="pagination">
    
        <span className="text-sm p-2 mt-4 text-blue colr font-semibold">Pages : </span>
       
          {[...Array(Math.ceil(data.length / 10 ))].map((_,i) => {    // <span>1</span>
            // console.log(Math.trunc(data.length / 10 + (data.length > 0 ? 1 : -1)))
            // console.log(Math.trunc(data.length / 10));
            // console.log(Math.ceil(data.length / 10 ));
              // eslint-disable-next-line react/jsx-key
              return <span className={`text-sm p-2 mt-4 custom-cls-pagei text-blue font-semibold ${
                i === 0 ? 'active' : ''
              }`} onClick={()=>selectPageHandler(i + 1)} key={i}>{i + 1}</span>
              

          })}
        {/* <span>2</span>
        <span>3</span> */}
        </div>}
  </div>
    </div>
  </div>
</div>

        </div>  
        {/* {data && <Garnishment data={data} />} */}



    
      
      </div>

      </div>
    </div>
  )
}

export default employee