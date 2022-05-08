import React, { useEffect, useState, useRef } from "react";
import Head from 'next/head'
import {PHD} from '../cvComponents/PHD'
import Link from 'next/link'
import styles from '../ProfilePage.module.css';


export function PaperEmbryoFormationTwo (clicked){
    const [showResults, setShowResults] = useState(false)
    
    const onClickResults = () =>{
        if(!showResults) setShowResults(true)
        if(showResults) setShowResults(false)
    }; 


    return(
        <div className=" w3-center">
            <p>
            <button className={`${styles.roomButton}`} style={{width : '90%'}}	onClick={onClickResults} >
                Linking planetary embryo formation to planetesimal formation II
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
                    <a href="https://www.aanda.org/articles/aa/full_html/2021/01/aa39245-20/aa39245-20.html" className="w3-button w3-white w3-large w3-margin-top w3-opacity w3-hover-pale-green w3-hover-opacity-off">
                        Astronomy & Astrophysics, Volume 645, id.A132, 12 pp.
                    </a>
                </h4>
            </div>
            <div className=" w3-left-align w3-half">
                <figure>
                    <div className="w3-third w3-left-align " style={{maxWidth: '200px'}} >
                        <div onClick="window.location=''" className="w3-card w3-hover-shadow w3-margin-right w3-pale-green ">
                            <a href = "https://ui.adsabs.harvard.edu/abs/2021A%26A...645A.132V/abstract">
                                <img className="w3-round w3-image w3-margin-top" src="paper2.png"
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
                            How does the influx and accretion of smaller pebbles influence the formation and evolution of planetary embryos?
                            In addition to the planetesimal formation and N-body dynamics that we investigate in our companion paper, here we include the effect of pebble accretion.
                            We show that the formation time for an initial embryo is only weakly affected by the accretion of pebbles.
                            Once an embryo has formed however, its mass rapidly increases via pebble accretion.
                            Overall we find less planetary embryos if pebble accretionis included, the ones that form however grow substantially more massive.
                        </p>
                        </p>
                    </figcaption>
                </figure>
            </div>
            <div className=" w3-left-align w3-half" >
            <figure>
                    <div className="w3-third w3-center" style={{maxWidth:'1000px'}} >
                        <div onClick="window.location=''" className="w3-card w3-hover-shadow w3-margin-left w3-margin-right w3-pale-green ">
                            <Link href="mass_13_slope_15II.jpg">
                                <a>
                                    <img className="w3-round w3-image w3-margin-top" src="mass_13_slope_15II.jpg"
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
                            This figure shows the effect of pebble accretion on the formation of planetary embryos.
                            The left panels show the formation of embryos without pebble accretion, the right panel includes this effect.
                            We show that embryos that form grow substantially more massive if pebble accretion is considered.
                            More massive embryos enforce a larger orbital distance to other embryos, as a consequence, the total number of embryos is smaller in the case of pebble accretion.
                            </p>
                        </p>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
    
}; 