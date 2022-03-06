import React, { useEffect, useState, useRef } from "react";
import Head from 'next/head'
import {PHD} from '../cvComponents/PHD'
import Link from 'next/link'
import styles from '../ProfilePage.module.css';


export function PaperPlanetesimalFormation (clicked){
    const [showResults, setShowResults] = useState(false)
    
    const onClickResults = () =>{
        if(!showResults) setShowResults(true)
        if(showResults) setShowResults(false)
    }; 


    return(
        <div class=" w3-center" id="paperOne">
            <p>
            <button className={`${styles.roomButton}`} style={{width : '90%'}}	onClick={onClickResults} >
                The effect of pebble flux regulated planetesimal formation on the formation of giant planets
                </button>
            </p>
            <div id="PhD">
                { showResults ? <PaperContent /> : null }
            </div>
        </div>
    );

};

function PaperContent (){
    
    return(
        <div>
            <div>
                <h4 style= {{color:'blue' , fontSize:'32px'}}>
                <a href="https://www.aanda.org/articles/aa/full_html/2020/10/aa38085-20/aa38085-20.html" class="w3-button w3-white w3-large w3-margin-top w3-opacity w3-hover-pale-blue w3-hover-opacity-off">
                Astronomy & Astrophysics, Volume 642, id.A75, 13 pp.
                    </a>
                </h4>
            </div>
            <div class=" w3-left-align w3-half">
                <figure>
                    <div class="w3-third w3-left-align " style={{maxWidth: '200px'}} >
                        <div onclick="window.location=''" class="w3-card w3-hover-shadow w3-margin-right w3-pale-green ">
                        <a href = "https://ui.adsabs.harvard.edu/abs/2020A%26A...642A..75V/abstract">
                                <img class="w3-round w3-image w3-margin-top" src="paperEffect.png"
                                    style={{width:'100%' , maxWidth:'200px'}} / >
                            </a>
                        </div>
                    </div>
                    <figcaption>
                        <p style={{color:'black' , fontSize:'18px'}}>
                            <h4>
                                Quick summary
                            </h4>
                            <p style={{color: 'black' , fontSize:'18px'}}>
                            How does the distribution of planetesimals determine the evolution of planetary systems? This work investigates different planetesimal distributions in circumstellar disks and the effect that dynamical planetesimal formation can have on planet formation.
                            We find that a steep planetesimal surface density profile can enable the formation of giant planets, even for large planetesimal sizes of 100km.
                            Without the steep planetesimal surface density profile, no giant planets would form for planetesimals of that size.
                        </p>
                        </p>
                    </figcaption>
                </figure>
            </div>
            <div class=" w3-left-align w3-half" >
            <figure>
                    <div class="w3-third w3-center" style={{maxWidth:'1000px'}} >
                        <div onclick="window.location=''" class="w3-card w3-hover-shadow w3-margin-left w3-margin-right w3-pale-green ">
                            <Link href="PlotPaperI.jpg">
                                <a>
                                    <img class="w3-round w3-image w3-margin-top" src="PlotPaperI.jpg"
                                        style={{width:'100%' , maxWidth: '1000px'}} / >
                                </a>
                            </Link>
                        </div>
                    </div>
                    <figcaption>
                        <p style={{color:'black' , fontSize:'18px'}}>
                            <h4>
                                In one figure
                            </h4>
                            <p style={{color:'black' , fontSize:'18px'}}>
                            Here we show the four different synthetic populations of planets for different planetesimal surface density distributions. 
                            We can see that only the steep surface density profiles can enable the formation of giant planets.
							This steep profile is not an assumption, it is the result of smaller material drifting inward over time, leading to highly condensed zones of planetesimals in the inner disk.
                            </p>
                        </p>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
    
}; 