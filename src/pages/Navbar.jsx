import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to="/page1">Page 1 fr-1</Link>
                <Link to="/page2">Page -2 fr-2</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar