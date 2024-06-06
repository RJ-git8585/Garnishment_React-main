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
  
  useEffect(()=>{
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
       <table className="border-separate border-spacing-2 border border-slate-500 ...">
              
              <thead>
                <tr>
                <th className="text-center border border-slate-300 p-2 uppercase text-xs">Sr</th>
                  <th className="text-center border border-slate-300  p-2 uppercase text-xs">Tax Id </th>
                  <th className="border p-2 border-slate-300 uppercase text-xs">Employer Id</th>
                  <th className="border border-slate-300 p-2 uppercase  text-xs">Fedral Income Tax</th>
                  <th className="border border-slate-300 p-2 uppercase text-xs">Social Security</th>
                  <th className="border border-slate-300 p-2 uppercase  text-xs">Medicare Tax</th>
                  <th className="border border-slate-300 p-2 uppercase text-xs">State Taxes</th>

                  <th className="border border-slate-300 p-2 uppercase text-xs">Action</th>
                  <th className="border border-slate-300 p-2 uppercase text-xs">Action</th>
                </tr>
              </thead>
              
           {data && (
             
                <tbody> 
               
               {data.map((item,index) => (
               
              
                  <tr key={item.employer_id}>
                  <td className="border border-slate-300 text-xs">{index + 1}</td>
                 <td className="border border-slate-300 text-xs">{item.tax_id}</td><td className="border border-slate-300 text-xs">{item.employer_id}</td><td className="border border-slate-300 text-xs">{item.fedral_income_tax}</td><td className="border border-slate-300 text-xs">{item.social_and_security}</td><td className="border border-slate-300 text-xs">{item.medicare_tax} </td><td className="border border-slate-300 text-xs">{item.state_taxes} </td><button className="py-2 px-3 text-sm bg-green-300 text-white font-semibold  shadow-md hover:bg-green-800 focus:outline-none focus:ring focus:ring-green-800 focus:ring-opacity-75" id={item.employee_id}>Edit</button><td>
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
    </>
  )
}

export default Tax 