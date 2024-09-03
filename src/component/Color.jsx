// eslint-disable-next-line no-unused-vars
import  { React ,useState } from 'react';

function ConditionalText() {
  const [isChecked, setIsChecked] = useState(false); // Initial checkbox state

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };



  
  return (
    <div>
      <input
        type="checkbox"
        id="myCheck"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="myCheck">Show Text</label>
      {isChecked && ( // Conditionally render the text
        <p id="text">This is the text that will be shown when the checkbox is checked.</p>
      )}
    </div>
  );
}

export default ConditionalText;