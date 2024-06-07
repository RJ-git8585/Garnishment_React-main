// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function DeleteItemComponent({id, onDeleteSuccess, onDeleteError }) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

  const handleDelete = async () => {
    // setIsLoading(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();

    try {
      const response = await axios.delete(`https://garnishment-backend.onrender.com/User/EmployeeDeleteAPIView/${id}`);

      if (response.status === 200 || response.status === 204) { // Handle successful deletion
        // console.log('Item deleted successfully!');
        toast.danger('Item deleted successfully!!!');
        onDeleteSuccess && onDeleteSuccess(id); 
        navigate('/employee');
       // Optional callback for success
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
      
        <button onClick={handleDelete} className="py-2 px-3 text-sm bg-red-300 text-white font-semibold  shadow-md hover:bg-red-800 focus:outline-none focus:ring focus:ring-red-800 focus:ring-opacity-75">Delete</button>
      <ToastContainer/>
    </div>
  );
}

export default DeleteItemComponent;
