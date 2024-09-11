/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../Config';

function FederalTax() {
  const [employee_name, setEmpName] = useState('');
  const [earnings, setEarnings] = useState('');
  const [garnishment_fees, setGarnishmentFees] = useState('');
  const [order_id, setOrderID] = useState('');
  const [pay_period, setPay] = useState('');
  const [no_of_exception, setExceptions] = useState(0);
  const [filing_status, setFilingStatus] = useState('');
  const [employee_id, setEmployeeId] = useState(null);
  const [calculationResult, setCalculationResult] = useState(null);
  const [local_tax, setlocal_tax] = useState(null);
  const [workers_compensation, setworkers_compensation] = useState(null);
  const [medical_insurance, setmedical_insurance] = useState(null);
  const [contribution, setcontribution] = useState(null);
  const [united_way_contribution, setUnitedWayContribution] = useState(null);
  const [social_and_security, setSocialandSecurity] = useState(null);
  const [medicare_tax, setMedicareTax] = useState(null);
  const [state_tax, setStateTax] = useState(null);
  const [federal_income_tax, setFederalIncomeTaxRate] = useState(null);
  const [options, setOptions] = useState([]);
  const employer_id = parseInt(localStorage.getItem("id"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = localStorage.getItem("id");
        const response = await fetch(`${BASE_URL}/User/getemployeedetails/${id}/`);
        const jsonData = await response.json();
        if (jsonData.data) {
          setEmployeeId(jsonData.data[0].employee_id);
          setEmpName(jsonData.data[0].employee_name);
          setOptions(jsonData.data); // Store the employee options
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
      pay_period,
      no_of_exception,
      filing_status,
      local_tax,
      workers_compensation,
      medical_insurance,
      contribution,
      united_way_contribution,
      social_and_security,
      medicare_tax,
      state_tax,
      federal_income_tax
    };

    try {
      const response = await fetch(`${BASE_URL}/User/FederalCaseData/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
      });

      if (!response.ok) throw new Error('Failed to submit data');

      toast.success('Data submitted successfully! Fetching results...');

      const resultResponse = await fetch(`${BASE_URL}/User/FederalCaseResult/${employer_id}/${employee_id}/`);
      const resultData = await resultResponse.json();
      if (!resultResponse.ok) throw new Error('Failed to fetch results');

      setCalculationResult(resultData.data[0]);
      toast.success(`Result: ${resultData.data[0].result.toLocaleString()}`);
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
    setPay('');
    setExceptions(0);
    setFilingStatus('');
    setCalculationResult(null);
    setlocal_tax('');
    setworkers_compensation('');
    setmedical_insurance('');
    setGarnishmentFees('');
    setcontribution('');
    setUnitedWayContribution('');
    setSocialandSecurity('');
    setmedical_insurance('');
    setMedicareTax('');
    setStateTax('');
    setFederalIncomeTaxRate('');
  };

  const handleChange = (e) => {
    setEmployeeId(e.target.value);
  };

  const handleChangePay = (e) => {
    setPay(e.target.value);
  };

  const handleChangeStatus = (e) => {
    setFilingStatus(e.target.value);
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
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      
         
               
   
               <div className="shadow appearance-none border p-2 pb-4 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y-reverse sm:mx-auto sm:w-full gap-4 mb-2">
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
                  <div>
                    <label htmlFor="orderID" className="block text-gray-700 text-sm font-bold mb-2">
                      Pay Period:
                    </label>
                    <select id="options" value={pay_period} onChange={handleChangePay} className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="options">
                      <option value="Weekly">Weekly</option>
                      <option value="Daily"> Daily</option>
                      <option value="Biweekly">Biweekly
                      </option>
                      <option value="Semimonthly">Semimonthly</option>
                      <option value="Monthly">Monthly</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="orderID" className="block text-gray-700 text-sm font-bold mb-2">
                    No Of Exemptions:
                    </label>
                    <input
                      type="number"
                      id="Exception"
                      className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={no_of_exception}
                      onChange={(e) => setExceptions(parseInt(e.target.value))}
                    />
                  </div>
                  <div>
                  <label htmlFor="options" className="block text-gray-700 text-sm font-bold mb-2">Filling Status:</label>
                    <select id="options" value={filing_status} onChange={handleChangeStatus} className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="options">
                      
                      <option value="married filing sepearte return">Married filing sepearte return</option>
                      <option value="married filing joint return">Married filing joint return
                      </option>
                      <option value="single filing status"> Single filing status</option>
                      <option value="head of household">Head of household</option>
                    </select>

                  </div>
                  <div>
                    <label htmlFor="local_tax" className="block text-gray-700 text-sm font-bold mb-2">
                    Local Tax:
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      id="local_tax"
                      className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={local_tax}
                      onChange={(e) => setlocal_tax(parseFloat(e.target.value))}
                    />
                  </div>
             
                  <div>
                    <label htmlFor="workers_compensation" className="block text-gray-700 text-sm font-bold mb-2">
                    Workers Compensation:
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      id="workers_compensation"
                      className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={workers_compensation}
                      onChange={(e) => setworkers_compensation(parseFloat(e.target.value))}
                    />
                  </div>
                  <div>
                    <label htmlFor="medical_insurance" className="block text-gray-700 text-sm font-bold mb-2">
                    Medical Insurance:
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      id="medical_insurance"
                      className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={medical_insurance}
                      onChange={(e) => setmedical_insurance(parseFloat(e.target.value))}
                    />
                  </div>
                  <div>
                    <label htmlFor="contribution" className="block text-gray-700 text-sm font-bold mb-2">
                    Contribution
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      id="contribution"
                      className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={contribution}
                      onChange={(e) => setcontribution(parseFloat(e.target.value))}
                    />
                  </div>
                  <div>
                    <label htmlFor="united_way_contribution" className="block text-gray-700 text-sm font-bold mb-2">
                    United Way Contribution:
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      id="united_way_contribution"
                      className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={united_way_contribution}
                      onChange={(e) => setUnitedWayContribution(parseFloat(e.target.value))}
                    />
                  </div>
                  <div>
                    <label htmlFor="social_and_security" className="block text-gray-700 text-sm font-bold mb-2">
                    Social Security Tax:
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      id="social_and_security"
                      className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={social_and_security}
                      onChange={(e) => setSocialandSecurity(parseFloat(e.target.value))}
                    />
                  </div>
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
                      onChange={(e) => setFederalIncomeTaxRate(parseFloat(e.target.value))}
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
                <ToastContainer/>
              </form>
              {calculationResult && (
              <div className="result-section mt-4">
                <h2>Calculation Result:</h2>
                <p>{calculationResult.result}</p>
              </div>
            )}
            </div>
          </div>
        </div> 
      </div>
    </>
  );
}

export default FederalTax;
