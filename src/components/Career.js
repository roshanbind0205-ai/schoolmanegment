import React from "react";
import "./Career.css";

function Career() {
  return (
    <div className="career-page">

      <img className="career-banner" src="/pic/career.jpg" alt="career" />

      <div className="career-content container">

        <div className="career-text">
          <h2>Fast-Paced,<br/>Innovative<br/>and Fun.</h2>
          <p>
            We value an inclusive work environment, nurturing the careers of our
            employees and fostering a great work-life balance.
            Sounds awesome right?
          </p>

          <p className="career-links">
            careers@prnxllc.com <br/>
            Linkedin
          </p>
        </div>

        <div className="career-image">
          <img src="/pic/career1.png" alt="career team"/>
        </div>

      </div>

      <div className="career-openings container">
        <h3>Current Openings</h3>

        <div className="job">
          <h4>General Application for Candidates with TS/SCI and FS Poly</h4>
          <p>Location: DMV</p>
        </div>

        <div className="job">
          <h4>Sr. AWS Engineer</h4>
          <p>Location: Arlington, Virginia, United States</p>
        </div>
      </div>

    </div>
  );
}

export default Career;