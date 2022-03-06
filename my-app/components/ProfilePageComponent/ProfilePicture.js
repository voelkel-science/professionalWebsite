import React, { useEffect, useState, useRef } from "react";
import Head from 'next/head'
import { CV } from "./CV";
import { PHD } from "../cvComponents/PHD";
import { Masters } from "../cvComponents/Masters";
import { Bachelor } from "../cvComponents/Bachelor";
import { Exist } from "../cvComponents/Exist";
import { Coding } from "../cvComponents/Coding";


import styles from '../ProfilePage.module.css';






export function ProfilePicture (clicked){
    const [showResults, setShowResults] = useState(false)
    
    const onClickResults = () =>{
        if(!showResults) setShowResults(true)
        if(showResults) setShowResults(false)
    }; 


    return(
        <figure class ='w3-center'>
            <div class=" w3-center w3-padding"  style={{maxWidth: "350px", borderRight: '1px solid black'}} >
                <div class="container">
                    <img src="profilePicPro.jpeg" alt="Avatar" class="w3-image" style={{maxWidth: "100%" , borderRadius: "5px"}}/>
                    <div class="bottom">
                        <div class='w3-large w3-center'>
                                voelkel[at]mpia.de
                        </div>
                    </div>
                </div>
                <p>
                <button className={`${styles.roomButton}`} style={{width : '50%' }}	onClick={onClickResults} >
                        Vita 
                    </button>
                </p>
                { showResults ? <Content /> : null }
            </div>
        </figure>
       

    );

};

function Content (){
    
    return(
        <div>
            <CV />
            <Exist />
            <PHD />
            <Masters />
            <Bachelor />
            <Coding/>
        </div>
    );
    }