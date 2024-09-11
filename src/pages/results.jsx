/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-unused-vars
import { React, useState, useEffect } from 'react'
import Headertop from '../component/Headertop'
// import ProfileHeader from '../component/ProfileHeader'
import Sidebar from '../component/sidebar'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import DeleteItemComponent from '../component/DeleteItemComponent';
// import EditItemComponent from '../component/editItemComponent';
import { CgImport } from "react-icons/cg";
import { TiExport } from "react-icons/ti";
// import Garnishment from './Garnishment';
import load  from '../bouncing-circles.svg';
import { BASE_URL } from '../Config';


// function results(onDeleteSuccess,onEditSuccess) {
  function results() {
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
        const response = await fetch(`${BASE_URL}/User/GetResultDetails/${id}/`); // Replace with your API URL
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
        <div className='sidebar hidden lg:block'><Sidebar/></div>
        
        <div className=' contant content ml-auto flex flex-col'>
            <Headertop />
            {/* <ProfileHeader/> */}
            
            <hr />
           
         
           
            <div className='items-left'>
   
            {/* <div>
                    <label htmlFor="empID" className="mt-6 block italic text-red-700 text-sm font-semibold mb-3">
                            Please Select Garnishment Type:
                          </label>
                    <select className="custom-select mb-10 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white-50 border border-white-300 text-white-900 text-sm bg-black rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 focus:shadow-outline dark:text-white dark:focus:ring-white-500 dark:focus:border-white-500" required>
                      <option value="MultipleChild">Child Support</option>
                      <option value="StudentLoan">Student loan</option>
                      <option value="MultiStudentLoan">Multiple Student loan</option>
                      <option value="FederalTax">Federal Tax</option>
                      <option value="StateTax">State Tax</option>
                      <option value="Creditor">Creditor</option>
                      <option value="Bankruptcy">Bankruptcy</option>
                    </select>  
              </div> */}
              </div>

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
      <table className="min-w-full divide-y divide-gray-200 table-auto overflow-hidden">
  <thead>
    <tr>
      {/* <th className="text-center border border-slate-300 p-2 uppercase text-xs">Sr</th> */}
      <th className="pb-4 pl-4 text-left text-xs text-gray-500 uppercase">TimeStamp</th>
      <th className="pb-4 pl-4 text-left text-xs text-gray-500 uppercase">Employee Id</th>
      <th className="pb-4 pl-4 text-left text-xs text-gray-500 uppercase">Employer Id</th>
      <th className="pb-4 pl-4 text-left text-xs text-gray-500 uppercase">Result Amount</th>
    </tr>
  </thead>

  {loading ? (
    <div className="text-sm w-full text-left m-0">
      <div className="text-sm w-full text-left m-0">
        <img
          className="mx-auto h-10 w-auto custom_logo_side"
          src={load}
          alt="Your Company"
        />
      </div>
    </div>
  ) : data ? (
    <tbody className="divide-y divide-gray-200">
      {data.slice(page * 10 - 10, page * 10).map((item) => (
        <tr key={item.employer_id} className="hover:bg-gray-100 bg-gray-200">
          {/* <td className="border border-slate-300 text-xs">{index + 1}</td> */}
          <td className="text-left p-2 pl-4 border-slate-300 text-xs whitespace-nowrap">
            {item.timestamp}
          </td>
          <td className="p-2 text-left pl-4 text-xs whitespace-nowrap">
            {item.employee_id}
          </td>
          <td className="text-left p-2 pl-4 text-xs whitespace-nowrap">
            {item.employer_id}
          </td>
          <td className="text-left pl-4 text-xs whitespace-nowrap">
            {item.result}
          </td>
        </tr>
      ))}
    </tbody>
  ) : (
    <div className="text-center text-sm nodatacls">No data found</div>
  )}
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

export default results