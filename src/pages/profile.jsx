// import React from 'react'
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'
import Sidebar from '../component/sidebar'
import Headertop from '../component/Headertop'
import ProfileHeader from '../component/ProfileHeader'



function Profile() {


  return (
    <div>
         <header className="bg-white bg-gray-800 shadow">
         
           
      
        </header>
        <div className="container main ml-auto mt-6">
        <div className='sidebar'><Sidebar/></div>
        <div className="contant content ml-auto mt-6">
        <Headertop />
        <ProfileHeader/>
          <hr />
                      
    </div>
    </div>
    </div>
  )
}

export default Profile
