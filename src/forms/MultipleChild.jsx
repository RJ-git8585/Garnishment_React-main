/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../Config';
import { FaTrashAlt } from "react-icons/fa";

function MultipleChild() {
  const [employee_name, setEmpName] = useState('');
  const [earnings, setEarnings] = useState(''); 
  
  const [garnishment_fees, setGarnishmentFees] = useState('');
  const [order_id, setOrderID] = useState('');
  const [state, setState] = useState('');
  const [number_of_arrears, setnumber_of_arrears] = useState('');
  // const [minimum_wages, setminimum_wages] = useState('');
  const [arrears_greater_than_12_weeks, setIsChecked] = useState(false);
  const [support_second_family, setIsCheckedFamily] = useState(false);
  const [employee_id, setSelectedOption] = useState(null);
  const [inputs, setInputs] = useState([{ id: 1, value: '' }]);
  const [arrearInputs, setArrearInputs] = useState([{ id: 1, value: '' }]);
  const [calculationResult, setCalculationResult] = useState(null);
  const [calculationNetpay, setCalculationNetpay] = useState(null);
  const employer_id = parseInt(localStorage.getItem("id"));
  const [options, setOptions] = useState([]);
  const style = { color: "#b90707", fontSize: "1.2em" };
  const [federal_income_tax, setFederalIncmoeTax] = useState('');
  const [social_tax, setSocialTax] = useState('');
  const [medicare_tax, setMedicareTax] = useState('');
  const [state_tax, setStateTax] = useState('');

  const StateList = [
    { id: 1, label: 'Alabama' },
    { id: 2, label: 'Arizona' },
    { id: 3, label: 'California' },
    { id: 4, label: 'Colorado' },
    { id: 5, label: 'Connecticut' },
    { id: 6, label: 'Florida' },
    { id: 7, label: 'Georgia' },
    { id: 8, label: 'Idaho' },
    { id: 9, label: 'Illinois' },
    { id: 10, label: 'Indiana' },
    { id: 11, label: 'Iowa' },
    { id: 12, label: 'Kansas' },
    { id: 13, label: 'Kentucky' },
    { id: 14, label: 'Louisiana' },
    { id: 14, label: 'Maine' },
    { id: 15, label: 'Maryland' },
    { id: 16, label: 'Massachusetts' },
    { id: 17, label: 'Michigan' },
    { id: 18, label: 'Minnesota' },
    { id: 19, label: 'Mississippi' },
    { id: 20, label: 'Missouri' },
    { id: 21, label: 'Montana' },
    { id: 22, label: 'Nebraska' },
    { id: 23, label: 'Nevada' },
    { id: 24, label: 'New Hampshire' },
    { id: 25, label: 'New Jersey' },
    { id: 26, label: 'New Mexico' },
    { id: 27, label: 'North Carolina' },
    { id: 28, label: 'North Dakota' },
    { id: 29, label: 'Ohio' },
    { id: 30, label: 'Oklahoma' },
    { id: 31, label: 'Oregon' },
    { id: 32, label: 'Pennsylvania' },
    { id: 33, label: 'Rhode Island' },
    { id: 34, label: 'South Carolina' },
    { id: 35, label: 'South Dakota' },
    { id: 36, label: 'Tennessee' },
    { id: 37, label: 'Texas' },
    { id: 38, label: 'Utah' },
    { id: 39, label: 'Vermont' },
    { id: 40, label: 'Virginia' },
    { id: 41, label: 'Washington' },
    { id: 42, label: 'West Virginia' },
    { id: 43, label: 'Wisconsin' },
    { id: 44, label: 'Wyoming' },
    { id: 45, label: 'Alaska' },
    { id: 46, label: 'Arkansas' },
    { id: 47, label: 'Delaware' },
    { id: 48, label: 'Hawaii' },
    { id: 49, label: 'Montana' },
    { id: 50, label: 'New York' },
  ];

  const handleState = (event) => {
    setState(event.target.value);
  };

  const handleAddInput = () => {
    if (inputs.length < 5) {
      const newInput = { id: inputs.length + 1, value: '' };
      setInputs([...inputs, newInput]);
    } else {
      alert('You can only add up to 5 inputs.');
    }
  };

  const handleRemoveInput = (id) => {
    if (inputs.length > 1) {
      const updatedInputs = inputs.filter(input => input.id !== id);
      setInputs(updatedInputs);
    } else {
      alert('At least one input is required.');
    }
  };

  const handleChange = (event) => {
    setSelectedOption(parseInt(event.target.value, 10));
  };

  const handleAddArrearInput = () => {
    if (arrearInputs.length < 5) {
      const newInputArrear = { id: arrearInputs.length + 1, value: '' };
      setArrearInputs([...arrearInputs, newInputArrear]);
    } else {
      alert('You can only add up to 5 inputs.');
    }
  };

  const handleRemoveArrearInput = (id) => {
    if (arrearInputs.length > 1) {
      const updatedInputs = arrearInputs.filter(input => input.id !== id);
      setArrearInputs(updatedInputs);
    } else {
      toast.danger('At least one input is required.');
    }
  };

  const handleInputChange = (event, index) => {
    const newInputs = [...inputs];
    newInputs[index].value = event.target.value;
    setInputs(newInputs);
  };

  const handleArrearInputChange = (event, index) => {
    const newArrearInputs = [...arrearInputs];
    newArrearInputs[index].value = event.target.value;
    setArrearInputs(newArrearInputs);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleCheckboxChange1 = (event) => {
    setIsCheckedFamily(event.target.checked);
  };

  const handleChangeName = (e) => {
    setSelectedOption(parseInt(e.target.value, 10));
    const selectedEmployee = options.find(option => option.employee_id === parseInt(e.target.value, 10));
    if (selectedEmployee) {
      setEmpName(selectedEmployee.employee_name);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = localStorage.getItem("id");
        const response = await fetch(`${BASE_URL}/User/getemployeedetails/${id}/`);
        const jsonData = await response.json();
        setOptions(jsonData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    // toast.success('All Employee Data !!');
  }, []);

  const handleReset = () => {
    setSelectedOption('');
    setEmpName('');
    setEarnings('');
    setGarnishmentFees('');
    setOrderID('');
    setState('');
    setnumber_of_arrears('');
    // setminimum_wages('');
    setIsChecked(false);
    setIsCheckedFamily(false);
    setInputs([{ id: 1, value: '' }]);
    setCalculationResult('');
    setArrearInputs([{ id: 1, value: '' }]);
    setFederalIncmoeTax();
    setSocialTax();
    setMedicareTax();
    setStateTax();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const filledInputs = [...inputs];
    const filledArrears = [...arrearInputs];
  
    while (filledInputs.length < 5) {
      filledInputs.push({ id: filledInputs.length + 1, value: '0' });
    }
  
    while (filledArrears.length < 5) {
      filledArrears.push({ id: filledArrears.length + 1, value: '0' });
    }
  
    // Convert string inputs to numbers before sending to the backend
    const postData = {
      employer_id,
      employee_id,
      employee_name,
      earnings: parseFloat(earnings),  // Ensure it's a number
      garnishment_fees: parseFloat(garnishment_fees),
      order_id: parseInt(order_id, 10),
      state,
      number_of_arrears: parseInt(number_of_arrears, 10),
      amount_to_withhold_child1: parseFloat(filledInputs[0].value),
      amount_to_withhold_child2: parseFloat(filledInputs[1].value),
      amount_to_withhold_child3: parseFloat(filledInputs[2].value),
      amount_to_withhold_child4: parseFloat(filledInputs[3].value),
      amount_to_withhold_child5: parseFloat(filledInputs[4].value),
      arrears_greater_than_12_weeks,
      support_second_family,
      arrears_amt_Child1: parseFloat(filledArrears[0].value),
      arrears_amt_Child2: parseFloat(filledArrears[1].value),
      arrears_amt_Child3: parseFloat(filledArrears[2].value),
      arrears_amt_Child4: parseFloat(filledArrears[3].value),
      arrears_amt_Child5: parseFloat(filledArrears[4].value),
      federal_income_tax: parseFloat(federal_income_tax),
      social_tax: parseFloat(social_tax),
      medicare_tax: parseFloat(medicare_tax),
      state_tax: parseFloat(state_tax),
    };

    try {
        const postResponse = await fetch(`${BASE_URL}/User/CalculationDataView`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });

        const postResult = await postResponse.json();
        if (postResponse.ok) {
            // toast.success('Calculation Added Successfully !!');

            const getResult = await fetch(`${BASE_URL}/User/Gcalculations/${employer_id}/${employee_id}/`);
            const resultData = await getResult.json();
            if (getResult.ok) {
              console.log(resultData);
           
                setCalculationResult(resultData.data[3].result);
                // setCalculationNetpay(resultData.data[0].net_pay);
                console.log(calculationResult);
              // console.log(calculationNetpay); // Set result in state
            } else {
                throw new Error(`Failed to fetch results: ${resultData.message}`);
            }

            handleReset();
        } else {
            throw new Error(`Failed to submit data: ${postResult.message}`);
        }
    } catch (error) {
        console.error('Error:', error.message);
        // toast.error(`Error: ${error.message}`);
    }
  };


return (
  <>
    <div className="min-h-full">
      <div className="container">
        <div className="">
          <div className="p-0">
            <form onSubmit={handleSubmit}>
              <div className="shadow appearance-none border p-2 pb-4 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y-reverse sm:mx-auto sm:w-full gap-4 mb-2">
                <div>
                  <label htmlFor="empID" className="block text-gray-700 text-sm font-bold mb-3">
                    Employee ID:
                  </label>
                  <select
                    value={employee_id}
                    noOptionsMessage={() => 'FOOOO!'}
                    onChange={handleChangeName}
                    id="countries"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 focus:shadow-outline dark:text-black dark:focus:ring-white-500 dark:focus:border-white-500"
                    required
                  >
                    <option value="">Choose Employee</option>
                    {options.map((option) => (
                      <option key={option.employee_id} value={parseInt(option.employee_id, 10)}>
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
                    className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                    placeholder='Enter Earning'
                    className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={earnings}
                    onChange={(e) => setEarnings(parseFloat(e.target.value, 10))}
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
                    placeholder='Enter Fees'
                    className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={garnishment_fees}
                    onChange={(e) => setGarnishmentFees(parseFloat(e.target.value, 10))}
                  />
                </div>
                <div>
                  <label htmlFor="orderID" className="block text-gray-700 text-sm font-bold mb-2">
                    Order ID:
                  </label>
                  <input
                    type="number"
                    id="orderID"
                     placeholder='Enter Order Id'
                    className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={order_id}
                    onChange={(e) => setOrderID(parseInt(e.target.value, 10))}
                  />
                </div>


                <div>
                  <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">
                    State:
                  </label>
                  <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 focus:shadow-outline dark:text-black dark:focus:ring-white-500 dark:focus:border-white-500" id="selectField" value={state} onChange={handleState}>
                      <option value="" >Choose an State </option>
                      {StateList.map((option) => (
                        <option key={option.id} value={option.label}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                </div>

              
                <div>
                  <label htmlFor="number_of_arrears" className="block text-gray-700 text-sm font-bold mb-2">
                    Number of Arrears:
                  </label>
                  <input
                    type="number"
                    id="number_of_arrears"
                    placeholder='Enter Number of Arrears'
                    className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={number_of_arrears}
                    onChange={(e) => setnumber_of_arrears(parseInt(e.target.value, 10))}
                  />
                </div>
                </div>
            <div className="row-span-3 w-full flex items-center mt-4 mb-4">
                    <input id="showFieldCheckboxFamily" checked={support_second_family} onChange={handleCheckboxChange1} type="checkbox" className="mr-2" />
                    <label htmlFor="showFieldCheckboxFamily" className="block text-gray-700 text-sm font-bold mb-2">
                      Support Second Family
                    </label>
            </div>
          
            <div className="w-full flex items-center mb-4">
                    <input id="showFieldCheckbox" checked={arrears_greater_than_12_weeks} onChange={handleCheckboxChange} type="checkbox" className="mr-2" />
                    <label htmlFor="showFieldCheckbox" className="block text-gray-700 text-sm font-bold mb-2">
                      Arrears Greater Than 12 Weeks
                    </label>
            </div>
           
            {arrears_greater_than_12_weeks && (
              <>
                <button
                  type="button"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={handleAddArrearInput} >
                  Add Arrears Amount
                </button>
                <div className="shadow appearance-none border mt-4 p-2 pb-4 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y-reverse sm:mx-auto sm:w-full gap-4 mb-2">
                {arrearInputs.map((input, index) => (
                 
                  <div key={input.id} className="mt-4">
                     <div className='flex items-center'>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Arrears Amount {index + 1}:</label>
                    <button type="button" className="text-sm text-red ml-10 mb-2" onClick={() => handleRemoveArrearInput(input.id)}>
                <FaTrashAlt style={style} />
             </button>
</div>
                    <input
                      type="number"
                      value={input.value}
                      onChange={(event) => handleArrearInputChange(event, index)}
                      className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                ))}
                </div>
              </>
            )}
            
            <div className="flex items-center mt-4 mb-4">
              <button
                type="button"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleAddInput}
              >
                Add Child Withhold Amount
              </button>
            </div>
            <div className="shadow appearance-none border p-2 pb-4 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y-reverse sm:mx-auto sm:w-full gap-4 mb-2">
            {inputs.map((input, index) => (
              <div key={input.id} className="mb-4 ">
                        <div className='flex items-center'>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Withhold Amount {index + 1}:</label>
                        <button type="button" className="text-sm text-red ml-10 mb-2" onClick={() => handleRemoveInput(input.id)}>
                        <FaTrashAlt style={style} />
                    </button>
                    </div>
                <input
                  type="number"
                  placeholder='Enter amount'
                  value={input.value}
                  onChange={(event) => handleInputChange(event, index)}
                  className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              
              {/* TUESDAY */}
                  </div>
                   ))}
              
             </div>
             <div className="mt-6 shadow appearance-none border p-2 pb-4 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y-reverse sm:mx-auto sm:w-full gap-4 mb-2">
                  <div>
                      <label htmlFor="federal_income_tax" className="block text-gray-700 text-sm font-bold mb-2">
                        Federal Income Tax:
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        placeholder='Enter Federal Income Tax'
                        id="federal_income_tax"
                        className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={federal_income_tax}
                        onChange={(e) => setFederalIncmoeTax(parseFloat(e.target.value))}
                      />
                  </div>
                  {/* SOCIAL&SECURITY_TAX */}
                  <div>
                      <label htmlFor="social_tax" className="block text-gray-700 text-sm font-bold mb-2">
                        Social Security Tax:
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        id="social_tax"
                         placeholder='Enter Social Security Tax'
                        className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={social_tax}
                        onChange={(e) => setSocialTax(parseFloat(e.target.value))}
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
                       placeholder='Enter Medicare Tax'
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
                       placeholder='Enter State Tax'
                        className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={state_tax}
                        onChange={(e) => setStateTax(parseFloat(e.target.value))}
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
            </form>
            {calculationResult && (
                <div className="result-section mt-4">
                  <h2>Calculation Result:</h2>
                  <p>{calculationResult}</p>
                
                </div>
              )}
          </div>
<hr className="mt-6"></hr>

{/* <ToastContainer /> */}
        </div>
      </div>
    </div>
  </>
);
}

export default MultipleChild;