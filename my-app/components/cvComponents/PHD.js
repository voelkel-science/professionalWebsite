import React, { useEffect, useState, useRef } from "react";
import Head from 'next/head'
import styles from '../ProfilePage.module.css';




export function PHD (clicked){
    const [showResults, setShowResults] = useState(false)
    
    const onClickResults = () =>{
        if(!showResults) setShowResults(true)
        if(showResults) setShowResults(false)
    }; 


    return(
        <div>
            <p>
            <button className={`${styles.roomButton}`}	style={{width:'300px'}} onClick={onClickResults} >
                    2018 - 2021 <br/> PhD Astronomy
                </button>
            </p>
            <div id="PhD">
                { showResults ? <PHDContent /> : null }
            </div>
        </div>

    );

};

 function PHDContent (){
    
    return(
        <div id="PhD" className="tabcontent">
             <p style={{color:'black' , fontSize:'18px'}} className="w3-center">
               On the consistent improvement of global planet formation models
            </p>
            <p style={{color:'black' , fontSize:'18px'}} className="w3-center w3-blue">
                Max Planck Institute for Astronomy
            </p>
            <p style={{color:'black' , fontSize:'18px'}} className="w3-center">
                The main goal of the thesis is to implement and investigate the effect of multiple physical processes into a global model of planet formation and planet population synthesis framework.
                This involves the evolution of dust and pebbles, the formation of planetesimals and the formation of planetary embryos in a self consistent fashion.
                Publications on individual aspects of this larger attempt can be found below.
            </p>
        </div>
    );
    
}; 
