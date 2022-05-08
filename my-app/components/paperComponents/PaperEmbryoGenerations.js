import React, { useEffect, useState, useRef } from "react";
import Head from 'next/head'
import {PHD} from '../cvComponents/PHD'
import Link from 'next/link'
import styles from '../ProfilePage.module.css';


export function PaperEmbryoGenerations (clicked){
    const [showResults, setShowResults] = useState(false)
    
    const onClickResults = () =>{
        if(!showResults) setShowResults(true)
        if(showResults) setShowResults(false)
    }; 


    return(
        <div className=" w3-center">
            <p>
            <button className={`${styles.roomButton}`} style={{width : '90%'}}	onClick={onClickResults} >
            Exploring multiple generations of planetary embryos
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
                    <a href="https://www.aanda.org/component/article?access=doi&doi=10.1051/0004-6361/202141830" className="w3-button w3-white w3-large w3-margin-top w3-opacity w3-hover-pale-green w3-hover-opacity-off">
                        Astronomy & Astrophysics, Forthcoming article.
                    </a>
                </h4>
            </div>
            <div className=" w3-left-align w3-half">
                <figure>
                    <div className="w3-third w3-left-align " style={{maxWidth: '200px'}} >
                        <div onClick="window.location=''" className="w3-card w3-hover-shadow w3-margin-right w3-pale-green ">
                            <a href = "https://ui.adsabs.harvard.edu/abs/2022arXiv220201500V/abstract">
                                <img className="w3-round w3-image w3-margin-top" src="paper4.png"
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
                            How many planets does a circumstellar disk form? When do they form? And how does this affect their evolution?
                            In order to understand these questions, here we investigate the formation of planetary embryos in the first global, self consistent planet formation model.
                            We show that the consistent formation of planetary embryos can cause the formation of multiple distinct generations of planets within the lifetime of the gas disk. 
                        </p>
                        </p>
                    </figcaption>
                </figure>
            </div>
            <div className=" w3-left-align w3-half" >
            <figure>
                    <div className="w3-third w3-center" style={{maxWidth:'1000px'}} >
                        <div onClick="window.location=''" className="w3-card w3-hover-shadow w3-margin-left w3-margin-right w3-pale-green ">
                            <Link href="Generations.png">
                                <a>
                                    <img className="w3-round w3-image w3-margin-top" src="Generations.png"
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
                            This figure shows the planetary evolution in the circumstellar disk. The color indicated the composition of the formed planets.
                            It vividly displays how much more complex a planetary system becomes when the formation of planets does not follow an initial assumption.
                            </p>
                        </p>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
    
}; 