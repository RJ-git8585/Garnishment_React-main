    // eslint-disable-next-line no-unused-vars
    import  { React ,useState, useEffect } from 'react';
    import Sidebar from '../component/sidebar'  
    import Headertop from '../component/Headertop'
    import { FaTools } from "react-icons/fa";
    // import Color from '../component/Color';  
    import { BASE_URL } from '../Config';
    // import {  toast } from 'react-toastify';

    function Setting() {
      // const employer_id = (parseInt(localStorage.getItem("id")));
      useEffect(()=>{

        const fetchData = async () => {
          try {
            const id = localStorage.getItem("id");
            const datalog = await fetch(`${BASE_URL}/User/setting/${id}/`); // Replace with your API URL
            const jsonDatalog = await datalog.json();
            setIsChecked(jsonDatalog.data.mode) ;
            // localStorage.setItem('Mode', jsonDatalog.data.mode);
            // localStorage.setItem('Mode', jsonDatalog.data.mode);s  
            setIsActiveChecked(jsonDatalog.data.visibility) ;
            console.log(jsonDatalog.data.mode) ;

          } catch (error) {
            console.error('Error fetching data:', error);
            // Handle errors appropriately (display error message, etc.)
          }
        };
         fetchData();
        //  toast.success('Getting Setting Details');
    
      },[])



      const [isChecked, setIsChecked] = useState();
      const [isActiveChecked, setIsActiveChecked] = useState();
       // Initial checkbox state

      const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
      };
      const handleActivecheckboxChange = (event) => {
        setIsActiveChecked(event.target.checked);
      };  

    return (
    
          <div className="min-h-full">
       <div  className={isChecked === 'true ' ?  'dark-mode container main' : 'light-mode container main'  } >
       <div className='sidebar hidden lg:block'><Sidebar/></div>
        <div className="contant content ml-auto">
        <Headertop />
        {/* <Color /> */}
                      <h1 className='edit-profile mt-6 inline-block'> <FaTools />Settings</h1>
                    <form className=" grid grid-cols-2 gap-4 rounded-md space-y-6 p-6 " action="#" method="POST"> 
                    <label className="inline-flex items-center mb-5 cursor-pointer">
  {/* <input type="checkbox" value="" className="sr-only peer"/> */}
  <input
        type="checkbox"
        id="myCheck"
        className="sr-only peer"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
  <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span className="ms-3 text-sm font-medium  dark:text-gray-600">Dark More</span>
</label>
<label className="inline-flex items-center mb-5 cursor-pointer">
  <input type="checkbox" value=""
    
    id="ActiveProfile"
    className="sr-only peer"
    checked={isActiveChecked}
    onChange={handleActivecheckboxChange}
  />
  <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span className="ms-3 text-sm font-medium  dark:text-gray-600">Active Profile for Others</span>
</label>  
{isChecked && ( // Conditionally render the text
        <p id="text">Dark mode click This is the text that will be shown when the checkbox is checked.</p>
      )}
      {isActiveChecked && ( // Conditionally render the text
        <p id="text">isActiveChecked is clicked for new setting save if you want </p>
      )}
</form>
<button href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save Settings  </button>
          

        
       </div>
        </div>
        
        </div>
        
    )
    }

    export default Setting