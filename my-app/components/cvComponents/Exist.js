import React, { useEffect, useState, useRef } from "react";
import Head from 'next/head'
import styles from '../ProfilePage.module.css';




export function Exist (clicked){
    const [showResults, setShowResults] = useState(false)
    
    const onClickResults = () =>{
        if(!showResults) setShowResults(true)
        if(showResults) setShowResults(false)
    }; 


    return(
        <div>
            <p>
            <button className={`${styles.roomButton}`}	style={{width:'300px'}} onClick={onClickResults} >
                    2022 - Current <br/> EXIST Start-Up grant
                </button>
            </p>
            <div >
                { showResults ? <Content /> : null }
            </div>
        </div>

    );

};

 function Content (){
    
    return(
        <div>
             <p style={{color:'black' , fontSize:'18px'}} className="w3-center">
                EXIST Gründerstipendium & Postdoc
            </p>
            <p style={{color:'black' , fontSize:'18px'}} className="w3-center w3-blue">
                Max Planck Institute for Astronomy
            </p>
            <p style={{color:'black' , fontSize:'18px'}} className="w3-center">
                Over the next year I will be working on the virtual meeting and discussion platform sci.an as project manager and design lead.
                All info on the platform can be found throughout my website.   
                In parallel I work as a postdoc in planet formation, further improving global planet formation models.
            </p>
        </div>
    );
    
}; 
