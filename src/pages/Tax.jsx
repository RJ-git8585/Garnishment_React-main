// eslint-disable-next-line no-unused-vars
import React from 'react'
import Headertop from '../component/Headertop'
import Sidebar from '../component/sidebar'


function Tax() {
  return (
    <>
    <div className="min-h-full">
       
       <div className="container main">
       <div className='sidebar'><Sidebar/></div>
       <div className="contant content ml-auto ">
       <Headertop />
              <div>Taxes</div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Tax 