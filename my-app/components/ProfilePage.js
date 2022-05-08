import React, { useEffect, useState, useRef } from "react";

import 'bootstrap/dist/css/bootstrap.css';
import styles from './ProfilePage.module.css';


import { ProfilePicture } from "./ProfilePageComponent/ProfilePicture";
import { Header } from "./Header";
import { Keywords } from "./Keywords"

import { Scian } from "./researchComponents/Scian";
import { PlanetesimalFormation } from "./researchComponents/PlanetesimalFormation";
import { PlanetaryEmbryoFormation } from "./researchComponents/PlanetaryEmbryoFormation";
import { PlanetFormationRings } from "./researchComponents/PlanetFormationRings";
import { PopulationSynthesis } from "./researchComponents/PopulationSynthesis";


import { PaperEmbryoFormationTwo } from "./paperComponents/PaperEmbryoFormationTwo"
import { PaperEmbryoFormationOne } from "./paperComponents/PaperEmbryoFormationOne"
import { PaperPlanetesimalFormation } from "./paperComponents/PaperPlanetesimalFormation"
import { PaperEmbryoGenerations } from "./paperComponents/PaperEmbryoGenerations"




export  function ProfilePage(){

	const [showScian, setShowScian] = useState(false);
	const [showPtsF,   setShowPtsF] = useState(false);
	const [showPtEF,   setShowPtEF] = useState(false);
	const [showPtRF,   setShowPtRF] = useState(false);
	const [showPPS,   setShowPPS]   = useState(false);

	return(
		<>
		
		<div className={`${`container`}  ${styles.customBorderPage}  ${styles.gradientBack}`}>
			<div className={`  ${`pt-0`} ${`row`} ${`d-flex`} ${`justify-content-center`} `} style={{maxWidth: "1600px"}}>
				<div className = {`  ${`col-md-auto`} ${`justify-content-center`} `}>
					<ProfilePicture />
				</div>
				<div id={'projects'} className={`${`col`} ${`justify-content-center`}`} style={{minWidth:'400px'}}>
					<Header  />
					<Keywords 
					showScian={showScian} 
					setShowScian={setShowScian}
					showPtsF={showPtsF} 
					setShowPtsF={setShowPtsF}
					showPtEF={showPtEF} 
					setShowPtEF={setShowPtEF}
					showPtRF={showPtRF} 
					setShowPtRF={setShowPtRF}
					showPPS={showPPS} 
					setShowPPS={setShowPPS}
					/>
				<div className= 'w3-center w3-padding'>

						<Scian showScian={showScian} />
						<PlanetesimalFormation showPtsF={showPtsF} />
						<PlanetaryEmbryoFormation showPtEF={showPtEF}/>
						<PlanetFormationRings showPtRF={showPtRF}/>
						<PopulationSynthesis showPPS={showPPS}/>

					<a name="publications"></a>
						<div id={'publications'} style={{paddingTop:'20px'}}>
							<h4 style = {{fontSize: '32px' , marginTop:'50px'}}>
								Selected Publications
							</h4>
						</div>
						<PaperEmbryoGenerations />
						<PaperEmbryoFormationTwo />
						<PaperEmbryoFormationOne />
						<PaperPlanetesimalFormation />
					</div>
				</div>
			</div>
		</div>
		</>

	);

};