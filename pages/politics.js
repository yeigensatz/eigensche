import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Section1 from "../components/section1";
import Fullpage from "../components/fullpage";
import Section2 from "../components/section2";
import StaticContent from "../components/staticContent";

export default function Home() {
  return (
    <div className={styles.container}>
      <StaticContent>
        <Head>
          <title>Eigensche'</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className=""></div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://placeimg.com/260/400/arch"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </StaticContent>
    </div>
  );
}
