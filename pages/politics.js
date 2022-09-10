import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
<<<<<<< HEAD
<<<<<<< HEAD
import StaticContent from "../components/staticContent";
import PSection1 from "../components/politics/psection1";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="bg-base-100">
      <StaticContent>
        <Head>
          <title>Eigensche'</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <PSection1></PSection1>

        <div className="hero min-h-screen bg-base-200 rounded-lg">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="/static/GR.png"
              className="max-w-sm rounded-lg shadow-2xl"
              alt="GR"
            />
            <div>
              <h1 className="text-5xl font-bold">Die grüne Rechte</h1>
              <p className="py-6">
                Die grüne Rechte ist je nach Laune, rechts oder links.
                Hauptsache extrem!
              </p>
            </div>
          </div>
        </div>
        <div className="divider "></div>
        <div className="hero min-h-screen bg-base-200 rounded-lg">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="/static/WUEP.png"
              className="max-w-sm rounded-lg shadow-2xl"
              alt="WUEP"
            />
            <div>
              <h1 className="text-5xl font-bold">
                What, You Egg-Partei (WUEP)
              </h1>
              <p className="py-6 max-w-lg">
                Sie legen gerne Eier, sogar sehr gerne - Aber nur von auf Befehl
                ihres Anführers, der heilige Gaiser. Ausserdem auch nur wie ein
                Maschinengewehr.
              </p>
            </div>
          </div>
        </div>
        <div className="divider "></div>
        <div className="hero min-h-screen bg-base-200 rounded-lg">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="/static/FMP.png"
              className="max-w-sm rounded-lg shadow-2xl"
              alt="FMP"
            />
            <div>
              <h1 className="text-5xl font-bold">
                Freie Mostpartei. Die Trinkende
              </h1>
              <p className="py-6 max-w-lg">
                Sie setzen sich für Früchte und Gemüse jeglicher Art ein. Das
                friedliche Zusammenleben zwischen Menschen und Früchten ist ihr
                höchstes Gut.
              </p>
            </div>
          </div>
        </div>
        <div className="divider "></div>
        <div className="hero min-h-screen bg-base-200 rounded-lg">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="/static/LKP.png"
              className="max-w-sm rounded-lg shadow-2xl"
              alt="LKP"
            />
            <div>
              <h1 className="text-5xl font-bold">Die Liberal-Konservativen</h1>
              <p className="py-6 max-w-lg">
                Die schizophrenen, so wie sie sich nennen, sind halb liberal und
                halb konservativ. Bei der Zuordnung sind sie deshalb im
                Wurmlochkreis abgebildet. Mehr Kirche, weniger Staat!
              </p>
            </div>
          </div>
        </div>
        <div className="divider "></div>
        <div className="hero min-h-screen bg-base-200 rounded-lg">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="/static/JKP.png"
              className="max-w-sm rounded-lg shadow-2xl"
              alt="JKP"
            />
            <div>
              <h1 className="text-5xl font-bold">
                Johanniskraut-Fanclub-Partei
              </h1>
              <p className="py-6 max-w-lg">
                Die kontroverseste Partei im Staat. Eine grüne rechte Partei,
                welche sich ausschliesslich für den Schutz und Förderung
                einheimischer Arten einsetzt. Man beachte: Sie sind mehr als nur
                Schnittlauch!
              </p>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="hero min-h-screen bg-base-200 rounded-lg">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="/static/LDD.png"
              className="max-w-sm rounded-lg shadow-2xl"
              alt="LDD"
            />
            <div>
              <h1 className="text-5xl font-bold">
                Liberal-Demokratische Despoten
              </h1>
              <p className="py-6 max-w-lg">
                Die erfolgreichste Partei der Sebastiner setzt auf eine starke
                Regierung, welche sich für den Schutz der Demokratie einsetzt.
                Sie wollen die absolute Sicherheit des Eigensche's Volkes.
              </p>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="hero min-h-screen bg-base-200 rounded-lg">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="/static/BR.png"
              className="max-w-sm rounded-lg shadow-2xl"
              alt="BR"
            />
            <div>
              <h1 className="text-5xl font-bold">Die Brombeeren</h1>
              <p className="py-6 max-w-lg">
                Die Jungpartei der FMP, linker orientiert als deren
                Mutterpartei, verfolgt jedoch dieselben Ziele. Es sind die
                sogenannten Nachwuchsmoster, welche jung, frisch, fruchtig und
                saftig sind.
              </p>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="hero min-h-screen bg-base-200 rounded-lg">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="/static/KKP.png"
              className="max-w-sm rounded-lg shadow-2xl"
              alt="KKP"
            />
            <div>
              <h1 className="text-5xl font-bold">
                Kommunistische Knuddelpartei
              </h1>
              <p className="py-6 max-w-lg">
                Sie setzen sich für die Errichtung eines marxistischen Staates
                ein. Ob das wohl klappt? Jedoch hat diese Partei auch eine
                Schokoladenseite: Sie schützt alle niedlichen Tierarten.
              </p>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="hero min-h-screen bg-base-200 rounded-lg">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="/static/ESP.png"
              className="max-w-sm rounded-lg shadow-2xl"
              alt="ESP"
            />
            <div>
              <h1 className="text-5xl font-bold">Eigensche' Staatspartei</h1>
              <p className="py-6 max-w-lg">
                Die Staatspartei, welche sich für einen grossen und gelungenen
                Staat einsetzt. Dieser soll regieren und uns allen das gleiche
                bieten. Ein souveränes Souverän fürs Volk.
              </p>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="hero min-h-screen bg-base-200 rounded-lg">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="/static/SJ.png"
              className="max-w-sm rounded-lg shadow-2xl"
              alt="SJ"
            />
            <div>
              <h1 className="text-5xl font-bold">
                Staatliche Jugend / Jeunesse de l'État
              </h1>
              <p className="py-6 max-w-lg">
                Jungpartei der ESP, die Staatsliebhaber welche den Staat sehr
                schätzen. Sie sehen die Sicherheit, die Vorteile und die Profite
                des Staates. Weniger Freiheit, MEHR STAAT!
              </p>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="hero min-h-screen bg-base-200 rounded-lg">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="/static/EWP.png"
              className="max-w-sm rounded-lg shadow-2xl"
              alt="EWP"
            />
            <div>
              <h1 className="text-5xl font-bold">
                Eigensche' wissenschaftliche Partei
              </h1>
              <p className="py-6 max-w-lg">
                Politik mit Wissen durchsetzten. Dies ist ihr Motto, welches sie
                mit Fakten und Geschehnissen vergangener Zeiten erarbeiten. Sie
                denken in Fakten, rechnen statt reden und wissen statt
                behaupten.
              </p>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="hero min-h-screen bg-base-200 rounded-lg">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="/static/CWS.png"
              className="max-w-sm rounded-lg shadow-2xl"
              alt="CWS"
            />
            <div>
              <h1 className="text-5xl font-bold">
                Christliche Wätterschmöcker-Partei
              </h1>
              <p className="py-6 max-w-lg">
                Sie schmecken das Wetter. Sie schmecken. Sie schmecken. Und sie
                sind katholisch. Vielleicht.
              </p>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </StaticContent>
=======
import Section1 from "../components/section1";
import Fullpage from "../components/fullpage";
import Section2 from "../components/section2";
=======
>>>>>>> dab6214 (lol)
import StaticContent from "../components/staticContent";
import PSection1 from "../components/politics/psection1";

export default function Home() {
  return (
    <div className={styles.container}>
<<<<<<< HEAD
      <Head>
        <title>Eigensche'</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section1></Section1>
      <Section2></Section2>
>>>>>>> 0f79125 (Initial)
=======
      <StaticContent>
        <Head>
          <title>Eigensche'</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <PSection1></PSection1>


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
>>>>>>> 1454ed2 (yuhui)
    </div>
  );
}
