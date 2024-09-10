/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React, { useState,useEffect } from 'react';
import Headertop from '../component/Headertop';
import Sidebar from '../component/sidebar';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaBalanceScaleRight } from "react-icons/fa";
import { BASE_URL } from '../Config';

function Garnishment( ) {

  const [employee_name, setEmpName] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [earnings, setEarnings] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [garnishment_fees, setGarnishmentFees] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [order_id, setOrderID] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks  
  const [state, setState] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [minimum_wages, setMinimumWages] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [amount_to_withhold, setTotalAmount] = useState('');
  const [social, setSocial] = useState('');
  const [fit, setFit] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [selectedType, setSelectedType] = useState('');
  const [medicare, setMedicare] = useState('');
  const [arrears_amt, setArrears] = useState('');
  const [statetax, setStateTax] = useState('');
  const [showNewField, setShowNewField] = useState(false);
  const [hideNewField, setHideNewField] = useState(false);
  const [ShowStudentNewField, setShowStudentNewField] = useState(false);
  const [hideStudentNewField, setHideStudentNewField] = useState(false);
  // const [ShowFederalNewField, setShowFederalNewField] = useState(false);
  const [hideFederalNewField, setHideFederalNewField] = useState(false);
  // const [state, setState] = useState('');
  const [arrears_greater_than_12_weeks, setIsChecked] = useState(false);
  const [support_second_family, setIsCheckedFamily] = useState(false); // Initialize checkbox state as unchecked
  // const [selectedValue, setSelectedValue] = useState(null);
  const [options, setOptions] = useState([]);
  const [employee_id, setSelectedOption] = useState(null);
  // const [data, setData] = useState(null);
  const employer_id = (parseInt(localStorage.getItem("id")));
  // const [empID, setEmpID] = useState(options[0].value);

  const handleChange = (event) => {
    setSelectedOption((parseInt(event.target.value,10)));
    
    
  };

  const [inputs, setInputs] = useState([{ id: 1 }]);

  const handleAddInput = () => {
    const newInput = { id: inputs.length + 1 };
    setInputs([...inputs, newInput]);
    console.log(newInput);
  };

  const [Arrearinputs, setArrearInputs] = useState([{ id: 1 }]);

  const  handleAddArrearInput= () => {
    const newInputArrear = { idArrear: Arrearinputs.length + 1 };
    setArrearInputs([...Arrearinputs, newInputArrear]);
    console.log(newInputArrear);
  };

  const handleInputChange
 = (event, index) => {
    const newInputs = [...inputs];
    newInputs[index].value = event.target.value;
    setInputs(newInputs);
  };


  const handleChangeType = (event) => {
    const selectedOption = event.target.value;
    setSelectedType(selectedOption);
    setShowNewField(event.target.value === 'MultipleChild');
    setHideNewField(event.target.value === 'MultipleChild'); 
    setShowStudentNewField(event.target.value === 'StudentLoan');
    setHideStudentNewField(event.target.value === 'StudentLoan'); 
// setShowFederalNewField(event.target.value === 'FederalTax');
    setHideFederalNewField(event.target.value === 'FederalTax');
    console.log('Selected value:', selectedOption);
    console.log('Selected value:', hideNewField);
    console.log('Selected value:', showNewField);
  };

  // eslint-disable-next-line no-unused-vars
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked); 
    
  };
  const handleCheckboxChange1 = (event) => {
    setIsCheckedFamily(event.target.checked); // Update s
  }
  useEffect(() => {
   // const name = localStorage.getItem("name");
   const fetchData = async () => {
    try {
      const id = localStorage.getItem("id");
      const response = await fetch(`${BASE_URL}/User/getemployeedetails/${id}/`);
      // Replace with your API URL
      const jsonData = await response.json(options);
      setOptions(jsonData.data);
      // console.log(jsonData.data)
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle errors appropriately (display error message, etc.)
    }
  };

  fetchData(); // Call the function
  // toast.success('All Employee Data !!');
},)

  const handleReset = () => {
    setSelectedOption('');
    setEmpName('');
    setEarnings('');
    setGarnishmentFees('');
    setOrderID('');
    setState('');
    setSocial('');
    setFit('');
    setMedicare('');
    setIsChecked('');
    setIsCheckedFamily('');
    setStateTax('');
    setArrears('');
};
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    const data = {
      employer_id,
      employee_id,
      employee_name,
      earnings,
      // taxes,
      garnishment_fees,
      order_id,
      state,
      minimum_wages,
      amount_to_withhold,
      arrears_greater_than_12_weeks,
      support_second_family,
      // statetax,
      arrears_amt,
    };
    console.log(data)
    fetch('https://garnishment-backend.onrender.com/User/CalculationDataView', {
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
          
          toast.success('Calculation Added Successfully !!');
          // navigate('/employee', { replace: true });
          handleReset();

          setSelectedOption('');
          setEmpName('');
          setEarnings('');
          // setTaxes('');
          setGarnishmentFees('');
          setSelectedOption('');
          setOrderID('');
          setState('');
          setIsChecked('');
          setIsCheckedFamily('');
          // setStateTax('');
          setArrears('');
        } else {
          // Handle submission errors
          console.error('Error submitting data:', response.statusText);
        }
      });
      console.log(options)
  };

  return (
    <>
      <div className="min-h-full">
        <div className="container main ml-auto">
        <div className='sidebar hidden lg:block'><Sidebar/></div>
          <div className="contant content ml-auto">
            <Headertop />
            <div className="p-0">
              {/* <h1 className="uppercase font-bold mb-4 inline-block"><FaBalanceScaleRight/>Garnishment Calcultor</h1> */}
              <h1 className='edit-profile mt-6 mb-4 inline-block'><FaBalanceScaleRight/>Garnishment Calculator</h1>
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

                      <div>
              <label htmlFor="empID" className="block italic text-red-700 text-sm font-semibold mb-3">
                      Please Select Garnishment Type:
                    </label>
              <select className="custom-select mb-10 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white-50 border border-white-300 text-white-900 text-sm bg-black rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 focus:shadow-outline dark:text-white dark:focus:ring-white-500 dark:focus:border-white-500" value={selectedType} onChange={handleChangeType} required>
                  {/* <option value="SingleChild">Select Your Prefer Type</option>  */}
                <option  value="SingleChild">Single Child</option>
                <option value="MultipleChild">Multiple Child</option>
                <option value="StudentLoan">Student loan</option>
                <option value="MultiStudentLoan">Multiple Student loan</option>
                <option value="FederalTax">Federal Tax</option>
                <option value="StateTax">State Tax</option>
                <option value="Creditor">Creditor</option>
                <option value="Bankruptcy">Bankruptcy</option>
              </select>

  
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
                      className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={order_id}
                      onChange={(e) => setOrderID(parseInt(e.target.value))}
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">
                      State:
                    </label>
                    <input
                      type="text"
                      id="state"
                      className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                    
                  {hideFederalNewField == false &&  (
                    <>
                  <div>
                    <label htmlFor="minimumWages" className="block text-gray-700 text-sm font-bold mb-2">
                      Minimum Wages:
                    </label>
                    <input
                      type="number"
                      id="minimumWages"
                      className="shadow appearance-none border rounded w-full py-2 text-sm px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={minimum_wages}
                      onChange={(e) => setMinimumWages(parseInt(e.target.value))}
                    />
                  </div>
                  {ShowStudentNewField &&  (
                  <>
                  <div>
                    <label htmlFor="totalAmount" className="block text-gray-700 text-sm font-bold mb-2">
                     Number Of Student Loan Order:
                    </label>
                    <input
                      type="number"
                      id="totalAmount"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={amount_to_withhold}
                      onChange={(e) => setTotalAmount(parseInt(e.target.value))}
                    />
                  </div>
                  </>
                  )}
                

                  {hideStudentNewField == false &&  (
                    <>
                  {hideNewField == false &&  (
                    <>
                  <div>
                    <label htmlFor="totalAmount" className="block text-gray-700 text-sm font-bold mb-2">
                      Amount To Withhold:
                    </label>
                    <input
                      type="number"
                      id="totalAmount"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={amount_to_withhold}
                      onChange={(e) => setTotalAmount(parseInt(e.target.value))}
                    />
                  </div>
                  </>
                  )}
                   </>
                  )}
                    </>
                  )}
             </div>

                  {hideFederalNewField == false &&  (
                    <>
                    <span className="text-sm mb-4 text-2xl font-bold  text-gray-700">Taxes Details </span>  

                    {hideStudentNewField == false &&  (
                    <>
                <div className="flex items-center mt-4 mb-4">
                    <input id="showFieldCheckboxFamily" checked={support_second_family} onChange={handleCheckboxChange1} type="checkbox"  value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label  className="ms-2 text-sm font-medium  dark:text-gray-800">Support Second Family</label>
                </div>
                </>
                  )}
              
                <div className="flex items-center mt-4 mb-6">
                
                    <input  id="showFieldCheckbox" checked={arrears_greater_than_12_weeks} onChange={handleCheckboxChange} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label  className="ms-2 text-sm font-medium  dark:text-gray-800">Garnishment Arrears more than 12 months</label>
                 
                
                </div>
            
                
                      {arrears_greater_than_12_weeks && ( // Conditionally render the field based on checkbox state
                      <>
                       {showNewField &&  (
                            <>
                      <button className="rounded-md bg-indigo-600 px-3.5 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleAddArrearInput}>Add Arrears Amount</button>
                      </>
                                  )}
                                  
                            <div className="shadow  appearance-none border p-2 pb-4 mb-4 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline grid grid-cols-4 md:grid-cols-4 divide-y-reverse sm:mx-auto sm:w-full gap-4 mt-4">
                             {Arrearinputs.map((input) => (
                                    <>
                                    <div
                          key={input.idArrear} >
                              <label className="block  text-gray-700 text-sm mt-2  ml-2 font-bold mb-2"> Arrears: {input.idArrear} </label>
                              <input type="number"  
                              
                              value={arrears_amt}

                      onChange={(e) => setArrears(parseInt(e.target.value))} className="shadow appearance-none border rounded  text-sm py-2 px-3 text-gray-700   leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter amount in $" />
                      </div>
                       </>
                                  ))} 
                            </div>
                           
                           
                      </>
                        )}

                      {showNewField &&  (
                            <>
                            <button className="rounded-md bg-indigo-600 px-3.5 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleAddInput}>Add Child Hold Amount</button>
                          
                             
                            <div className='shadow appearance-none border mb-4 p-2 pb-4 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline grid grid-cols-4 md:grid-cols-4 divide-y-reverse sm:mx-auto sm:w-full gap-4 mt-4'>
                                  {inputs.map((input, index) => (
                                    <>
                          <div
                          key={input.id} >
                            <label className="block  text-gray-700 text-sm mt-2  ml-2  mb-2"> Amount To Withhold Child <b>{input.id} </b>: </label>
                                    <input
                                    className=" shadow appearance-none border rounded  text-sm py-2 px-3 text-gray-700   leading-tight focus:outline-none focus:shadow-outline"
                                      type="text"
                                      value={input.index || ''}
                                      onChange={(event) => handleInputChange(event, index)}
                                      placeholder= "Amount"
                                    />
                                  </div>

        </>
                                  ))}
                                
                                </div>
                            
                      </>
                       )}
               

                  <div className="shadow appearance-none border p-2 pb-4 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline grid grid-cols-4 md:grid-cols-4 divide-y-reverse sm:mx-auto sm:w-full gap-4 mt-2">
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
                            </div>
                            <div>
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
                            </div>
                            <div>
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
                 
                </div>
                </>
                  )}
                <div className="flex items-center sm:mx-auto sm:w-full sm:max-w-lg justify-center mt-4">
                  <button
                    type="submit"
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
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Garnishment;
