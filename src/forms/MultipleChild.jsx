import  { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../Config';

function MultipleChild() {
  const [employee_name, setEmpName] = useState('');
  const [earnings, setEarnings] = useState('');
  const [garnishment_fees, setGarnishmentFees] = useState('');
  const [order_id, setOrderID] = useState('');
  const [state, setState] = useState('');
  const [number_of_arrears, setNumberOfArrears] = useState('');
  const [minimum_wages, setMinimumWages] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [selectedType, setSelectedType] = useState('MultipleChild');
  const [arrears_amt_child1, setArrearschild] = useState('');
  const [amount_to_withhold_child1, setAmountToWithholdChild1] = useState('');
  const [arrears_greater_than_12_weeks, setIsChecked] = useState(false);
  const [support_second_family, setIsCheckedFamily] = useState(false);
  const [employee_id, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([]);
  
  const employer_id = parseInt(localStorage.getItem("id"));

  const handleChange = (event) => {
    setSelectedOption(parseInt(event.target.value, 10));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = localStorage.getItem("id");
        const response = await fetch(`${BASE_URL}/User/getemployeedetails/${id}/`);
        const jsonData = await response.json();
        setOptions(jsonData.data);
        toast.success('All Employee Data Loaded!');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleReset = () => {
    setSelectedOption('');
    setEmpName('');
    setEarnings('');
    setAmountToWithholdChild1('');
    setGarnishmentFees('');
    setOrderID('');
    setState('');
    setNumberOfArrears('');
    setMinimumWages('');
    setIsChecked(false);
    setIsCheckedFamily(false);
    setArrearschild('');
  };

  const handleSubmit = (event) => {
    alert('Data Successfully Submitted')
    console
    event.preventDefault();
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
      amount_to_withhold_child1,
      arrears_greater_than_12_weeks,
      support_second_family,
      arrears_amt_child1,
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
          toast.success('Calculation Added Successfully!');
          handleReset();
        } else {
          console.error('Error submitting data:', response.statusText);
        }
      });
  };

//ritik loda
  
  return (
    <>
      <div className="min-h-full">
        <div className="container">
          <div className="content">
            <form onSubmit={handleSubmit}>
              <div className="shadow appearance-none border p-2 pb-4 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline grid grid-cols-4 md:grid-cols-4 divide-y-reverse sm:mx-auto sm:w-full gap-4 mb-2">
                <div>
                  <label htmlFor="empID" className="block text-gray-700 text-sm font-bold mb-3">
                    Employee ID:
                  </label>
                  <select value={employee_id} onChange={handleChange} id="countries" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 focus:shadow-outline dark:text-black dark:focus:ring-white-500 dark:focus:border-white-500" required>
                    <option value="">Select Employee</option>
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
                    Number of Arrears (%):
                  </label>
                  <input
                    type="number"
                    id="NumberOfArrers"
                    className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={number_of_arrears}
                    onChange={(e) => setNumberOfArrears(parseInt(e.target.value, 10))}
                  />
                </div>
              </div>

              <div className="flex items-center mt-4 mb-4">
                <input id="showFieldCheckboxFamily" checked={support_second_family} onChange={(e) => setIsCheckedFamily(e.target.checked)} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label className="ms-2 text-sm font-medium dark:text-gray-800">Support Second Family</label>
              </div>

              <div className="flex items-center mt-4 mb-6">
                <input id="showFieldCheckbox" checked={arrears_greater_than_12_weeks} onChange={(e) => setIsChecked(e.target.checked)} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label className="ms-2 text-sm font-medium dark:text-gray-800">Arrears Greater Than 12 Weeks</label>
              </div>

              <div className="mb-4 grid grid-cols-4 md:grid-cols-4 divide-y-reverse sm:mx-auto sm:w-full gap-4">
                <div>
                  <label htmlFor="minimumWages" className="block text-gray-700 text-sm font-bold mb-2">
                    Minimum Wages (%):
                  </label>
                  <input
                    type="number"
                    id="minimumWages"
                    className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={minimum_wages}
                    onChange={(e) => setMinimumWages(parseInt(e.target.value, 10))}
                  />
                </div>
                <div>
                  <label htmlFor="arrears_amt_child1" className="block text-gray-700 text-sm font-bold mb-2">
                    Arrears Amount (Child 1):
                  </label>
                  <input
                    type="number"
                    id="arrears_amt_child1"
                    className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={arrears_amt_child1}
                    onChange={(e) => setArrearschild(parseInt(e.target.value, 10))}
                  />
                </div>
                <div>
                  <label htmlFor="amount_to_withhold_child1" className="block text-gray-700 text-sm font-bold mb-2">
                    Amount to Withhold (Child 1):
                  </label>
                  <input
                    type="number"
                    id="amount_to_withhold_child1"
                    className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={amount_to_withhold_child1}
                    onChange={(e) => setAmountToWithholdChild1(parseInt(e.target.value, 10))}
                  />
                </div>
              </div>

              <div className="grid grid-cols-4 md:grid-cols-4 sm:mx-auto sm:w-full gap-4">
                <button type="submit" onClick={handleSubmit} className="inline-block px-6 py-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md bg-gray-900 hover:bg-gray-800 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">
                  Calculate
                </button>
                <button type="reset" className="inline-block px-6 py-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md bg-red-900 hover:bg-red-800 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-900 active:shadow-lg transition duration-150 ease-in-out" onClick={handleReset}>
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default MultipleChild;
