  // eslint-disable-next-line no-unused-vars
import React, { useState ,useEffect } from 'react';
// import axios from 'axios';
import Popup from './Popup';
// import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line no-unused-vars
function editItemComponent({id,onDeleteSuccess, onDeleteError}) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState([]);
  // const [jsonData, setjson] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = (id) => {

       fetchData(id);
       setIsOpen(!isOpen); 

  }
    const fetchData = async (id) => {
      // alert(id)
      try {
        const response = await fetch(`https://garnishment-backend.onrender.com/User/GetSingleEmployee/11/${id}/`); // Replace with your API URL
        const jsonData = await response.json();
        setData(jsonData.data);
        console.log(jsonData)  
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors appropriately (display error message, etc.)
      }
    };
  return (
    <div>

     

<button  onClick={() => togglePopup(id)} key={id} id={id} className="py-2 button-cls text-sm  text-blue font-semibold">Edit</button>
{isOpen && <Popup
      content={<>
      {data?.length > 0 && (
  data.map((item) => (<>
<form className="popupform grid grid-cols-2 gap-2 mt-8 border-gray-50 rounded-md space-y-6 p-6 shadow-lg shadow-blue-500/50" action="#" method="POST">

                      <div className='hidden'>  
                                  <div className="mt-2 hidden">
                                    <input
                                      id="employer_id"
                                      name="employer_id"
                                      value={item.employer_id}
                                      type="hidden"
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                              <div className='max-w-80'> 
                                  <label htmlFor="name" className="block text-slate-500 text-sm font-medium leading-6">
                                  Employee Name 
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      id="employee_name"
                                      name="employee_name"
                                      value={item.employee_name}
                                      type="text"
                                      autoComplete="employee_name"
                                      // onChange={(e) => setName(e.target.value)}
                                      
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                                <div className='max-w-80'>
                                  <label htmlFor="name" className="block text-slate-500 text-sm font-medium leading-6">
                                  Department
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      id="department"
                                      name="department"
                                      value={item.department}
                                      type="text"
                                      step="1"
                                      autoComplete="name"
                                      // onChange={(e) => setDepart(e.target.value)}
                                      
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
        
        
                                <div className="max-w-80">
                                  <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="text-slate-500 block  text-sm font-medium leading-6 ">
                                    Pay Cycle 
                                    </label>
                                  </div>
                                  <div className="mt-2">
                                    <input 
                                      id="pay_cycle"
                                      name="pay_cycle"
                                      type="text"
                                      
        
                                      value=""
                                      // onChange={(e) => setPayCycle(e.target.value)}
                                      // autoComplete="current-password"
                                      
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
        
                                  </div>
                                  
                                
                    </div>
                    
                    <div className="max-w-80"> 
                                  <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="text-slate-500 block  text-sm font-medium leading-6 ">
                                    Number of Garnishment 
                                    </label>
                                  </div>
                                  <div className="mt-2">
                                    <input 
                                      id="number_of_garnishment"
                                      name="number_of_garnishment"
                                      type="number"
                                      step="1"
                                      min="1" max="5"
                                      value=""
                                      // onChange={(e) => setNumberGarnihsment(e.target.value)}    
                                      // autoComplete="current-password"
                                      
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
        
                                  </div>
                                  
                                
                    </div>
                    <div className="max-w-80">
                                  <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="text-slate-500 block  text-sm font-medium leading-6 ">
                                    Location 
                                    </label>
                                  </div>
                                  <div className="mt-2">
                                    <input 
                                      id="location"
                                      name="location"
                                      
                                      type="text"
                                      value=""
                                      // onChange={(e) => setLocation(e.target.value)}    
                                      // autoComplete="current-password"
                                      
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
        
                                  </div>
                                  
                                
                    </div>
                    <div className="flex items-center  gap-4 justify-center mt-4">
          <div className="max-w-96">
      
            <button
              type="submit"
            //  onClick={}
              className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 custom-btn"
            >
              Update
            </button>
            </div>
            <div className="max-w-96">
            <button
              type="reset"
              // onClick={}
              className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              CANCEL
            </button>
            
           
          </div>
          </div>
 
                    </form>
                    </>
                    ))
                  )}
                    </>}
      handleClose={togglePopup}
    />}

    

    </div>
  )
}

export default editItemComponent