import React, { useEffect, useState, useRef } from "react";
import Head from 'next/head'




export function Coding (clicked){
    const [showResults, setShowResults] = useState(false)
    
    const onClickResults = () =>{
        if(!showResults) setShowResults(true)
        if(showResults) setShowResults(false)
    }; 


    return(
        <div>
            <p>
            <button class="tablinks w3-button w3-center  w3-xlarge w3-border w3-white w3-hover-cyan w3-border-cyan"	style={{width:'300px'}} onClick={onClickResults} >
                    Skills & experience
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
             <p style={{color:'black' , fontSize:'20px'}} class="w3-left-align w3-padding">
               <b> Software developement </b>
            </p>
            <p style={{color:'black' , fontSize:'16px' , marginTop:'-30px'}} class="w3-left-align w3-padding">
                C, C++, C#, Fortran, python, JS
            </p>
            <p style={{color:'black' , fontSize:'20px' , marginTop:'-20px'}} class="w3-left-align w3-padding">
                <b> Data visualization </b> 
            </p>
            <p style={{color:'black' , fontSize:'16px' , marginTop:'-30px'}} class="w3-left-align w3-padding">
                paraview, visIt, matplotlib
            </p>
            <p style={{color:'black' , fontSize:'20px' , marginTop:'-20px'}} class="w3-left-align w3-padding">
               <b> Game Developement </b>
            </p>
            <p style={{color:'black' , fontSize:'16px' , marginTop:'-30px'}} class="w3-left-align w3-padding">
                unity3D, blender, react-three-fiber
            </p>
            <p style={{color:'black' , fontSize:'20px' , marginTop:'-20px'}} class="w3-left-align w3-padding">
               <b> High performance computing </b>
            </p>
            <p style={{color:'black' , fontSize:'20px' , marginTop:'-20px'}} class="w3-left-align w3-padding">
               <b>Computational fluid dynamics </b>
            </p>
            <p style={{color:'black' , fontSize:'20px' , marginTop:'-20px'}} class="w3-left-align w3-padding">
               <b> Radiative transfer </b>
            </p>
            
        </div>
    );
    
}; 
