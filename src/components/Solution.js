import React from "react";
import "./Solution.css";

function Solution() {
  return (
    <div className="solution-page">
      <h1 className="solution-title">Solutions</h1>

      <div className="solution-grid">
        <div className="solution-img">
          <img src="/pic/cyber.png" alt="Cyber Security" />
        </div>

        <div className="solution-text">
          <h3>cyberPX</h3>
          <p>
            Many agencies struggle with completing annual A&A
            assessments or other required cybersecurity tasks.
            Our process helps our clients speed up the assessment
            process and achieve security compliance efficiently.
          </p>
          <button
            className="btn-link"
            onClick={() => alert("Download will be available soon")}>
            Download our cyberPX Information Sheet
          </button>
        </div>

        <div className="solution-text center">
          <h3>identityPX</h3>
          <p>More information coming soon.</p>
        </div>

        <div className="solution-img">
          <img src="/pic/identity1.png" alt="Identity Security" />
        </div>
      </div>
    </div>
  );
}

export default Solution;