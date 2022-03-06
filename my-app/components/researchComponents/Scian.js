import React, { useEffect, useState, useRef } from "react";
import Head from 'next/head'
import styles from '../ProfilePage.module.css'


export function Scian (props){
    const [showResults, setShowResults] = useState(props.showScian)
    console.log('in scina ',props.showScian)

    const onClickResults = () =>{
        if(!showResults) setShowResults(true)
        if(showResults) setShowResults(false)
    }; 


    return(
        <div>
            
            <div>
                { props.showScian ? <ResearchContent /> : null }
            </div>
        </div>

    );

};

 function ResearchContent (){
    
    return(
        <div>
            <h2 style={{padding: '20px', borderBottom: '2px solid black' }}> sci.an </h2>
             <p style={{color:'black' , fontSize:'18px'}} class="w3-center">
                sci.an (scientific area network) is a virtual conferencing and meeting platform with a current focus on academic networking.
                The project is in a closed beta version at the Max Planck Institute for astronomy in Heidelberg.
                Its long term aspiration is to be a sustainable and socially inclusive alternative to physical conferencing.
                All info can be found at   
                <a href = "https://sci-an.com/">
                <p style={{color:'black' , fontSize:'18px', width:'100%'}} className={`${styles.roomButton}`}>
                    sci-an.com 
                </p>
                </a>.
            </p>
            <div>
                <img src="scian_background.png" alt="Avatar" class="image" style={{width:'100%'}} />
            </div>
        </div>
    );
    
}; 
