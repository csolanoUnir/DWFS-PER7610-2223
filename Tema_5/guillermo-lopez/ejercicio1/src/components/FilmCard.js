import React from 'react';
import { useState } from 'react';
import './../styles/FilmCard.css';

export const Card = (props) => {

    //UseState para almacenar valor de seleccion si la hay
    const[isHovered, setHovered] = useState(new Array(props.dotNumber).fill(0));

    const setFilmScore = async (score) => {
        try {
            await(console.log("Score " + score + " for film " + props.filmId + " sent"));
        } catch (e) {
            console.log("Error on send score " + e);
        }
    };

    let dotButtons = [];
    for (let i = 0; i < props.dotNumber; i ++) {
        dotButtons.push(<button className = "dot" id = {"dot" + i} hovered = {isHovered[i]} onClick = {() => setFilmScore(i + 1)} onMouseOver = {() => {
            let hoverArr = new Array(props.dotNumber).fill(0);
            for (let a = 0; a < i + 1; a++) hoverArr[a] = 1;
            setHovered(hoverArr);
        }}/>);
    }
    
    return <div className = "filmcontainer">
        <div className = "filmLogo">
            <img className = "filmLogo" src = {"icons/films/" + props.filmId + ".jpeg"}/>
            <div className = "infoContainer">
                <p>{props.name}</p>
                <div className = "ratingContainer" onMouseLeave = {() => {
                    setHovered(new Array(props.dotNumber).fill(0));
                }}>
                    {dotButtons}
                </div>
            </div>
        </div>        
    </div>;
};