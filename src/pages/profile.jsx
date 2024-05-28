// import React from 'react'
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'
import Sidebar from '../component/sidebar'
import Headertop from '../component/Headertop'
import ProfileHeader from '../component/ProfileHeader'



function Profile() {

  // const [data, setData] = useState({}) // Change initial state to an empty object
  // const navigate = useNavigate();  
  // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [email, setEmail] = useState();
  // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [password, setPassword] = useState();
  // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [errorMessage, setErrorMessage] = useState(); 
  
  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/users/1').then((res) => {
  //     setData(res.data)
  //   })
  // }, [])



  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  // };
  return (
    <div>
         <header className="bg-white bg-gray-800 shadow">
         
            <Headertop />
      
        </header>
        <div className="container main ml-auto mt-6">
        <div className='sidebar'><Sidebar/></div>
        <div className="contant content ml-auto mt-6">
        <ProfileHeader/>
          <hr />
                      
    </div>
    </div>
    </div>
  )
}

export default Profile
