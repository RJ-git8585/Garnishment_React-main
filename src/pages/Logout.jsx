// Logout.jsx build freash component for logout text
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

const Logout = () => {
  return (
    <div>
      <h1>You have been logged out</h1>
      <p>
        <Link to="/">Click here to login again</Link>
      </p>
    </div>
  )
}

export default Logout




