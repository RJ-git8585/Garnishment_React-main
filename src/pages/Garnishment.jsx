/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React, { useState,useEffect } from 'react';
import Headertop from '../component/Headertop';
import Sidebar from '../component/sidebar';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaBalanceScaleRight } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars

import MultipleChild from '../forms/MultipleChild';
import StudentLoan from '../forms/StudentLoan';
import { BASE_URL } from '../Config';
import MultipleStudentLoan from '../forms/MultipleStudentLoan';
import FederalTax from '../forms/FederalTax';

function Garnishment( ) {
  // /Users/sourabhkosti/Desktop/code/Ritik/Garnishment_React-main/src/pages/forms 

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
  // const [minimum_wages, setMinimumWages] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [amount_to_withhold, setTotalAmount] = useState('');
  // const [social, setSocial] = useState('');
  // const [fit, setFit] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [selectedType, setSelectedType] = useState('MultipleChild');
  // const [medicare, setMedicare] = useState('');
  const [arrears_amt, setArrears] = useState('');
  // const [statetax, setStateTax] = useState('');

  // const [showNewField, setShowNewField] = useState(false);
  // const [hideNewField, setHideNewField] = useState(false);
  // const [ShowStudentNewField, setShowStudentNewField] = useState(false);
  // const [hideStudentNewField, setHideStudentNewField] = useState(false);
  // // const [ShowFederalNewField, setShowFederalNewField] = useState(false);
  // const [hideFederalNewField, setHideFederalNewField] = useState(false);




  // const [state, setState] = useState('');
  const [arrears_greater_than_12_weeks, setIsChecked] = useState(false);
  const [support_second_family, setIsCheckedFamily] = useState(false); // Initialize checkbox state as unchecked
  // const [selectedValue, setSelectedValue] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [options, setOptions] = useState([]);
  const [employee_id, setSelectedOption] = useState(null);
  // const [data, setData] = useState(null);
   
  const employer_id = (parseInt(localStorage.getItem("id")));
  // const [empID, setEmpID] = useState(options[0].value);


  // const handleChange = (event) => {
  //   setSelectedOption((parseInt(event.target.value,10)));
    
    
  // };

  // const [inputs, setInputs] = useState([{ id: 1 }]);

  // const handleAddInput = () => {
  //   const newInput = { id: inputs.length + 1 };
  //   setInputs([...inputs, newInput]);
  //   console.log(newInput);
  // };

  // const [Arrearinputs, setArrearInputs] = useState([{ id: 1 }]);

  // const  handleAddArrearInput= () => {
  //   const newInputArrear = { idArrear: Arrearinputs.length + 1 };
  //   setArrearInputs([...Arrearinputs, newInputArrear]);
  //   console.log(newInputArrear);
  // };

//   const handleInputChange
//  = (event, index) => {
//     const newInputs = [...inputs];
//     newInputs[index].value = event.target.value;
//     setInputs(newInputs);
//   };


  const handleChangeType = (event) => {
    const selectedOption = event.target.value;
    setSelectedType(selectedOption);
    // setShowNewField(event.target.value === 'MultipleChild');
    // setHideNewField(event.target.value === 'MultipleChild'); 
    // setShowStudentNewField(event.target.value === 'StudentLoan');
    // setHideStudentNewField(event.target.value === 'StudentLoan'); 
    // // setShowFederalNewField(event.target.value === 'FederalTax');
    // setHideFederalNewField(event.target.value === 'FederalTax'); 
    console.log('Selected value:', selectedOption);
  };

  // eslint-disable-next-line no-unused-vars
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked); 
    
  };
  // const handleCheckboxChange1 = (event) => {
  //   setIsCheckedFamily(event.target.checked); // Update s
  // }


  

