import React, { Component } from "react";

class Resume extends Component {
  render() {
    return (
      <>
       

        <div id="rsmb"></div>
        <p className="resume">Resume</p>
        <p id="Education">Education</p>
        <div className="box1">
          <p id="yeaar"> 2010 - 2020 </p>
          <p id="Schl">School Name </p>
          <p id="Schlloc">School Location </p>
          <p id="Schln">Vivekanand Vidya Vihar , Chandrawatiganj </p>
          <p id="Schllocn">
            Address: 1, Fatehabad Chandrawatiganj,<br></br> Madhya Pradesh
            456006{" "}
          </p>
        </div>
        <div className="box2">
          <p id="yeaar"> 2021 - Present </p>
          <p id="Schl">University Name </p>
          <p id="Schlloc">University Location </p>
          <p id="Schln">Avantika University , Ujjain </p>
          <p id="Schllocn">
            Vishwanathpuram, Lekoda,<br></br> Madhya Pradesh 456006{" "}
          </p>
          <p id="degl"> Degree Level</p>
          <p id="degn">Bachelor of Technology in Computer Engineering </p>
        </div>
        <div className="skbg">
          <div className="box3">
            <p id="skillset">Skillset</p>
            <div id="s1b"> </div>
            <div id="s2b"> </div>
            <div id="s3b"> </div>
            <p id="s1">Frontend/Design</p>
            <p id="s2">Programming</p>
            <p id="s3">Technical analysis</p>
            <p id="langt">Languages</p>
            <div id="l1b"> </div>
            <div id="l2b"> </div>
            <p id="l1">Hindi</p>
            <p id="l2">English</p>
          </div>
        </div>
      </>
    );
  }
}

export default Resume;
