import React, { Component } from "react";
import Project1 from "../Images/p1.png";
import Project2 from "../Images/p2.png";

class Project extends Component {
  render() {
    let p1 = "Project 1 Image ";
    let p2 = "Project 2 Image ";
    return (
      <>
        {" "}
        <div id="rsmb"></div>
        <p className="resume">Projects</p>
        <div className="box1">
          <pre id="Proname">Shopping Web Application</pre>
          <label id="sbd"> </label>
          <pre id="protitle">
            This project is a web based shopping system for an existing<br></br>
            shop.The project objective is to deliver the online shopping
            <br></br>
            application
          </pre>

          <img className="Project1i" src={Project1} alt={p1} />
        </div>
        <div className="box2">
          <pre id="Proname">
            PHISAAR:{" "}
            <p className="phi">
              Pick and Holder Intelligent Self Automatic Advance Robot{" "}
            </p>
          </pre>
          <label id="sbd"> </label>
          <pre id="protitle">
            This project is basically designed for industry and big courier{" "}
            <br></br>companies.Our project can pick any object by the vacuum .
            <br></br>It is so advance robot and a advance version of robotic.
            <br></br> arm because it can move able anywhere and can hold
            <br></br>and also arrange the box from one place to another place.{" "}
            <br></br>It is so useful because it can work without human and{" "}
            <br></br> can work too faster then them .
          </pre>
          <img className="Project2i" src={Project2} alt={p2} />
        </div>
        <div className="skbg">
          <div className="box3">
            <label id="sbd"> </label>
            <pre id="Proname">Project name 03 </pre>
          </div>
        </div>
      </>
    );
  }
}

export default Project;
