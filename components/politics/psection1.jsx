import React from "react";
import Image from "next/image";

export default function PSection1() {
  return (
    <section id="psection1" className="psection1">
      <div className="hero min-h-screen bg-black-100">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              <a href="/#">Politisches System der Eigensche'</a>
            </h1>
            <p className="py-6">
              In der Eigenschen Republik gibt es mehrere Parteien, welche
              verschiedene Interessensgruppierungen verfolgt. Dies inkludierrt
              links, rechts und gepresst. Momentan existiert 12 Parteien, wovon
              2 Jungparteien sind. Die Parteisitze sind auf dem folgenden Bild
              zu sehen:
              <Image
                src="/images/politics/parteisitze.png"
                alt="Karte der Parteisitze"
                width={500}
                height={500}
              ></Image>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
