import React, { useEffect, useState, useRef } from "react";
import Head from 'next/head'
import styles from '../ProfilePage.module.css';



export function PlanetaryEmbryoFormation (props){
    const [showResults, setShowResults] = useState(false)
    
    const onClickResults = () =>{
        if(!showResults) setShowResults(true)
        if(showResults) setShowResults(false)
    }; 


    return(
        <div>
            
            <div>
                { props.showPtEF ? <ResearchContent /> : null }
            </div>
        </div>

    );

};

 function ResearchContent (){
    
    return(
        <div>
            <h2 style={{padding: '20px', borderBottom: '2px solid black' }}>Planetary embryo formation </h2>
            <p style={{color:'black' , fontSize:'18px'}} className="w3-center">
                When is a planet a planet? The answer to this question is not quite clear, but every planet that exists must have started as a much smaller object that grew larger over time by accumulating more and more material.
                We call these smaller objects planetary embryos. Their growth has many different stages and mechanisms but the foundation is an object of sufficient mass to efficiently sweep up material in its surrounding by its own gravitational force.
                In most cases we believe that these objects form from collisions and mergers of initially even smaller solid material, like planetesimals. The environemt in wich an oject then reaches the size of a planetary embryo shapes the final planet.
                My research in this field focuses on where and when an object reaches this embryo size and how its environment determines its further developement.
            </p>
        </div>
    );
    
}; 
