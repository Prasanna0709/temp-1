import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-div'>
        <ul>
            <Link to="/products" className='links'>Products Page</Link>
            <Link to="/users">Users Page</Link>
        </ul>
    </div>
  )
}

export default Navbar