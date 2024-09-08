import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../Config';

<<<<<<< HEAD
function StudentLoan() {
=======


function StudentLoan( ) {
  // /Users/sourabhkosti/Desktop/code/Ritik/Garnishment_React-main/src/pages/forms 
>>>>>>> 62a0f001f10b8443c82280375d91ebdbe3226549
  const [employee_name, setEmpName] = useState('');
  const [earnings, setEarnings] = useState('');
  const [garnishment_fees, setGarnishmentFees] = useState('');
  const [order_id, setOrderID] = useState('');
<<<<<<< HEAD
  const [employee_id, setEmployeeId] = useState(null);
  const [calculationResult, setCalculationResult] = useState(null);
  const [options, setOptions] = useState([]);
  const employer_id = parseInt(localStorage.getItem("id"));
=======
  // eslint-disable-next-line no-unused-vars
  const [selectedType, setSelectedType] = useState('SingleChild');
  const [options, setOptions] = useState([]);
  const [employee_id, setSelectedOption] = useState(null);
  // const [data, setData] = useState(null);
   
  const employer_id = (parseInt(localStorage.getItem("id")));
  // const [empID, setEmpID] = useState(options[0].value);

  const handleChange = (event) => {
    setSelectedOption((parseInt(event.target.value,10)));
    
    
  };

 
>>>>>>> 62a0f001f10b8443c82280375d91ebdbe3226549

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = localStorage.getItem("id");
        const response = await fetch(`${BASE_URL}/User/getemployeedetails/${id}/`);
        const jsonData = await response.json();
        if (jsonData.data) {
          setOptions(jsonData.data); // Set employee options
          setEmployeeId(jsonData.data[0].employee_id);
          setEmpName(jsonData.data[0].employee_name);
        }
      } catch (error) {
        console.error('Error fetching employee data:', error);
        toast.error('Failed to fetch employee data.');
      }
    };

    fetchData();
  }, []);

<<<<<<< HEAD
  const handleSubmit = async (event) => {
=======
  const handleReset = () => {
    setSelectedOption('');
    setEmpName('');
    setEarnings('');
    // setTaxes('');
    setGarnishmentFees('');
    setOrderID('');
};
  const handleSubmit = (event) => {
    alert('Data Successfully Submitted')
>>>>>>> 62a0f001f10b8443c82280375d91ebdbe3226549
    event.preventDefault();

    const postData = {
      employer_id,
      employee_id,
      employee_name,
      earnings,
      garnishment_fees,
<<<<<<< HEAD
      order_id
=======
      order_id,
>>>>>>> 62a0f001f10b8443c82280375d91ebdbe3226549
    };

<<<<<<< HEAD
    try {
      const response = await fetch(`${BASE_URL}/User/StudentLoanCalculationData/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
=======
          setSelectedOption('');
          setEmpName('');
          setEarnings('');
          setGarnishmentFees('');
          setSelectedOption('');
          setOrderID('');
        } else {
          // Handle submission errors
          console.error('Error submitting data:', response.statusText);
        }
>>>>>>> 62a0f001f10b8443c82280375d91ebdbe3226549
      });

      if (!response.ok) throw new Error('Failed to submit data');

      toast.success('Data submitted successfully! Fetching results...');

      const resultResponse = await fetch(`${BASE_URL}/User/GetSingleStudentLoanResult/${employer_id}/${employee_id}/`);
      const resultData = await resultResponse.json();
      if (!resultResponse.ok) throw new Error('Failed to fetch results');

      setCalculationResult(resultData.data[0]);
      toast.success(`Result: ${resultData.data[0].result}`);
    } catch (error) {
      console.error('Submission Error:', error);
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleReset = () => {
    setEmpName('');
    setEarnings('');
    setGarnishmentFees('');
    setOrderID('');
    setCalculationResult(null);
  };

  const handleChange = (e) => {
    setEmployeeId(parseInt(e.target.value, 10));
    const selectedEmployee = options.find(option => option.employee_id === parseInt(e.target.value, 10));
    if (selectedEmployee) {
      setEmpName(selectedEmployee.employee_name);
    }
  };



  return (
    <>
      <div className="min-h-full">
        <div className="container">
          <div className="contant ">
            <div className="p-0">
              <form onSubmit={handleSubmit}>
              {/* <MultiStep activeStep={2} > */}    
            <div className='hidden'> 
                        
                        <div className="mt-2 hidden">
                          <input
                            id="employer_id"
                            name="employer_id"
                             value={employer_id}
                            type="hidden"s
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
               <div className="shadow appearance-none border p-2 pb-4 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline grid grid-cols-4 md:grid-cols-4 divide-y-reverse sm:mx-auto sm:w-full gap-4 mb-2">
                  <div>
                    <label htmlFor="empID" className="block text-gray-700 text-sm font-bold mb-3">
                      Employee ID:
                    </label>
               
                    <select value={employee_id} noOptionsMessage={() => 'FOOOO!'}  onChange={handleChange} id="countries" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 focus:shadow-outline dark:text-black dark:focus:ring-white-500 dark:focus:border-white-500" required>
                        <option value="">Select Employee</option>
                        {options.map((option) => (
                          <option key={option.employee_id}   value={(parseInt(option.employee_id,10))}>
                            {option.employee_name}_{option.employee_id} 
                          </option>
                        ))}
                      </select>
                  </div>
                  <div>
                    <label htmlFor="empName" className="block text-gray-700 text-sm font-bold mb-2">
                      Employee Name:
                    </label>
                    <input
                      type="text"
                      id="empName"
                      placeholder='Enter Employee Name'
                      className="shadow appearance-none border  text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={employee_name}
                      onChange={(e) => setEmpName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="earning" className="block text-gray-700 text-sm font-bold mb-2">
                      Earnings:
                    </label>
                    <input
                      type="number"
                      id="earning"
                         placeholder='Enter Earnings'
                      className="shadow appearance-none border text-sm text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={earnings}
                      onChange={(e) => setEarnings(parseInt(e.target.value,10))}
                    />
                  </div>
                 
                  <div>
                    <label htmlFor="garnishmentFees" className="block text-gray-700 text-sm font-bold mb-2">
                      Garnishment Fees:
                    </label>
                    <input
                      type="number"
                      id="garnishmentFees"
                       placeholder='Enter Garnishment'
                      className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={garnishment_fees}
                      onChange={(e) => setGarnishmentFees(parseInt(e.target.value))}
                    />
                  </div>
                  <div>
                    <label htmlFor="orderID" className="block text-gray-700 text-sm font-bold mb-2">
                      Order ID:
                    </label>
                    <input
                      type="number"
                      id="orderID"
                      placeholder='Enter OrderID'
                      className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={order_id}
                      onChange={(e) => setOrderID(parseInt(e.target.value))}
                    />
                  </div>

             </div>
                <div className="flex items-center sm:mx-auto sm:w-full sm:max-w-lg justify-center mt-4">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-blue-500 m-2 sm:mx-auto sm:w-full text-sm text-sm hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Calculate
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
              {calculationResult && (
                <div className="result-section">
                  <h3>Calculation Result:</h3>
                  <p>Result: {calculationResult.garnishment_amount}</p>
                </div>
              )}
              
            </div>
          </div>
        </div> 
      </div>
    </>
  );
}

export default StudentLoan;
