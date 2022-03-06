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
               	Oliver Völkel
            <br/>
               	
            </p>
            <p className={`${styles.shortBio}`}>
            My name is Oliver Völkel and since 2018 I am a PhD student in the field of planet formation at the Max Planck Institute for Astronomy in Heidelberg.
            </p>
        </>
    );

};