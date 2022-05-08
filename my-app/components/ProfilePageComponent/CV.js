import React, { useEffect, useState, useRef } from "react";
import Head from 'next/head'
import {PHD} from '../../components/cvComponents/PHD'
import Link from 'next/link'

import styles from '../ProfilePage.module.css';



export function CV (clicked){
    const [showResults, setShowResults] = useState(false)
    
    const onClickResults = () =>{
        if(!showResults) setShowResults(true)
        if(showResults) setShowResults(false)
    }; 


    return(
        <div className="w3-container w3-center">
            {/*
            <a name="CV"></a>
            <div>
                <h4 className= 'w3-center' style = {{fontSize: '24px' , marginTop:'25px' }}>
                <Link href="Resume_Oliver_Voelkel.pdf">
                    <a> 
                        <button className={`${styles.roomButton}`} style={{width:'250px'}}	onClick={onClickResults} >
                            Resume (.pdf)
                        </button> 
                    </a>
                </Link>
                </h4>
            </div>
            
            <div>
                <h4 className= 'w3-center' style = {{fontSize: '24px' , marginTop:'0px' }}>
                <Link href="CV_Voelkel.pdf">
                    <a> 
                        <button className={`${styles.roomButton}`} style={{width:'250px'}}	onClick={onClickResults} >
                            Academic CV (.pdf)
                        </button> 
                    </a>
                </Link>
                </h4>
            </div>
            */}
        </div>

    );

};