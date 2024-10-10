import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
        <div className="flex flex-col">
            Register
            <Link to="/login">Login Page</Link>
        </div>
    </>
  )
}

export default Register