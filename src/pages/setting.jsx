    // eslint-disable-next-line no-unused-vars
    import React from 'react'   
    import Sidebar from '../component/sidebar'  
    import Headertop from '../component/Headertop'

    function Setting() {
    return (
    
          <div className="min-h-full">
       
       <Headertop />
       <div className="container main ml-auto mt-6">
        <div className='sidebar'><Sidebar/></div>
        <div className="contant content ml-auto mt-6">
                      <h1 className='edit-profile'>Settings</h1>
                    <form className=" grid grid-cols-2 gap-4 border-gray-50 rounded-md space-y-6 p-6 shadow-lg shadow-blue-500/50" action="#" method="POST">
                    
                    <div className=''> 
                        <label htmlFor="name" className="block text-slate-500 text-sm font-medium leading-6">
                          UserName 
                        </label>
                        <div className="mt-2">
                          <input
                            id="username"
                            name="username"
                            // value={data.username}
                            type="username"
                            autoComplete="username"
                            // onChange={(e) => setEmail(e.target.value)}
                            
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className=''>
                        <label htmlFor="name" className="block text-slate-500 text-sm font-medium leading-6">
                          Name 
                        </label>
                        <div className="mt-2">
                          <input
                            id="name"
                            name="name"
                            // value={data.name}
                            type="name"
                            autoComplete="name"
                            // onChange={(e) => setEmail(e.target.value)}
                            
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className=''>
                        <label htmlFor="email" className="text-slate-500 block  text-sm font-medium leading-6 ">
                          Email 
                        </label>
                        <div className="mt-2">
                          <input
                            id="email"
                            name="email"
                            // value={data.email}
                            type="email"
                            autoComplete="email"
                            // onChange={(e) => setEmail(e.target.value)}
                            
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="text-slate-500 block  text-sm font-medium leading-6 ">
                          Company 
                        </label>
                        <div className="mt-2">
                          <input
                            id="email"
                            name="email"
                            // value={data.company ? data.company.name : 'Loading...'}
                            type="email"
                            autoComplete="email"
                            // onChange={(e) => setEmail(e.target.value)}
                            
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between">
                          <label htmlFor="password" className="text-slate-500 block  text-sm font-medium leading-6 ">
                            Phone 
                          </label>
                        </div>
                        <div className="mt-2">
                          <input 
                            id="phone"
                            name="phone"
                            type="phone"
                            // value={data.phone}
                            // onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                            
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />

                        </div>
                        
                      
          </div>
          <div>
                        <div className="flex items-center justify-between">
                          <label htmlFor="password" className="text-slate-500 block  text-sm font-medium leading-6 ">
                            City 
                          </label>
                        </div>
                        <div className="mt-2">
                          <input 
                            id="phone"
                            name="phone"
                            type="phone"
                            // value={data.address ? data.address.city : 'Loading...'}
                            // onChange={(e) => setPassword(e.target.value)}    
                            autoComplete="current-password"
                            
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />

                        </div>
                        
                      
          </div>
          <div >
          {/* <Link to="/dashabord"> */}
            <button
              type="submit"
            //    onClick={handleSubmit}
              className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 custom-btn"
            >
              UPDATE
            </button>
            </div>
            <div >
            <button
              type="reset"
            //    onClick={handleSubmit}
              className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              CANCEL
            </button>
            
            {/* {errorMessage && <p className="error">{errorMessage}</p>} */}
            
            

            {/* </Link> */}
          </div>
          
        </form>
       </div>
        </div>
        
        </div>
        
    )
    }

    export default Setting