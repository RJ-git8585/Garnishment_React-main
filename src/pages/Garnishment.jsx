// eslint-disable-next-line no-unused-vars
import React from 'react'
import Headertop from '../component/Headertop'
import Sidebar from '../component/sidebar'

function Garnishment() {
  return (
    <>
    <div className="min-h-full">
      
       <div className="container main ml-auto ">
       <div className='sidebar'><Sidebar/></div>
       <div className="contant content ml-auto ">
       <Headertop />
              <div>
                
                <h1>Garnishment calcu</h1>
                
                </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Garnishment