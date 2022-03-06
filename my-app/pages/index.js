import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header } from '../components/Header'
import { Navbar } from '../components/navbar/Navbar'
import { ProfilePage } from '../components/ProfilePage'
//import background from '../public/winter_landscape.jpg';



export default function Home() {

  
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-colors-2021.css"/>
        
      </Head>
      
      <Navbar />
      <main className={styles.main}>
        <ProfilePage />
      </main>

      <footer className={`${`justify-content-center`} ${`d-flex`}`}>
			<a href="#" style={{maxWidth: '200px'}} className={` ${'btn'} ${`justify-content-center`} ${`d-flex`}`}>
				<i className={`${`fa`} ${`fa-arrow`} `}>
				</i>to the top
			</a>
			</footer>
    </div>
  )
}
