import React, { useEffect, useState, useRef } from "react";
import Head from 'next/head'

import styles from '../ProfilePage.module.css';



export function Masters (clicked){
    const [showResults, setShowResults] = useState(false)
    
    const onClickResults = () =>{
        if(!showResults) setShowResults(true)
        if(showResults) setShowResults(false)
    }; 


    return(
        <div>
            <p>
            <button className={`${styles.roomButton}`} style={{width:'300px'}}	onClick={onClickResults} >
                    2016 - 2017 <br/> M.Sc. Physics
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
                Master Thesis - Moment methods for radiation hydrodynamics
            </p>
            <p style={{color:'black' , fontSize:'18px'}} className="w3-center w3-red">
                University of Tübingen
            </p>
            <p style={{color:'black' , fontSize:'18px'}} className="w3-center">
                In this project I implemented a moment method for radiative transfer into the radiation hydrodynamics code PLUTO.
				The method used is called M1 and it shows majorly improvement behavior for solving anisotropic radiation problems when compared to the previously implemented FLD-method.
            </p>
        </div>
    );
    
}; 
