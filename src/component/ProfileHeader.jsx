// eslint-disable-next-line no-unused-vars
import {react,useState,useEffect,useLocation} from 'react'
function ProfileHeader( ) {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  return (
    <div>
        <div className="lg:flex lg:items-center lg:justify-between mb-8">
  <div className="min-w-0 p-4 flex-1">
    <h2 className="text-2xl font-bold leading-7 text-black-900 sm:truncate sm:text-3xl sm:tracking-tight">Welcome To Garnishment</h2>
    <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
      <div className="mt-2 flex items-center text-sm text-gray-500">
        <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z" />
          <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" />
        </svg>
        Full-time Employer
      </div>
      <div className="mt-2 flex items-center text-sm text-gray-500">
        <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
        </svg>
        Remote
      </div>
     
    </div>
  </div>
  <div className="mt-5 flex lg:ml-4 lg:mt-0">
    <span className="hidden sm:block">
   
    

    </span>

    <span className="ml-3 hidden sm:block addfrmbtn">
      <a type="button" href="/department" className="inline-flex items-center rounded-md bg-red-400 px-3 py-2 text-sm font-semibold text-black-900 text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-300">
        Depart
      </a>
      {/* // )} */}
    </span>

    <span className="sm:ml-3 addfrmbtn">
      <a type="button" href="/addemployee" className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Add
      </a>
    </span>

    <span className="sm:ml-3 addfrmbtn">
      <a type="button" href="/location" className="inline-flex items-center rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Location
      </a>
    </span>

  
    <div className="relative ml-3 sm:hidden md:hidden hidden md:block">
      <button type="button" className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400" id="mobile-menu-button" aria-expanded="false" aria-haspopup="true">
        More
        <svg className="-mr-1 ml-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
        </svg>
      </button>

      <div className="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-black py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="mobile-menu-button">
       
        <a href="#" className="block px-4 py-2 text-sm text-black-700" role="menuitem" id="mobile-menu-item-0">Edit</a>
        <a href="#" className="block px-4 py-2 text-sm text-black-700" role="menuitem" id="mobile-menu-item-1">View</a>
      </div>
    </div>
  </div>
</div>
<hr></hr>
{/* <ToastContainer /> */}
    </div>
  )
}

export default ProfileHeader