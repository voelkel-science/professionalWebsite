import React, { useEffect, useState, useRef } from "react";
import Head from 'next/head'
import styles from './ProfilePage.module.css';

import { TagCloud } from 'react-tagcloud'
import ReactWordcloud from 'react-wordcloud';




export function Keywords (props){
    const [showResults, setShowResults] = useState(false)
    const [dataMain, setDataMain] = useState([ ])
    const [dataMin, setDataMin] = useState([ ])
    
    const onClickResults = () =>{
        if(!showResults) setShowResults(true)
        if(showResults) setShowResults(false)
    }; 

    const toggleField = (value) =>{
      console.log('clicked')
      console.log(props.showScian)
      if(value=='sci.an'){
        if(!props.showScian) {
          props.setShowScian(true)
          props.setShowPtsF(false)
          props.setShowPtEF(false)
          props.setShowPtRF(false)
          props.setShowPPS(false)
        }
        if(props.showScian) props.setShowScian(false)
      }
      if(value=='Planetesimal formation'){
        if(!props.showPtsF) {
          props.setShowScian(false)
          props.setShowPtsF(true)
          props.setShowPtEF(false)
          props.setShowPtRF(false)
          props.setShowPPS(false)
        }
        if(props.showPtsF) props.setShowPtsF(false)
      }
      if(value=='Planetary embryo formation'){
        if(!props.showPtEF) {
          props.setShowScian(false)
          props.setShowPtsF(false)
          props.setShowPtEF(true)
          props.setShowPtRF(false)
          props.setShowPPS(false)
        }
        if(props.showPtEF) props.setShowPtEF(false)
      }
      if(value=='Planet formation in primordial rings'){
        if(!props.showPtRF) {
          props.setShowScian(false)
          props.setShowPtsF(false)
          props.setShowPtEF(false)
          props.setShowPtRF(true)
          props.setShowPPS(false)
        }
        if(props.showPtRF) props.setShowPtRF(false)
      }
      if(value=='Planet Population synthesis'){
        if(!props.showPPS) {
          props.setShowScian(false)
          props.setShowPtsF(false)
          props.setShowPtEF(false)
          props.setShowPtRF(false)
          props.setShowPPS(true)
        }
        if(props.showPPS) props.setShowPPS(false)
      }
  }; 
    
    const callbacks = {
      getWordColor: word => word.value > 50 ? "blue" : "red",
      onWordClick: console.log,
      onWordMouseOver: console.log,
      getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
    }
    const options = {
      rotations: 2,
      rotationAngles: [-90, 0],
    };
    const size = [600, 400];
    const words = [
      {
        text: 'told',
        value: 64,
      },
      {
        text: 'mistake',
        value: 11,
      },
      {
        text: 'thought',
        value: 16,
      },
      {
        text: 'bad',
        value: 17,
      },
    ]
     
    const MyWordcloud = () => (
        <ReactWordcloud
          callbacks={callbacks}
          options={options}
          size={size}
          words={words}
        />
      );


      useEffect(() => {
         setDataMain(
          [
            { value: 'Planet Population synthesis', count: 40},
            { value: 'Planetesimal formation', count: 40},
            { value: 'Planetary embryo formation', count: 40},
            { value: 'Planet formation in primordial rings', count: 40},
            { value: 'sci.an', count: 40}
          ]
         )
         setDataMin(
          [

            { value: 'Pebble accretion', count: 30},
            { value: 'Radiation hydrodynamics', count: 30},
            { value: 'Planetesimal accretion', count: 30},
            { value: 'Global planet formation models', count: 30}
          ]
         )
    }, []);   

    const SimpleCloud = () => (
    <TagCloud
        renderer={customRenderer}
        minSize={1.5}
        maxSize={4.0}
        tags={data}
        style={{width: '100%', textAlign: 'justified' }}
        onClick={tag.open}
    />
    )

    function random_rgba() {
      var o = Math.round, r = Math.random, s = 255;
      return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + '0.1' + ')';
    }

    const tagStyle = (size,color) => ({
            fontSize: `${size / 2}em`,
            fontFamily:'Tahoma',
            //fontWeight :  `${300* size / 2}`,
            border: `2px solid ${random_rgba()}`,
            borderRadius: '15px', 
            margin: '2px',
            padding: '5px',
            display: 'inline-block',
            background: random_rgba(),
            color: 'black',
    });


    const customRenderer = (tag, size, color) => (
        <button
          key={tag.value}
          className={`${styles.tagButton}`}
          style={
            tagStyle(size,color)
          }
          onMouseEnter={() => {tagStyle(size,'white')}}
        >
          {tag.value}
        </button>
      )

      


    return(
        <div>
            <div  >
            <h4 style={{width:'200px', padding: '20px', borderBottom: '1px solid black' }}> Main </h4>
            <TagCloud
                renderer={customRenderer}
                minSize={3.5}
                maxSize={4.0}
                tags={dataMain}
                style={{width: '100%', textAlign: 'justified' }}
                onClick={tag => toggleField(`${tag.value}`)}
            />
            </div>
            <div  >
            <h4 style={{width:'200px',padding: '20px', borderBottom: '1px solid black' }}> Side </h4>
            <TagCloud
                renderer={customRenderer}
                minSize={1.5}
                maxSize={4.0}
                tags={dataMin}
                style={{width: '100%', textAlign: 'justified' }}
                onClick={tag => toggleField(`${tag.value}`)}
            />
            </div>
        </div>

    );

};


