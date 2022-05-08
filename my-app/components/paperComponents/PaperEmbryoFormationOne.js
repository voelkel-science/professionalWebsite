import React, { useEffect, useState, useRef } from "react";
import Head from 'next/head'
import {PHD} from '../cvComponents/PHD'
import Link from 'next/link'
import styles from '../ProfilePage.module.css';


export function PaperEmbryoFormationOne (clicked){
    const [showResults, setShowResults] = useState(false)
    
    const onClickResults = () =>{
        if(!showResults) setShowResults(true)
        if(showResults) setShowResults(false)
    }; 


    return(
        <div className=" w3-center" id="paperOne">
            <p>
            <button className={`${styles.roomButton}`} style={{width : '90%'}}	onClick={onClickResults} >
                Linking planetary embryo formation to planetesimal formation I
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
                <a href="https://www.aanda.org/articles/aa/full_html/2021/01/aa39214-20/aa39214-20.html" className="w3-button w3-white w3-large w3-margin-top w3-opacity w3-hover-pale-green w3-hover-opacity-off">
                Astronomy & Astrophysics, Volume 645, id.A131, 15 pp.
                    </a>
                </h4>
            </div>
            <div className=" w3-left-align w3-half">
                <figure>
                    <div className="w3-third w3-left-align " style={{maxWidth: '200px'}} >
                        <div onClick="window.location=''" className="w3-card w3-hover-shadow w3-margin-right w3-pale-green ">
                        <a href = "https://ui.adsabs.harvard.edu/abs/2021A%26A...645A.131V/abstract">
                                <img className="w3-round w3-image w3-margin-top" src="paper1.png"
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
                            Where and when does an object reach the size of what can be considered a planetary embryo?
                            And how does the distribution and formation planetesimals influence that process? Planetesimals are objects with a diameter of 100km, a planetary embryo for us is an object the size of the earths moon (d~3470km).
                            This difference is far from trivial.
                            Within this work we investigate the process of planetary embryo formation by coupling a model for planetesimal formation to sophisticated N-body simulations.
                            We present a simple analytic model that predicts where and when an object reaches the size of a planetary embryo, based on the planetesimal surface density evolution.	
                        </p>
                        </p>
                    </figcaption>
                </figure>
            </div>
            <div className=" w3-left-align w3-half" >
            <figure>
                    <div className="w3-third w3-center" style={{maxWidth:'1000px'}} >
                        <div onClick="window.location=''" className="w3-card w3-hover-shadow w3-margin-left w3-margin-right w3-pale-green ">
                            <Link href="mass_13_slope_15.jpg">
                                <a>
                                    <img className="w3-round w3-image w3-margin-top" src="mass_13_slope_15.jpg"
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
                            This figure shows the time and location at which an object reaches the size of a planetary embryo in our N-body simulations.
                            The colorchange marks the mass evolution of the growing object.
                            The red line shows when a planetesimal has reached the size of a planetary embryo at each orbital distance in the analytic model.
                            </p>
                        </p>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
    
}; 