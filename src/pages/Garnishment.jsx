// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Headertop from '../component/Headertop';
import Sidebar from '../component/sidebar';
// import MultiStep from 'react-multistep'

// eslint-disable-next-line react/prop-types
function Garnishment( ) {
  // console.log({data})sa
  // // const [data, setData] = useState(null);
  // if (!data) return null;

  // // eslint-disable-next-line react/prop-types
  // const options = data.map(item => ({ value: item.id, label: item.name }));

 
  // eslint-disable-next-line react-hooks/rules-of-hooks, no-unused-vars
  const [empID, setEmpID] = useState(''); 
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [empName, setEmpName] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [earning, setEarning] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [taxes, setTaxes] = useState();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [garnishmentFees, setGarnishmentFees] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [orderID, setOrderID] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, setState] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [minimumWages, setMinimumWages] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [totalAmount, setTotalAmount] = useState('');
  const [social, setSocial] = useState('');
  const [fit, setFit] = useState('');
  const [medicare, setMedicare] = useState('');
  // const [state, setState] = useState('');


  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [selectedValue, setSelectedValue] = useState(null);
  const handleReset = () => {
    setEmpID('');
    setEmpName('');
    setEarning('');
    setTaxes('');
    setGarnishmentFees('');
    setOrderID('');
    setState('');
    setSocial('');
    setFit('');
    setMedicare('');
};
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', {
      empID,
      empName,
      earning,
      taxes,
      garnishmentFees,
      orderID,
      state,
      minimumWages,
      totalAmount,
      social,
      fit,
      medicare
    });
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
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">Garnishment Form</h2>
              <form onSubmit={handleSubmit}>
              {/* <MultiStep activeStep={2} > */}
                <div className="shadow appearance-none border p-2 pb-4 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline grid grid-cols-4 md:grid-cols-4 divide-y-reverse sm:mx-auto sm:w-full gap-4 mb-2">
                  <div>
                    <label htmlFor="empID" className="block text-gray-700 text-sm font-bold mb-3">
                      Employee ID:
                    </label>
                    <select id="countries" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 focus:shadow-outline dark:text-black dark:focus:ring-white-500 dark:focus:border-white-500" required>
                      <option selected>Choose a Employee</option>
                      <option value="0001">0001</option>
                      <option value="0002">0002</option>
                      <option value="0003">0003</option>
                      <option value="0004">0004</option>
                      <option value="0005">0005</option>
                      <option value="0006">0006</option>
                      <option value="0007">0007</option>
                      <option value="0008">0008</option>
                      <option value="0003">0009</option>
                      <option value="0004">0010</option>
                      <option value="0005">0011</option>
                      <option value="0006">0012</option>
                      <option value="0007">0013</option>
                      <option value="0008">0014</option>
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
                      value={empName}
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
                      value={earning}
                      onChange={(e) => setEarning(e.target.value)}
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
                      value={garnishmentFees}
                      onChange={(e) => setGarnishmentFees(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="orderID" className="block text-gray-700 text-sm font-bold mb-2">
                      Order ID:
                    </label>
                    <input
                      type="text"
                      id="orderID"
                      className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={orderID}
                      onChange={(e) => setOrderID(e.target.value)}
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
                    <label htmlFor="minimumWages" className="block text-gray-700 text-sm font-bold mb-2">
                      Minimum Wages:
                    </label>
                    <input
                      type="number"
                      id="minimumWages"
                      className="shadow appearance-none border rounded w-full py-2 text-sm px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={minimumWages}
                      onChange={(e) => setMinimumWages(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="totalAmount" className="block text-gray-700 text-sm font-bold mb-2">
                      Total Amount:
                    </label>
                    <input
                      type="number"
                      id="totalAmount"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={totalAmount}
                      onChange={(e) => setTotalAmount(e.target.value)}
                    />
                  </div>
                  </div>
                  
                    <span className="text-sm mb-4 text-2xl font-bold  text-gray-700">Taxes Details </span>  

                    <div className="flex items-center mt-4 mb-4">
                    <input id="default-checkbox" type="checkbox" onChange={(e) => setTaxes(e.target.value)} value={taxes} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label  className="ms-2 text-sm font-medium  dark:text-gray-800">Support Second Family</label>
                </div>
                <div className="flex items-center mb-6">
                    <input  id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label  className="ms-2 text-sm font-medium  dark:text-gray-800">Garnishment Arrears more than 12 months</label>
                </div>

                  <div className="shadow appearance-none border p-2 pb-4 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline grid grid-cols-4 md:grid-cols-4 divide-y-reverse sm:mx-auto sm:w-full gap-4 mt-2">
                          <div>
                                  <label htmlFor="taxes" className="block text-gray-700 text-sm font-bold mb-2">
                                    Federal Income Tax:
                                  </label>
                                  <input
                                    type="text"
                                    id="fit"
                                    className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={fit}
                                    onChange={(e) => setFit(e.target.value)}
                                  />
                            </div>
                            <div>
                                <label htmlFor="taxes" className="block text-gray-700 text-sm font-bold mb-2">
                                    Social Security Tax:
                                  </label>
                                <input
                                    type="text"
                                    id="social"
                                    className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={social}
                                    onChange={(e) => setSocial(e.target.value)}
                                  />
                            </div>
                            <div>
                                <label htmlFor="taxes" className="block text-gray-700 text-sm font-bold mb-2">
                                    Medicare Tax:
                                  </label>
                                <input
                                    type="text"
                                    id="medicare"
                                    className="shadow appearance-none border rounded text-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={medicare}
                                    onChange={(e) => setMedicare(e.target.value)}
                                  />
                            </div>
                            <div>
                                <label htmlFor="taxes" className="block text-gray-700 text-sm font-bold mb-2">
                                    State Tax:
                                  </label>
                                <input
                                    type="text"
                                    id="state"
                                    className="shadow appearance-none border rounded text-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                  />
                            </div>
                 
                </div>
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
