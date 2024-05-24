// eslint-disable-next-line no-unused-vars
import React from 'react'
import Headertop from '../component/Headertop'
import Sidebar from '../component/sidebar'


function Help() {
  return (
    <>
    <div className="min-h-full">
       <Headertop />
       <div className="container main ml-auto mt-6">
       <div className='sidebar'><Sidebar/></div>
       <div className="contant content ml-auto mt-6">
              <div>Help</div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Help 