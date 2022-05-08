import React, { useEffect, useState, useRef } from "react";
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './ProfilePage.module.css';


export function Header (clicked){
    const [showResults, setShowResults] = useState(false)
    
    const onClickResults = () =>{
        if(!showResults) setShowResults(true)
        if(showResults) setShowResults(false)
    }; 


    return(
        <>
            <p  className={`  ${styles.customBorderHeader} ${'p-1'} ` }  style={{fontSize: '32px'}}>
               	Dr. Oliver Völkel
            <br/>
               	
            </p>
            <p className={`${styles.shortBio}`}>
            Over the last years I was working on improving global planet formation models at the Max Planck Institute for Astronomy in Heidelberg. 
            Since 2022 my main focus lies on building a unified scientific ecosystem named sci.an as part of a Start-up grant. 
            The platforms combines a 3D tool for virtual conferencing with a peer based review system to promote scientists and their research.
            </p>
        </>
    );

};