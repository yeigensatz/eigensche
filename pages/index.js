<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0f79125 (Initial)
import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Section1 from "../components/section1";
import Fullpage from "../components/fullpage";
import Section2 from "../components/section2";
<<<<<<< HEAD
<<<<<<< HEAD
import Footer from "../components/footer";
import dynamic from "next/dynamic";
import StaticContent from "../components/staticContent";
=======
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
>>>>>>> 7f00a0f (Initial commit from Create Next App)
=======
>>>>>>> 0f79125 (Initial)
=======
import Footer from "../components/footer"
>>>>>>> 8f2e948 (very cool)

export default function Home() {
  return (
    <div className={styles.container}>
<<<<<<< HEAD
      <StaticContent>
        <Head>
          <title>Eigensche'</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Section1></Section1>
        <Section2></Section2>
        <Footer></Footer>
      </StaticContent>
    </div>
  );
=======
      <Head>
        <title>Eigensche'</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section1></Section1>
      <Section2></Section2>
      <Footer></Footer>
    </div>
<<<<<<< HEAD
  )
>>>>>>> 7f00a0f (Initial commit from Create Next App)
=======
  );
>>>>>>> 0f79125 (Initial)
}
