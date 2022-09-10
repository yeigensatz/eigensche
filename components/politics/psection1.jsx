import React from "react";
import Image from "next/image";
<<<<<<< HEAD
import map from "/public/images/mappolitics.png";

export default function PSection1() {
  return (
    <section id="psection1" className="psection1 bg-base-100">
=======

export default function PSection1() {
  return (
    <section id="psection1" className="psection1">
>>>>>>> dab6214 (lol)
      <div className="hero min-h-screen bg-black-100">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
<<<<<<< HEAD
              <a href="/politics">Politisches System der Eigensche'</a>
=======
              <a href="/#">Politisches System der Eigensche'</a>
>>>>>>> dab6214 (lol)
            </h1>
            <p className="py-6">
              In der Eigenschen Republik gibt es mehrere Parteien, welche
              verschiedene Interessensgruppierungen verfolgt. Dies inkludierrt
              links, rechts und gepresst. Momentan existiert 12 Parteien, wovon
              2 Jungparteien sind. Die Parteisitze sind auf dem folgenden Bild
              zu sehen:
<<<<<<< HEAD
              <img
                src="https://i.ibb.co/X3HPfck/Screenshot-2022-09-10-093847.png"
                className="mx-auto my-6 max-w-m "
              />
=======
              <Image
                src="/images/politics/parteisitze.png"
                alt="Karte der Parteisitze"
                width={500}
                height={500}
              ></Image>
>>>>>>> dab6214 (lol)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
