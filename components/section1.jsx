import React from "react";
import styles from "../styles/Section1.module.css";
import Link from "next/link";

export default function Section1() {
  return (
    <section id="section1" className="section1">
      <div className="hero min-h-screen bg-black-100">
        <div className="hero-content text-center">
          <div className="max-w-md">
<<<<<<< HEAD
<<<<<<< HEAD
            <h1 className="text-5xl font-bold">
              <a href="/#">Eigensche' Republik</a>
            </h1>
=======
            <h1 className="text-5xl font-bold">Eigensche' Republik</h1>
>>>>>>> 0f79125 (Initial)
=======
            <h1 className="text-5xl font-bold">
              <a href="/#">Eigensche' Republik</a>
            </h1>
>>>>>>> 4197f06 (footer)
            <p className="py-6">
              Die Eigensche' Republik ist eine im Wirtschafts & Recht Unterricht
              gegründete Nation. Ihre geographische Position liegt auf einer
              Insel. Die Republik ist eine offene, öffentliche, kulturell freie
              und wirtschaftliche Nation. Sie hat ein funktionierendes
              Parteiensystem, welches alle Sparten des Volkes vertritt.
            </p>
            <Link href="#section2" scroll={true}>
              <button className="btn btn-primary">Lerne mehr</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
