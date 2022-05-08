import React, { useEffect, useState, useRef } from "react";
import Head from 'next/head'
import styles from '../ProfilePage.module.css';



export function PopulationSynthesis (props){
    const [showResults, setShowResults] = useState(false)
    
    const onClickResults = () =>{
        if(!showResults) setShowResults(true)
        if(showResults) setShowResults(false)
    }; 


    return(
        <div>
            
            <div>
                { props.showPPS ? <ResearchContent /> : null }
            </div>
        </div>

    );

};

 function ResearchContent (){
    
    return(
        <div>
            <h2 style={{padding: '20px', borderBottom: '2px solid black' }}>Planet population synthesis </h2>
             <p style={{color:'black' , fontSize:'18px'}} className="w3-center">
                Planet population synthesis is a powerful tool that can be used to connect the outcome of planet formation simulations with exoplanet observations. 
                Within this approach we compute a synthetic population of planets. 
                This means we conduct a large set of simulations, each representing the evolution of one planetary system using a global model of planet formation.
                The result of these simulations are thousands of synthetic planets that can then be compared to the population of observed exoplanets using statistical methods. 
                As part of my research I improve the global model of planet formation within our planet population synthesis framework by adding latest findings from the field of planetesimal- and planetary embryo formation.
            </p>
        </div>
    );
    
}; 
