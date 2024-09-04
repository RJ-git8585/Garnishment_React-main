/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../Config';

function MultipleChild() {
  const [employee_name, setEmpName] = useState('');
  const [earnings, setEarnings] = useState('');
  const [garnishment_fees, setGarnishmentFees] = useState('');
  const [order_id, setOrderID] = useState('');
  const [state, setState] = useState('');
  const [number_of_arrears, setnumber_of_arrears] = useState('');
  const [minimum_wages, setminimum_wages] = useState('');
  const [selectedType, setSelectedType] = useState('MultipleChild');
  const [arrears_greater_than_12_weeks, setIsChecked] = useState(false);
  const [support_second_family, setIsCheckedFamily] = useState(false);
  const [employee_id, setEmployerId] = useState(2);
  const [inputs, setInputs] = useState([{ id: 1, value: '' }]);
  const [arrearInputs, setArrearInputs] = useState([{ id: 1, value: '' }]);
  const employer_id = parseInt(localStorage.getItem("id"));

  const handleAddInput = () => {
    const newInput = { id: inputs.length + 1, value: '' };
    setInputs([...inputs, newInput]);
  };

  const handleAddArrearInput = () => {
    const newInputArrear = { id: arrearInputs.length + 1, value: '' };
    setArrearInputs([...arrearInputs, newInputArrear]);
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

  const handleReset = () => {
    setEmpName('');
    setEarnings('');
    setGarnishmentFees('');
    setOrderID('');
    setState('');
    setEmployerId(2);
    setnumber_of_arrears('');
    setminimum_wages('');
    setIsChecked(false);
    setIsCheckedFamily(false);
    setInputs([{ id: 1, value: '' }]);
    setArrearInputs([{ id: 1, value: '' }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const filledInputs = [...inputs];
    const filledArrears = [...arrearInputs];

    // Fill remaining inputs with 0 if fewer than 5 entries
    while (filledInputs.length < 5) {
      filledInputs.push({ id: filledInputs.length + 1, value: '0' });
    }
    
    while (filledArrears.length < 5) {
      filledArrears.push({ id: filledArrears.length + 1, value: '0' });
    }

    const data = {
        employer_id,
        employee_id,
        employee_name,
        earnings,
        garnishment_fees,
        order_id,
        state,
        minimum_wages,
        number_of_arrears,
        amount_to_withhold_child1: filledInputs[0].value,
        amount_to_withhold_child2: filledInputs[1].value,
        amount_to_withhold_child3: filledInputs[2].value,
        amount_to_withhold_child4: filledInputs[3].value,
        amount_to_withhold_child5: filledInputs[4].value,
        arrears_greater_than_12_weeks,
        support_second_family,
        // arrears_amt_Child1: filledArrears[0].value,
        // arrears_amt_child2: filledArrears[1].value,
        // arrears_amt_child3: filledArrears[2].value,
        // arrears_amt_child4: filledArrears[3].value,
        // arrears_amt_child5: filledArrears[4].value,
    };

    fetch(`${BASE_URL}/User/CalculationDataView`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((responseData) => {
        if (responseData.error) {
            console.error('Error submitting data:', responseData.error);
            toast.error(`Failed to submit data: ${responseData.error}`);
        } else {
            console.log('Data submitted successfully!');
            toast.success('Calculation Added Successfully !!');
            handleReset();
        }
    })
    .catch((error) => {
        console.error('Network or server error:', error);
        toast.error('Network or server error!');
    });
};
return (
  <>
    <div className="min-h-full">
      <div className="container">
        <div className="content">
          <div className="p-0">
            <form onSubmit={handleSubmit}>
              <div className="shadow appearance-none border p-2 pb-4 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline grid grid-cols-4 md:grid-cols-4 divide-y-reverse sm:mx-auto sm:w-full gap-4 mb-2">
                <div>
                  <label htmlFor="empID" className="block text-gray-700 text-sm font-bold mb-3">
                    Employee ID:
                  </label>
                  <input
                    type="number"
                    id="empID"
                    value={employee_id}
                    onChange={(e) => setEmployerId(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 />
                </div>
                <div>
                  <label htmlFor="empName" className="block text-gray-700 text-sm font-bold mb-2">
                    Employee Name:
                  </label>
                  <input
                    type="text"
                    id="empName"
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
                    id="earning"
                    className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={earnings}
                    onChange={(e) => setEarnings(parseInt(e.target.value, 10))}
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
                    onChange={(e) => setGarnishmentFees(parseInt(e.target.value, 10))}
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
                    onChange={(e) => setOrderID(parseInt(e.target.value, 10))}
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
                <div>
                  <label htmlFor="number_of_arrears" className="block text-gray-700 text-sm font-bold mb-2">
                    Number of Arrears:
                  </label>
                  <input
                    type="number"
                    id="number_of_arrears"
                    className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={number_of_arrears}
                    onChange={(e) => setnumber_of_arrears(parseInt(e.target.value, 10))}
                  />
                </div>
                <div>
                  <label htmlFor="orderID" className="block text-gray-700 text-sm font-bold mb-2">
                    Minimum Wedge:
                  </label>
                  <input
                    type="number"
                    id="Minimum Wedge"
                    className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={order_id}
                    onChange={(e) => setminimum_wages(parseInt(e.target.value))}
                  />
                </div>
              </div>

              <div className="flex items-center mt-4 mb-4">
                <input id="showFieldCheckboxFamily" checked={support_second_family} onChange={handleCheckboxChange1} type="checkbox" className="mr-2" />
                <label htmlFor="showFieldCheckboxFamily" className="block text-gray-700 text-sm font-bold mb-2">
                  Support Second Family
                </label>
              </div>
              <div className="flex items-center mb-4">
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
                    onClick={handleAddArrearInput}
                  >
                    Add Arrears Amount
                  </button>
                  {arrearInputs.map((input, index) => (
                    <div key={input.id} className="mt-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">Arrears Amount {index + 1}:</label>
                      <input
                        type="number"
                        value={input.value}
                        onChange={(event) => handleArrearInputChange(event, index)}
                        className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                  ))}
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
              {inputs.map((input, index) => (
                <div key={input.id} className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Withhold Amount {index + 1}:</label>
                  <input
                    type="number"
                    value={input.value}
                    onChange={(event) => handleInputChange(event, index)}
                    className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              ))}

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
);
}

export default MultipleChild;