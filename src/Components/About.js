import React, { Component } from "react";
import profile from "../Images/Vijay.jpg";
import "../Componetscss/about.css";

class About extends Component {
  render() {
    return (
      <div className="about">
        <h1 id="intro">Hello</h1>
        <pre id="name"> My name is Vijay Choudhary</pre>
        <pre id="int"> I am a Student of Computer Science Engineering </pre>
        <img className="img" src={profile} />
        <div id="abb">
          <p>About Me</p>
        </div>
      </div>
    );
  }
}

export default About;
