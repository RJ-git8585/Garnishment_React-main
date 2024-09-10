// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Headertop from '../component/Headertop';
import Sidebar from '../component/sidebar';
// import MultiStep from 'react-multistep'

// eslint-disable-next-line react/prop-types
function iwo( ) {
 
 
  // eslint-disable-next-line react-hooks/rules-of-hooks, no-unused-vars
  const [empID, setEmpID] = useState(''); 
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [upload, setuploadfile] = useState('');
  // const [state, setState] = useState('');

  // const [selectedValue, setSelectedValue] = useState(null);

 
  const handleReset = () => {
    setEmpID('');
    setuploadfile('');
};
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', {
      empID,
      upload
    });

   

  
  };

  return (
    <>
      <div className="min-h-full">
        <div className="container main ml-auto">
        <div className='sidebar hidden lg:block'><Sidebar/></div>
          <div className="contant content ml-auto">
            <Headertop />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">IWO Upload Form</h2>
              <form onSubmit={handleSubmit}>
              {/* <MultiStep activeStep={2} > */}
               
              <div className=" shadow appearance-none border max-w-96
                  p-2 pb-4 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlineflex items-center  mb-6">
                              <label className="block  text-gray-700 text-sm mt-2  ml-2 font-bold mb-2"> Upload IWO Here: </label>
                              <input type="file"  className="shadow appearance-none border rounded  text-sm py-2 px-3 text-gray-700   leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter amount in $" />
               </div>

               <div className='hidden'>  
                        <div className="mt-2 hidden">
                          <input
                            id="employer_id"
                            name="employer_id"
                             value={empID}
                            type="hidden"
                            // autoComplete="employee_name"
                            // onChange={(e) => setEid(e.target.value)}
                            
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="flex items-center sm:mx-auto sm:w-full sm:max-w-lg justify-center mt-4">
                  <button
                    type="submit"
                    className="bg-blue-500 m-2 sm:mx-auto sm:w-full text-sm text-sm hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Upload
                  </button>
                  <button
                    type="reset"
                    onClick={handleReset}
                    className="bg-blue-500 m-2 sm:mx-auto sm:w-full text-sm text-sm hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Reset
                  </button>
                </div> 
                 
                {/* </MultiStep> */}
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default iwo;
