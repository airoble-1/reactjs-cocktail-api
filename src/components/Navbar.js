import React from "react"
import { NavLink } from "react-router-dom"
import logo from "../logo.svg"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <img src={logo} alt="cocktail db logo" className="logo" />
        <ul className="nav-links">
          <li>
            <NavLink to="/" activeclassname="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activevlassname="active">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