//   useEffect(() => {
//    // const name = localStorage.getItem("name");
//    const fetchData = async () => {
//     try {
//       const id = localStorage.getItem("id");
//       const response = await fetch(`${BASE_URL}/User/getemployeedetails/${id}/`);
//       // Replace with your API URL
//       const jsonData = await response.json(options);
//       setOptions(jsonData.data);
//       console.log(jsonData.data)
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       // Handle errors appropriately (display error message, etc.)
//     }
//   };

//   fetchData(); // Call the function
//   toast.success('All Employee Data !!');
// },)

   // const name = localStorage.getItem("name");
   const fetchData = async () => {
    try {
      const id = localStorage.getItem("id");
      const response = await fetch(`${BASE_URL}/User/getemployeedetails/${id}/`);
      // Replace with your API URL
      const jsonData = await response.json();
      setOptions(jsonData.data);
      console.log(jsonData.data)
    } catch (error) {
      console.error('Error fetching data:', error);
      }
  };
  useEffect(() => {
    fetchData();
  }, []); 
 


  const handleReset = () => {
    setSelectedOption('');
    setEmpName('');
    setEarnings('');
    // setTaxes('');
    setGarnishmentFees('');
    setOrderID('');
    setState('');
    // setSocial('');
    // setFit('');
    // setMedicare('');
    // setIsChecked('');
    // setIsCheckedFamily('');
    // setStateTax('');
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
      // minimum_wages,
      // amount_to_withhold,
      // social,
      // fit,
      // medicare,
      arrears_greater_than_12_weeks,
      support_second_family,
      // statetax,
      arrears_amt,
    };
    console.log(data)
    fetch(`${BASE_URL}/User/CalculationDataView`, {
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
          // setSocial('');
          // setFit('');
          // setMedicare('');
          setIsChecked('');
          setIsCheckedFamily('');
          // setStateTax('');
          setArrears('');
        } else {
          // Handle submission errors
          console.error('Error submitting data:', response.statusText);
        }
      });
      // console.log(options)
  };
 


  return (
    <>
      <div className="min-h-full">
        <div className="container main ml-auto">
          <div className="sidebar">
            <Sidebar />
          </div>
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
                            // autoComplete="employee_name"
                            // onChange={(e) => setEid(e.target.value)}
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
                {/* <option  value="SingleChild">Single Child</option> */}
                <option value="MultipleChild">Child Support</option>
                <option value="StudentLoan">Student loan</option>
                <option value="MultiStudentLoan">Multiple Student loan</option>
                <option value="FederalTax">Federal Tax</option>
                <option value="StateTax">State Tax</option>
                <option value="Creditor">Creditor</option>
                <option value="Bankruptcy">Bankruptcy</option>
              </select>  
          </div>
         
                  {selectedType === 'MultipleChild' && (
                      <div>
                    
                        <MultipleChild></MultipleChild>
                        {/* Content for Section 1 */}
                      </div>
                    )}

                   
                    {selectedType === 'StudentLoan' && (
                      <div>
                        <StudentLoan></StudentLoan>
                      </div>
                    )}
                     {selectedType === 'MultiStudentLoan' && (
                      <div>
                     <MultipleStudentLoan></MultipleStudentLoan>
                      </div>
                    )}
                     {selectedType === 'FederalTax' && (
                      <div>
                        <FederalTax></FederalTax>
                        {/* Content for Section 3 */}
                      </div>
                    )}
                    {selectedType === 'StateTax' && (
                      <div>
                       <h1>StateTax Calculation Coming Soon</h1>
                        {/* Content for Section 3 */}
                      </div>
                    )}
                    {selectedType === 'Creditor' && (
                      <div>
                      <h1>Creditor Calculation Coming Soon</h1>
                        {/* Content for Section 3 */}
                      </div>
                    )}  
                    

                    {selectedType === 'Bankruptcy' && (
                      <div>
                        <h1>Bankruptcy Calculation Coming Soon</h1>
                        {/* Content for Section 3 */}
                      </div>
                    )}
              </form>
              
            </div>
          </div>
        </div> 
      </div>
    </>
  );
}

export default Garnishment;
