import React from 'react';
import './../styles/Navbar.css';

//Fuente => https://www.w3schools.com/howto/howto_css_login_form_navbar.asp

export const Navbar = () => {
    return( 
    <div className = 'nav'>
        <a href = "#top">HOME</a>
        <a href = 'topFilms'>TOP FILMS</a>
        <a href = 'nextFilms'>COMING SOON</a>
        <div className = 'search'>
            <input id = 'searchField' type = 'search' placeholder = 'Search film...'></input>
            <button id = 'searchButton' type = 'submit'>Search</button>
        </div>
    </div>
)};