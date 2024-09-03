// eslint-disable-next-line no-unused-vars
import {React ,useState,useEffect} from 'react'
import Headertop from '../component/Headertop'
import Sidebar from '../component/sidebar'
import ProfileHeader from '../component/ProfileHeader';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeleteItemComponent from '../component/DeleteItemComponent';

function Tax(onDeleteSuccess) {

  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    // setIsLoading(true);
  // const name = localStorage.getItem("name");
    const fetchData = async () => {
      try {
        const id = localStorage.getItem("id");
        const response = await fetch(`https://garnishment-backend.onrender.com/User/GetTaxDetails/${id}/`); // Replace with your API URL
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
    <>
    <div className="min-h-full">
       
       <div className="container main">
       <div className='sidebar'><Sidebar/></div>
       <div className="contant content ml-auto ">
       <Headertop />
       <ProfileHeader/>
       <hr />
       <div className="flex flex-col mt-6">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
              
              <thead>
                <tr>
                {/* <th className="text-center  border-slate-300 p-2 uppercase text-xs">Sr</th> */}
                  <th className="pb-4 border-slate-300   uppercase text-xs">Tax Id  </th>
                  <th className=" pb-4 border-slate-300 uppercase text-xs">Employer Id</th>
                  <th className=" pb-4 border-slate-300  uppercase  text-xs">Fedral Income Tax(%)</th>
                  <th className=" pb-4 border-slate-300 uppercase text-xs">Social Security(%)</th>
                  <th className=" pb-4 border-slate-300 uppercase  text-xs">Medicare Tax(%)</th>
                  <th className=" pb-4 border-slate-300 uppercase text-xs">State Taxes(%)</th>
                  <th className="pb-4  border-slate-300 uppercase text-xs">Action</th>
                  <th className=" pb-4 border-slate-300 uppercase text-xs">Action</th>
                </tr>
              </thead>
              {/* {isLoading && <p>Loading data...</p>} */}
           {data && (
             
                <tbody> 
               
               {data.map((item) => (
               
              
                  <tr key={item.employer_id}>
                  {/* <td className=" border-slate-300 text-xs">{index + 1}</td> */}
                 <td className=" border-slate-300 text-xs">{item.tax_id}</td><td className=" border-slate-300 text-xs">{item.employer_id}</td><td className=" border-slate-300 pr-20 text-right text-xs">{item.fedral_income_tax}</td><td className=" border-slate-300 text-right pr-20 text-xs">{item.social_and_security}</td><td className="text-right pr-20 border-slate-300 text-xs">{item.medicare_tax} </td><td className=" border-slate-300 text-xs pr-20 text-right">{item.state_taxes} </td><button className="py-2 button-cls text-sm  text-blue font-semibold" id={item.employee_id}>Edit</button><td>
                 <DeleteItemComponent
           id={item.employee_id} // Pass the record ID
           onDeleteSuccess={onDeleteSuccess} // Optional callback for successful deletion
         />
                 </td>
               
                 </tr>
               
             
 
               ))}
            </tbody>
           
              
     )}
 
 </table>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Tax 