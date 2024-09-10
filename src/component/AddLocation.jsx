// eslint-disable-next-line no-unused-vars
import {React,useState} from 'react'
import Headertop from '../component/Headertop'

import Sidebar from '../component/sidebar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';

function AddLocation() {
  const navigate = useNavigate();
    // eslint-disable-next-line no-undef
    const [employee_name, setName] = useState('');
   // eslint-disable-next-line no-undef
    const [department, setDepart] = useState('');
     // eslint-disable-next-line no-undef
     const [net_pay, setNet] = useState('');
      // eslint-disable-next-line no-undef
    const [minimun_wages, setMinWages] = useState('');
     // eslint-disable-next-line no-undef
     const [pay_cycle, setPayCycle] = useState('');
      // eslint-disable-next-line no-undef
    const [number_of_garnishment, setNumberGarnihsment] = useState('');
      // eslint-disable-next-line no-undef
      const [location, setLocation] = useState('');
      // eslint-disable-next-line no-undef
      const employer_id = localStorage.getItem("id");
      const handleReset = () => {
                 setName('');
                setDepart('');
                setNet('');
                setMinWages('');
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
            net_pay,
            minimun_wages,
            pay_cycle,
            number_of_garnishment,
            location
          };

          fetch('https://garnishment-backend.onrender.com/User/employee_details/', {
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
                
                toast('Data submitted successfully !!');
                navigate('/employee', { replace: true });
                handleReset();

                // Clear the form
                setName('');
                setDepart('');
                setNet('');
                setMinWages('');
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
       
        <div className="container main">
        <div className='sidebar hidden lg:block'><Sidebar/></div>
        
        <div className=' contant content ml-auto'>
        <Headertop />
            <h2 className='font-bold Ctext-base mb-6'>Add Location</h2>
            
            <hr />
            <form className=" grid grid-cols-2 gap-4 border-gray-50 rounded-md space-y-6 p-6 shadow-lg shadow-blue-500/50" action="#" method="POST">
                    
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
                    <div className=''> 
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
                      <div className=''>
                        <label htmlFor="name" className="block text-slate-500 text-sm font-medium leading-6">
                        Department
                        </label>
                        <div className="mt-2">
                          <input
                            id="department"
                            name="department"
                            value={department}
                            type="text"
                            step="0.01"
                            autoComplete="name"
                            onChange={(e) => setDepart(e.target.value)}
                            
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className=''>
                        <label htmlFor="email" className="text-slate-500 block  text-sm font-medium leading-6 ">
                        Net Pay 
                        </label>
                        <div className="mt-2">
                          <input
                            id="net_pay"
                            name="net_pay"
                            value={net_pay}
                            type="number"
                            step="0.01"
                            autoComplete="net_pay"
                            onChange={(e) => setNet(e.target.value)}
                            
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="text-slate-500 block  text-sm font-medium leading-6 ">
                        Minimun Wages 
                        </label>
                        <div className="mt-2">
                          <input
                            id="minimun_wages"
                            name="minimun_wages"
                            value={minimun_wages}
                            type="number"
                            step="0.01"
                            autoComplete="minimun_wages"
                            onChange={(e) => setMinWages(e.target.value)}
                            
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between">
                          <label htmlFor="password" className="text-slate-500 block  text-sm font-medium leading-6 ">
                          Pay Cycle 
                          </label>
                        </div>
                        <div className="mt-2">
                          <input 
                            id="pay_cycle"
                            name="pay_cycle"
                            type="number"
                            step="0.01"
                            value={pay_cycle}
                            onChange={(e) => setPayCycle(e.target.value)}
                            // autoComplete="current-password"
                            
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />

                        </div>
                        
                      
          </div>
          <div>
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
                            value={number_of_garnishment}
                            onChange={(e) => setNumberGarnihsment(e.target.value)}    
                            // autoComplete="current-password"
                            
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />

                        </div>
                        
                      
          </div>
          <div>
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

          <div >
      
            <button
              type="submit"
             onClick={handleSubmit}
              className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 custom-btn"
            >
              ADD
            </button>
            </div>
            <div >
            <button
              type="reset"
              onClick={handleReset}
              className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              CANCEL
            </button>
            
           
          </div>
          
        </form>





    </div>
    </div>  
       
       </div>
       <ToastContainer />
       </div>
     
 
  )
}

export default AddLocation