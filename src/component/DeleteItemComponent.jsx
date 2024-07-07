// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line react/prop-types
function DeleteItemComponent({id, onDeleteSuccess, onDeleteError }) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
// confirm('this is deleted')
  const handleDelete = async () => {
  
    try {
      const response = await axios.delete(`https://garnishment-backend.onrender.com/User/EmployeeDeleteAPIView/${id}`);

      if (response.status === 200 || response.status === 204) { // Handle successful deletion
        // console.log('Item deleted successfully!');
        toast.danger('Item deleted successfully!!!');
        onDeleteSuccess && onDeleteSuccess(id); 
       
      } else {
        throw new Error('Unexpected API response status'); // Handle unexpected errors
      }
    } catch (error) {   
      console.error('Error deleting item:', error);
    //   setError(error.message || 'An error occurred.');
      onDeleteError && onDeleteError(error); // Optional callback for error handling
    } finally {
    //   setIsLoading(false);
    }
  };

  return (
    <div>
      
        <button onClick={handleDelete} className="py-2 button-cls text-sm  text-blue font-semibold  ">Delete</button>
      <ToastContainer/>
    </div>
  );
}

export default DeleteItemComponent;
