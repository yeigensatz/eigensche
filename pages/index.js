import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Section1 from "../components/section1";
import Fullpage from "../components/fullpage";
import Section2 from "../components/section2";
import Footer from "../components/footer"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eigensche'</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section1></Section1>
      <Section2></Section2>
      <Footer></Footer>
    </div>
  );
}
