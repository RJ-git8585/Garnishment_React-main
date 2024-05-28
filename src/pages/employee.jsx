// eslint-disable-next-line no-unused-vars
import React from 'react'
import Headertop from '../component/Headertop'
import ProfileHeader from '../component/ProfileHeader'
import Sidebar from '../component/sidebar'

function employee() {
  return (
    <div>


<div className="min-h-full">
        <Headertop />
        <div className="container main ml-auto mt-6">
        <div className='sidebar'><Sidebar/></div>
        
        <div className=' contant content ml-auto mt-6 '>
            <ProfileHeader/>
            <hr />
     
  
         
        </div>  
      </div>
      </div>
    

    </div>
  )
}

export default employee