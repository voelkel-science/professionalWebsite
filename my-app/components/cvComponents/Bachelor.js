import React, { useEffect, useState, useRef } from "react";
import Head from 'next/head'

import styles from '../ProfilePage.module.css';



export function Bachelor (clicked){
    const [showResults, setShowResults] = useState(false)
    
    const onClickResults = () =>{
        if(!showResults) setShowResults(true)
        if(showResults) setShowResults(false)
    }; 


    return(
        <div>
            <p>
            <button className={`${styles.roomButton}`} style={{width:'300px'}}	onClick={onClickResults} >
                    2012 - 2016 <br/> B.Sc. Physics
                </button>
            </p>
            <div id="PhD">
                { showResults ? <Content /> : null }
            </div>
        </div>

    );

};

 function Content (){
    
    return(
        <div id="PhD" className="tabcontent">
            <p style={{color:'black' , fontSize:'18px'}} className="w3-center">
            Dynamical friction in the common envelope phase
            </p>
            <p style={{color:'black' , fontSize:'18px'}} className="w3-center w3-red">
                University of Tübingen
            </p>
            <p style={{color:'black' , fontSize:'18px'}} className="w3-center">
                The project aimed to investigate the effect of dynamical friction on the envelope of red giant stars.
				For this I used 3D hydrodynamics simulations to model the common envelope phase of giant planets within the atmoshpere of red giants.
            </p>
        </div>
    );
    
}; 
