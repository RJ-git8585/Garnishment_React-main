// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../Config';

function StudentLoan() {
  const [employee_name, setEmpName] = useState('');
  const [earnings, setEarnings] = useState('');
  const [garnishment_fees, setGarnishmentFees] = useState('');
  const [order_id, setOrderID] = useState('');
  const [employee_id, setEmployeeId] = useState(null);
  const [calculationResult, setCalculationResult] = useState(null);
  const [options, setOptions] = useState([]);
  const employer_id = parseInt(localStorage.getItem("id"));

  const [federal_income_tax, setFederalIncmoeTax] = useState('');
  const [social_and_security_tax, setSocialAndSecurityTax] = useState('');
  // const [social_and_security, setSocialAndSecurityTax] = useState('');

  const [medicare_tax, setMedicareTax] = useState('');
  const [state_tax, setStateTax] = useState('');
  const [SDI_tax, setSDITax] = useState('');

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const postData = {
      employer_id,
      employee_id,
      employee_name,
      earnings,
      garnishment_fees,
      order_id,

      federal_income_tax,
      social_and_security_tax,
    
      // social_and_security,

      medicare_tax,
      state_tax,
      SDI_tax
    };

    try {
      const response = await fetch(`${BASE_URL}/User/StudentLoanCalculationData/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
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
      // toast.error(`Error: ${error.message}`);
    }
  };

  const handleReset = () => {
    setEmpName('');
    setEarnings('');
    setGarnishmentFees('');
    setOrderID('');
    setCalculationResult(null);
    setFederalIncmoeTax('');
    setMedicareTax('');
    setStateTax('');
    setSDITax('');
    setSocialAndSecurityTax('');
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
                            type="hidden"
                            // autoComplete="employee_name"
                            // onChange={(e) => setEid(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
   
               <div className="shadow appearance-none border p-2 pb-4 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y-reverse sm:mx-auto sm:w-full gap-4 mb-2">
                  <div>
                    <label htmlFor="empID" className="block text-gray-700 text-sm font-bold mb-3">
                      Employee ID:
                    </label>
               
                    <select value={employee_id}  onChange={handleChange} id="countries" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 focus:shadow-outline dark:text-black dark:focus:ring-white-500 dark:focus:border-white-500" required>
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
                      step="0.01"
                      id="earning"
                      className="shadow appearance-none border text-sm text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={earnings}
                      onChange={(e) => setEarnings(parseFloat(e.target.value,10))}
                    />
                  </div>
                 
                  <div>
                    <label htmlFor="garnishmentFees" className="block text-gray-700 text-sm font-bold mb-2">
                      Garnishment Fees:
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      id="garnishmentFees"
                      className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={garnishment_fees}
                      onChange={(e) => setGarnishmentFees(parseFloat(e.target.value))}
                    />
                  </div>
                  <div>
                    <label htmlFor="orderID" className="block text-gray-700 text-sm font-bold mb-2">
                      Order ID:
                    </label>
                    <input
                      type="number"
                      id="orderID"
                      className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={order_id}
                      onChange={(e) => setOrderID(parseInt(e.target.value))}
                    />
                  </div>
                  {/* TUESDAY */}
                  
                 <div>
                    <label htmlFor="federal_income_tax" className="block text-gray-700 text-sm font-bold mb-2">
                      Federal Income Tax:
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      id="federal_income_tax"
                      className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

                      value={federal_income_tax}
                      onChange={(e) => setFederalIncmoeTax(parseFloat(e.target.value))}

                    

                    />
                  </div>
                  {/* SOCIAL&SECURITY_TAX */}
                  <div>

                    <label htmlFor="social_and_security_tax" className="block text-gray-700 text-sm font-bold mb-2">
                      Social Security Tax:
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      id="social_and_security_tax"
                      className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={social_and_security_tax}
                      onChange={(e) => setSocialAndSecurityTax(parseFloat(e.target.value)|| '')}

                    />
                  </div>
                  {/*  */}
                  <div>
                    <label htmlFor="medicare_tax" className="block text-gray-700 text-sm font-bold mb-2">
                      Medicare Tax:
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      id="medicare_tax"
                      className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={medicare_tax}
                      onChange={(e) => setMedicareTax(parseFloat(e.target.value))}
                    />
                  </div>
                    {/*  */}
                  <div>
                    <label htmlFor="state_tax" className="block text-gray-700 text-sm font-bold mb-2">
                      State Tax:
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      id="state_tax"
                      className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={state_tax}
                      onChange={(e) => setStateTax(parseFloat(e.target.value))}
                    />
                  </div>
                  {/*  */}
                  <div>
                    <label htmlFor="sdi_tax" className="block text-gray-700 text-sm font-bold mb-2">
                      SDI Tax:
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      id="sdi_tax"
                      className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

                      
                      value={SDI_tax}
                      onChange={(e) => setSDITax(parseFloat(e.target.value))}

                    />
                  </div>
                  {/* TUESDAY */}

             </div>
               
  
                          {/* <div
                          key={input.id} >
                            <label className="block  text-gray-700 text-sm mt-2  ml-2  mb-2"> Amount To Withhold Child <b>{input.id} </b>: </label>
                                    <input
                                    className=" shadow appearance-none border rounded  text-sm py-2 px-3 text-gray-700   leading-tight focus:outline-none focus:shadow-outline"
                                      type="text"
                                      value={input.index || ''}
                                      onChange={(event) => handleInputChange(event, index)}
                                      placeholder= "Amount"
                                    />
                                  </div> */}


                                  
                                
                                {/* </div> */}
                   

                  {/* <div className="shadow appearance-none border p-2 pb-4 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline grid grid-cols-4 md:grid-cols-4 divide-y-reverse sm:mx-auto sm:w-full gap-4 mt-2">
                          <div>
                                  <label htmlFor="taxes" className="block text-gray-700 text-sm font-bold mb-2">
                                    Federal Income Tax (%):
                                  </label>
                                  <input
                                    type="number"
                                    id="fit"
                                    className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={fit}
                                    onChange={(e) => setFit(parseInt(e.target.value))}
                                  />
                            </div> */}
                            {/* <div>
                                <label htmlFor="taxes" className="block text-gray-700 text-sm font-bold mb-2">
                                    Social Security Tax (%):
                                  </label>
                                <input
                                    type="number"
                                    id="social"
                                    className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={social}
                                    onChange={(e) => setSocial(parseInt(e.target.value))}
                                  />
                            </div>
                            <div>
                                <label htmlFor="taxes" className="block text-gray-700 text-sm font-bold mb-2">
                                    Medicare Tax (%):
                                  </label>
                                <input
                                    type="number"
                                    id="medicare"
                                    className="shadow appearance-none border rounded text-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={medicare}
                                    onChange={(e) => setMedicare(parseInt(e.target.value))}
                                  />
                            </div> */}
                            {/* <div>
                                <label htmlFor="taxes" className="block text-gray-700 text-sm font-bold mb-2">
                                    State Tax (%):
                                  </label>
                                <input
                                    type="number"
                                    id="state"
                                    className="shadow appearance-none border rounded text-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={statetax}
                                    onChange={(e) => setStateTax(parseInt(e.target.value))}
                                  />
                            </div>
                 
                </div> */}
              
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
            {/* <ToastContainer/> */}
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
