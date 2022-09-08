import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";
import Section1 from "../components/section1";

const originalColors = [
  "blue",
  "#0798ec",
  "#fc6c7c",
  "#435b71",
  "orange",
  "blue",
  "purple",
  "yellow",
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsColor: [...originalColors],
      fullpages: [
        {
          text: "Section 1",
        },
        {
          text: "Section 2",
        },
        {
          text: "Section 3",
        },
      ],
    };
  }

  onLeave(origin, destination, direction) {
    console.log("onLeave", { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }

  render() {
    const { fullpages } = this.state;

    if (!fullpages.length) {
      return null;
    }

    return (
      <div className="App">
        <Head>
          <title>My styled page</title>
          <link href="/static/styles.css" rel="stylesheet" />
        </Head>
        <ReactFullpage
          navigation
          onLeave={this.onLeave.bind(this)}
          // scrollHorizontally = {true}
          sectionsColor={this.state.sectionsColor}
          render={(comp) =>
            console.log("render prop change") || (
              <ReactFullpage.Wrapper>
                {fullpages.map(({ text }) => (
                  <div key={text} className="section">
                    <Section1 />
                  </div>
                ))}
              </ReactFullpage.Wrapper>
            )
          }
        />
      </div>
    );
  }
}

export default App;
