import React from "react";
import { ReactDOM } from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";

export default function Fullpage() {
  return (
    <ReactFullpage
      licenseKey={process.env.REACT_APP_FULLPAGE_KEY}
      scrollingSpeed={1000}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section1">
              <div className="hero min-h-screen bg-black-100">
                <div className="hero-content text-center">
                  <div className="max-w-lg">
                    <h1 className="text-5xl font-bold">Eigensche' Republik</h1>
                    <p className="py-6">
                      Die Eigensche' Republik ist eine im Wirtschafts & Recht
                      Unterricht gegründete Nation. Ihre geographische Position
                      liegt auf einer Insel. Die Republik ist eine offene,
                      öffentliche, kulturell freie und wirtschaftliche Nation.
                      Sie hat ein funktionierendes Parteiensystem, welches alle
                      Sparten des Volkes vertritt.
                    </p>
                    <button className="btn btn-primary">Lerne mehr</button>
                  </div>
                </div>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
