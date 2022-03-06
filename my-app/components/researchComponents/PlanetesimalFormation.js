import React, { useEffect, useState, useRef } from "react";
import Head from 'next/head'
import styles from '../ProfilePage.module.css';



export function PlanetesimalFormation (props){
    const [showResults, setShowResults] = useState(false)
    
    const onClickResults = () =>{
        if(!showResults) setShowResults(true)
        if(showResults) setShowResults(false)
    }; 


    return(
        <div>
           
            <div id="PhD">
                { props.showPtsF ? <PlanetesimalContent /> : null }
            </div>
        </div>

    );

};

 function PlanetesimalContent (){
    
    return(
        <div id="Planetesimal" class="tabcontent">
            <h2 style={{padding: '20px', borderBottom: '2px solid black' }}>Planetesimal formation </h2>
            <p style={{color:'black' , fontSize:'18px'}} class="w3-center">
            Planetesimals are solid objects in the size range of several hundred meters to several hundred kilometers. Next to the much smaller pebbles, they are the main forming blocks of planets.
            Where, when and how many of these objects form therefore majorly affects planet formation. My research in this field focuses on the early formation of planetetsimals and how their distribution shapes the evolution of planetary systems.
            </p>
        </div>
    );
    
}; 
