// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../Config';

// import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function DeleteItemComponent({id, onDeleteSuccess, onDeleteError }) {
//   const [isLoading, setIsLoading] = useState(false);
// const navigate = useNavigate();

//   const [error, setError] = useState(null);
// confirm('this is deleted') 
  const handleDelete = async () => {
    const employerid = localStorage.getItem("id");
    // const { swal, ...rest } = props;

    confirm('Are you sure you want to edit this item?');
    try {
      const response = await axios.delete(`${BASE_URL}/User/EmployeeDelete/${id}/${employerid}`);

      if (response.status === 200 || response.status === 204) { // Handle successful deletion
        console.log('Item deleted successfully!');
       
        onDeleteSuccess && onDeleteSuccess(id); 
        // console.log("from if")
       
      } else {
        throw new Error('Unexpected API response status'); 
        // eslint-disable-next-line no-unreachable
        
      }
    } catch (error) {   
      console.error('Error deleting item:', error);
      toast.warning('Item deleted successfully!!! Error From catch');
      
    //   setError(error.message || 'An error occurred.');
      onDeleteError && onDeleteError(error); // Optional callback for error handling
    } finally {
    //   setIsLoading(false);
    toast.warning('Item deleted successfully!!!');
    }
    // const navigate = useNavigate();
    // navigate('/employee', { replace: true });
  };

  return (
    <div>
      
        <button onClick={handleDelete} className="py-2 button-cls text-sm  text-blue font-semibold  ">Delete</button>
    
    </div>
  );
}

export default DeleteItemComponent;
