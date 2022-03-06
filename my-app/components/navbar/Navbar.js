import 'bootstrap/dist/css/bootstrap.css'
import styles from './Navbar.module.css';
import Link from 'next/link'





export function Navbar(){

	return(
        <nav className={`${styles.navbar}   ${`navbar`} ${`sticky-top`} ${`navbar-expand-lg`} ${`navbar-light`} ${`bg-light`}  `} style={{navbarPadding: '20px'}}>
        
        
        
        <Link href={'/'}>
        <a className={`${styles.logoButton} ${`navbar-brand`} ${styles.navLink}  ${`d-flex`} ${`justify-content-center`}`} >
        
        {/*<img src="logoSmall.png" style={{ padding:'5px'}}alt="Avatar" />*/}
        <p style={{paddingLeft:'10px', paddingTop:'5px'}}> Home </p>
        </a>
        </Link>
        <button className={`${`navbar-toggler`}  ${styles.roomButton} `} type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div class=" navbar-collapse justify-content-end" id="navbarSupportedContent">
                <Link href={'/#projects'}>
                    <button className={`${styles.navButton}`}> projects </button>
                </Link>
                <Link href={'/#publications'}>
                    <button className={`${styles.navButton}`}> publications </button>
                </Link>
            </div>
        </div>


        </nav>
       
	);

};