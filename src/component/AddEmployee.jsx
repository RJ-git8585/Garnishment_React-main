// eslint-disable-next-line no-unused-vars
import {React, useState} from 'react'
import Headertop from '../component/Headertop'
import Sidebar from '../component/sidebar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../Config';
// eslint-disable-next-line no-unused-vars
import { useNavigate } from 'react-router-dom';
// import { FaUserEdit } from "react-icons/fa";


function AddEmployee() {

    const [employee_name, setName] = useState('');
    const [department, setDepart] = useState('');
     const [pay_cycle, setPayCycle] = useState('');
    const [number_of_garnishment, setNumberGarnihsment] = useState('');
      const [location, setLocation] = useState('');
      const employer_id = localStorage.getItem("id");

      const handleReset = () => {
                 setName('');
                setDepart('');
                setPayCycle('');
                setNumberGarnihsment('');
                setLocation('');
      };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            employer_id,
            employee_name,
            department,
            pay_cycle,
            number_of_garnishment,
            location
          };

          fetch(`${BASE_URL}/User/employee_details/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then((response) => {
              if (response.ok) {
                // Handle successful submission
                console.log('Data submitted successfully!');  
                toast.success('Employee Added Successfully !!');
                // navigate('/employee', { replace: true });
                handleReset();

                // Clear the form
                setName('');
                setDepart('');
                // setNet('');
                // setMinWages('');
                setPayCycle('');
                setNumberGarnihsment('');
                setLocation('');
              } else {
                // Handle submission errors
                console.error('Error submitting data:', response.statusText);
              }
            });
        };
    
  return (
    <div>

<div className="min-h-full">
       
        <div className="container main ml-auto">
        <div className='sidebar hidden lg:block'><Sidebar/></div>
        
        <div className=' contant content ml-auto mb-4'>
        <Headertop />
            <h2 className='font-bold Ctext-base inline '>Add Employee</h2>
           
              <form className=" grid grid-cols-4 gap-3 mt-8 border-gray-50 rounded-md space-y-6 p-6 shadow-lg shadow-blue-500/50" action="#" method="POST">
                      
              <div className='hidden'> 
                          
                          <div className="mt-2 hidden">
                            <input
                              id="employer_id"
                              name="employer_id"
                              value={employer_id}
                              type="hidden"
                              // autoComplete="employee_name"
                              // onChange={(e) => setEid(e.target.value)}
                              
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
                              value={employee_name}
                              type="text"
                              autoComplete="employee_name"
                              onChange={(e) => setName(e.target.value)}
                              
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
                              value={department}
                              type="text"
                              step="1"
                              autoComplete="name"
                              onChange={(e) => setDepart(e.target.value)}
                              
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
                              

                              value={pay_cycle}
                              onChange={(e) => setPayCycle(e.target.value)}
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
                              value={number_of_garnishment}
                              onChange={(e) => setNumberGarnihsment(e.target.value)}    
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
                              value={location}
                              onChange={(e) => setLocation(e.target.value)}    
                              // autoComplete="current-password"
                              
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />

                          </div>
                          
                        
            </div>
            </form>
          <div className="flex items-center  gap-4 justify-center mt-4">
          <div className="max-w-96">
      
            <button
              type="submit"
             onClick={handleSubmit}
              className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 custom-btn"
            >
              ADD
            </button>
            </div>
            <div className="max-w-96">
            <button
              type="reset"
              onClick={handleReset}
              className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              CANCEL
            </button>
            
           
          </div>
          </div>
 
       




    </div>
    </div>  
       
       </div>
       <ToastContainer />
       </div>
     
 
  )
}

export default AddEmployee