import React, { useEffect, useState, useRef } from "react";
import Head from 'next/head'
import styles from '../ProfilePage.module.css';



export function PlanetFormationRings (props){
    const [showResults, setShowResults] = useState(false)
    
    const onClickResults = () =>{
        if(!showResults) setShowResults(true)
        if(showResults) setShowResults(false)
    }; 


    return(
        <div>
            
            <div>
                { props.showPtRF ? <ResearchContent /> : null }
            </div>
        </div>

    );

};

 function ResearchContent (){
    
    return(
        <div>
            <h2 style={{padding: '20px', borderBottom: '2px solid black' }}>Planet formation in primordial rings </h2>
             <p style={{color:'black' , fontSize:'18px'}} className="w3-center">
                Latest observations of circumstellear disks revealed their complex substructure.
                It appears that many of the observed disks show the presence of rings. These rings might be caused by giant planets within the disk.
                However they may also trigger the formation of such giant planets in the first place.
                Whether these planets are a the cause, a symptom, or both is an open and exciting field of research.
                My work aims to self consistently model the formation of giant planets within primordial rings using our global model of planet formation.
            </p>
        </div>
    );
    
}; 
