import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
import logo from '../components/assets/logo.png'
import '../App.css'
export default function Layout() {
  return (
    <div>
        <header className="header">
            <NavLink to="/"><img src={logo} alt="cleartrip logo" className="img"/></NavLink>
            <button type="submit">Log in/Sign Up</button>
        </header>
        <hr className="hr"/>
        <div className="content-section" >
            <div className="nav-bar">
                <NavLink to="/">Flights</NavLink>
                <NavLink to="/hotels">Hotels</NavLink>
                <NavLink to="/offers">Offers</NavLink>
                <NavLink to="/mytrips">My Trips</NavLink>
            </div>
            <Outlet style={{width:"60vw",backgroundColor:"red"}}/>
            <div class="ads" style={{width:"20vw",backgroundColor:"blue"}}></div>
        </div>
        
        <footer>All Rights Reserved</footer>
    </div>
  )
}
