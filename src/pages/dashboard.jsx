// eslint-disable-next-line no-unused-vars
import React from 'react'
import Sidebar from '../component/sidebar'

import Headertop from '../component/Headertop'


function dashboard() {
  return (
    
   
      <div className="min-h-full">
        <Headertop />
        <div className="container main ml-auto mt-6">
        <div className='sidebar'><Sidebar/></div>
        
        <div className=' contant content ml-auto mt-6 '>
        <h1 className='edit-profile'> Dashboard</h1>
          
        </div>
      </div>
      </div>
    
  )
}

export default dashboard