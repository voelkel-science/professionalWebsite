import React, { useEffect, useState, useRef } from "react";
import Head from 'next/head'




export function Biography (clicked){
    const [showResults, setShowResults] = useState(false)
    
    const onClickResults = () =>{
        if(!showResults) setShowResults(true)
        if(showResults) setShowResults(false)
    }; 


    return(
        <div>
           <p  className="w3-margin-left w3-left-align" style={{color:"black" , fontSize:"22px"}} >
                Welcome
            </p>
            <p  className="w3-margin-left w3-left-align" style={{color:"black" , fontSize:"18px"}} >
                My name is Oliver Völkel and since 2018 I am a PhD student in the field of planet formation at the Max Planck Institute for Astronomy in Heidelberg.
            </p>
            <p  className="w3-margin-left w3-left-align" style={{color:"black" , fontSize:"18px"}} >
                My main focus is the early phases of planet formation.
                This includes the formation of planetesimals, the formation of planetary embryos and the formation of planets in primordial rings.
                Since studying these phenomena is currently unfeasible with observations alone, the tools of choice are numerical simulations.
                Developing and enhancing global models of planet formation to obtain a deeper understanding on the entire formation process is the main goal of my work.
            </p>
            <p  className="w3-margin-left w3-left-align" style={{color:"black" , fontSize:"18px"}} >
                My PhD advisors are Hubert Klahr (MPIA) and Christoph Mordasini (University of Bern). For my embryo formation projects I closely collaborate with Rogerio Deienno (Southwest Research Institute - Boulder, Colorado) inluding a 2.5 month research visit in 2019.
            </p>
            <p  className="w3-margin-left w3-left-align" style={{color:"black" , fontSize:"18px"}} >
                Next to my acedemic projects I am passionate about the possibilities of virtual conferencing and networking.
                This means finding a long term sustainable and socially inclusive alternative to physical conferences.
                As a team of three PhD students, we developed a virtual conferencing and networking platform named sci.an.
                The project is currently in a closed beta version at the Max Planck Institute for Astronomy with great aspiration to be established in academia and beyond.
            </p>
        </div>

    );

};