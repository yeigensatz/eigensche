import React from "react";
import Image from "next/image";
import map from "/public/images/mappolitics.png";

export default function PSection1() {
  return (
    <section id="psection1" className="psection1 bg-base-100">
      <div className="hero min-h-screen bg-black-100">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              <a href="/politics">Politisches System der Eigensche'</a>
            </h1>
            <p className="py-6">
              In der Eigenschen Republik gibt es mehrere Parteien, welche
              verschiedene Interessensgruppierungen verfolgt. Dies inkludierrt
              links, rechts und gepresst. Momentan existiert 12 Parteien, wovon
              2 Jungparteien sind. Die Parteisitze sind auf dem folgenden Bild
              zu sehen:
              <img
                src="https://i.ibb.co/X3HPfck/Screenshot-2022-09-10-093847.png"
                className="mx-auto my-6 max-w-m "
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
