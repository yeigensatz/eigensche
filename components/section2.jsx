import React from "react";
import styles from "../styles/Section2.module.css";
import { GiPublicSpeaker, GiBookmark, GiBookmarklet } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { BsFillGeoAltFill } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";

export default function Section2() {
  return (
    <section id="section2" className="text-white bg-gray-900">
      <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ein ausgeklügeltes Rechtssystem
          </h2>

          <p className="mt-4 text-gray-300">
            Die Eigensche' Republik ist ein ordentlicher Rechtsstaat. Wir sind
            Unterstützer der direkten Demokratie, und unterstützen unsere
            Konkurrenzparteien bei Ihren Werbungen.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            className="block p-8 border border-gray-800 shadow-xl transition rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
            href="/politics"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <GiPublicSpeaker />
            </svg>

            <h3 className="mt-4 text-xl font-bold text-white">Politik</h3>

            <p className="mt-1 text-sm text-gray-300">
              Unsere Politik spannt sich von linksextrem, nach rechtsextrem.
              Natürlich dürfen wir nicht die gepressten Parteien vergessen. Wir
              sind extrem froh um neue Politikbegeisterte, welche der
              Eigennsche' Staatspartei beitreten wollen
            </p>
          </a>

          <a
            className="block p-8 border border-gray-800 shadow-xl transition rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
            href="/geschichte"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <GiBookmark />
            </svg>

            <h3 className="mt-4 text-xl font-bold text-white">Geschichte</h3>

            <p className="mt-1 text-sm text-gray-300">
              Vor tausenden von Jahren, existierte die Eigensche' Republik noch
              nicht. Sie war aber bereits in Planung, durch den Sonnengott der
              fernen Mostländer. Eine spannende Geschichte erwartet Sie, welche
              im Staatsmuseum in Eigern & Tilling begutachtet werden kann.
              (Eintritt 25₣)
            </p>
          </a>

          <a
            className="block p-8 border border-gray-800 shadow-xl transition rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
            href="/bewohner"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <IoIosPeople />
            </svg>

            <h3 className="mt-4 text-xl font-bold text-white">Bewohner</h3>

            <p className="mt-1 text-sm text-gray-300">
              Wir haben eine ausgeklügelte Liste der Bewohner der Eigensche'
              Republik. Wir haben mehrere Minister, welche efficient und fair
              regieren. Diese Liste liegt in einer Datenbank und kann ergänzt
              werden.
            </p>
          </a>

          <a
            className="block p-8 border border-gray-800 shadow-xl transition rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
            href="/geography"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <BsFillGeoAltFill />
            </svg>

            <h3 className="mt-4 text-xl font-bold text-white">
              Geographische Lage
            </h3>

            <p className="mt-1 text-sm text-gray-300">
              Die Eigensche' Republik wurde nach dem Sonnengott der fernen
              Mostländer gegründet. Sie liegt in der weiten Gaisee, welche nach
              der Tilling-Dynastie kam.
            </p>
          </a>

          <a
            className="block p-8 border border-gray-800 shadow-xl transition rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
            href="/kundschaften"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <GiBookmarklet></GiBookmarklet>
            </svg>

            <h3 className="mt-4 text-xl font-bold text-white">Kundschaften</h3>

            <p className="mt-1 text-sm text-gray-300">
              Alle Kundschaften transkribiert und archiviert auf dieser Seite.
              Diese können sein von:
              <ul>
                <li>- Parteipräsidien</li>
                <li>- Bekannte Personen der Republik</li>
                <li>- Regierung und mehr</li>
              </ul>
            </p>
          </a>

          <a
            className="block p-8 border border-gray-800 shadow-xl transition rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
            href="/documents"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <HiDocumentText />
            </svg>

            <h3 className="mt-4 text-xl font-bold text-white">
              Wichtige Dokumente
            </h3>

            <p className="mt-1 text-sm text-gray-300">
              Wichtige Dokumente, digitalisiert. Auf Papyrus dürft ihr sie gerne
              im Eigenschen Staatsmuseum in Eigern & Tilling besuchen. (Eintritt
              25₣)
            </p>
          </a>
        </div>

        <div className="mt-12 text-center">
          <a
            className="inline-flex items-center px-8 py-3 mt-8 text-white bg-pink-600 border border-pink-600 rounded hover:bg-transparent active:text-pink-500 focus:outline-none focus:ring"
            href="/get-started"
          >
            <span className="text-sm font-medium"> Aktuelle Initiativen </span>

            <svg
              className="w-5 h-5 ml-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
