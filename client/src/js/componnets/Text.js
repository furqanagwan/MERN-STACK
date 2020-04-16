import React from "react";
import ReactTyped from "react-typed";
import "react-typed/dist/animatedCursor.css";

export default class Title extends React.Component {
  render() {
    return (
      <div className="Title-Container">
        <span className="IntroText">
          Hi, my name is Furqan Agwan
        </span>
        <br></br>
        <ReactTyped
          className="SubText"
          strings={["a developer","a UI/UX designer","a sports fanatic","a techie","a gamer","a coffee addict"]}
          typeSpeed={150}
          backSpeed={100}
          backDelay={200}
          loop={true}
          smartBackspace={true}>
        </ReactTyped>
      </div>
    );
  }
}
