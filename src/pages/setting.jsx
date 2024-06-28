    // eslint-disable-next-line no-unused-vars
    import React from 'react'   
    import Sidebar from '../component/sidebar'  
    import Headertop from '../component/Headertop'
    import { FaTools } from "react-icons/fa";

    function Setting() {
    return (
    
          <div className="min-h-full">
       
     
       <div className="container main ">
        <div className='sidebar'><Sidebar/></div>
        <div className="contant content ml-auto">
        <Headertop />
                      <h1 className='edit-profile mt-6 inline-block'> <FaTools />Settings</h1>
                    <form className=" grid grid-cols-2 gap-4 rounded-md space-y-6 p-6 " action="#" method="POST">
                    
                   

                    <label className="inline-flex items-center mb-5 cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer"/>
  <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span className="ms-3 text-sm font-medium  dark:text-gray-600">Dark More</span>
</label>
<label className="inline-flex items-center mb-5 cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer"/>
  <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span className="ms-3 text-sm font-medium  dark:text-gray-600">Active Profile for Others</span>
</label>










        </form>
       </div>
        </div>
        
        </div>
        
    )
    }

    export default Setting