// eslint-disable-next-line no-unused-vars
 // Notfound.jsx write code for not found page html with css//
  // eslint-disable-next-line no-unused-vars, no-unused-vars
import React from 'react'

function Notfound() {
  return (
    <div className="flex h-screen  dark:bg-slate-800 flex-1 flex-col justify-center px-6 py-12 px-16 sm:px-8 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="/src/Logo (1).png"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center dark:text-white text-2xl font-bold leading-9 tracking-tight text-gray-900">
          404 - Page Not Found
        </h2>
        <p className="mt-4 text-center dark:text-white text-sm text-gray-500">
          The page youre looking for doesnt exist.
        </p>
      </div>

      <div className="mt-10 text-center sm:mx-auto sm:w-full sm:max-w-sm">
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
        >
          Go back home
        </a>
      </div>
    </div>
  );
}


export default Notfound