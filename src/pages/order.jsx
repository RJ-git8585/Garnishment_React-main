/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-unused-vars
import { React, useState, useEffect } from 'react'
import Headertop from '../component/Headertop'
import ProfileHeader from '../component/ProfileHeader'
import Sidebar from '../component/sidebar'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeleteItemComponent from '../component/DeleteItemComponent';
// import EditItemComponent from '../component/editItemComponent';
import { CgImport } from "react-icons/cg";
import { TiExport } from "react-icons/ti";
// import Garnishment from './Garnishment';



function order(onDeleteSuccess) {


 
  const id = localStorage.getItem("id");
  const [page, setPage] = useState(1);
  // const [Loading, setIsLoading] = useState(true);
  const Link = `https://garnishment-backend.onrender.com/User/ExportEmployees/${id}/`;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState(null);
  // const totalPages = Math.ceil(data.length / 10);  
  useEffect(()=>{
  // const name = localStorage.getItem("name");
    const fetchData = async () => {
      try {
        const id = localStorage.getItem("id");
        const response = await fetch(`https://garnishment-backend.onrender.com/User/GetResultDetails/${id}/`); // Replace with your API URL
        const jsonData = await response.json();
        setData(jsonData.data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
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
        <div className='sidebar hidden lg:block'><Sidebar/></div>
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
                   <th className="pb-4 text-start text-xs  text-gray-500 uppercase">ID</th>
                   <th className="pb-4 text-start text-xs  text-gray-500 uppercase">Employee Id</th>
                   <th className="pb-4 text-start text-xs  text-gray-500 uppercase">Employer Id</th>
                   <th className="pb-4 text-start text-xs  text-gray-500 uppercase">NetPay</th>
                   {/* <th className="pb-4 text-start text-xs  text-gray-500 uppercase">Department</th> */}
                   {/* <th className="pb-4 text-start text-xs  text-gray-500 uppercase">Minimum Wages</th>
                   <th className="pb-4 text-start text-xs  text-gray-500 uppercase">Netpay</th> */}
                   {/* <th className="pb-4 text-start text-xs  text-gray-500 uppercase">N0. of Garnihsment</th> */}
                   {/* <th className="pb-4 text-start text-xs  text-gray-500 uppercase">Calculation</th> */}
                   <th className="pb-4 text-start text-xs  text-gray-500 uppercase">TimeStamp</th>
                   {/* <th className="pb-4 text-start text-xs  text-gray-500 uppercase">Action</th> */}
                   <th className="pb-4 text-start text-xs  text-gray-500 uppercase">Action</th>
                 </tr>
               </thead>
              
               
            {data?.length  > 0  && (
              
                 <tbody className='divide-y divide-gray-200'> 
                
                {data.slice(page * 5 - 5,page * 5).map((item) => (
                
                   <tr key={item.id}>
                   {/* <td className="border border-slate-300 text-xs">{index + 1}</td> */}
                  <td className="  text-xs">{item.id}</td><td className=" text-xs">{item.employee_id}</td><td className=" text-xs">{item.employer_id}</td><td className=" border-slate-300 text-xs">{item.result}</td><td className=" border-slate-300 text-xs">{item.timestamp}</td>
                  {/* <td>NA</td> */}
                  {/* <td>
                  <EditItemComponent id={item.employee_id} // Pass the record ID
 onEditSuccess={onEditSuccess} // Optional callback for successful deletion
          />
                  </td>*/}
                  <td> 
                  <DeleteItemComponent
            id={item.employee_id} // Pass the record ID
            onDeleteSuccess={onDeleteSuccess} // Optional callback for successful deletion
          />
                  </td>
                  </tr>
                )) }
              
             </tbody>
             
            
               
      )
      
      }
      
     
  
  </table>
 
  {data?.length  > 0 &&  <div className="pagination">
    
        <span className="text-sm p-2 mt-4 text-blue colr font-semibold">Pages : </span>
       
          {[...Array(Math.ceil(data.length / 5 ))].map((_,i) => {    // <span>1</span>
       
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

export default order