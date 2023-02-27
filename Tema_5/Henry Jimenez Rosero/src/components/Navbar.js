import React from 'react';
import {  Link, NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';
import '../styles/Navbar.css';
import { MenuItems } from "./Menuitems";
import { Nav } from "react-bootstrap";

const Navbar= () =>{
	  return (
		<Nav className="NavbarItems">
		  
		  <div className="menu-icon"></div>
		  <ul>
			{MenuItems.map((item, index) => {
			  return (
				<li key={index}>
				  <NavLink to={ item.url } className= {item.cName }>{item.Title} </NavLink> 
				
				 </li>
			  );
			})}
		  </ul>
		</Nav>
	  );
	}

export default Navbar;


