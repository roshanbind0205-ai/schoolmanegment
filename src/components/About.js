import "./About.css";

function About() {
  return (
    <div className="about-container">
      
      <h1 className="about-title">About Us</h1>

      <p className="about-text">
        Welcome to our website! We are dedicated to providing premium quality 
        services and digital solutions. Our mission is to deliver the best 
        experience to our users with innovation and creativity.
      </p>

      <div className="about-card-container">

        <div className="about-card">
          <h2>🌟 Our Mission</h2>
          <p>
            To deliver high-quality services that solve real-world problems and
            add value to businesses and individuals.
          </p>

          <img src="/pic/About1.png"></img>
        </div>

        <div className="about-card">
          <h2>🚀 Our Vision</h2>
          <p>
            To become a trusted global brand in technology, development and
            customer experience.
          </p>
          <img src="/pic/About2.png"></img>
        </div>

        <div className="about-card">
          <h2>💼 What We Do</h2>
          <p>
            Software Development, Digital Solutions, Web Designing, Business Growth 
            Strategy & Customized Services.
          </p>
          <img src="/pic/About3.png"></img>
        </div>

      </div>

    </div>
  );
}

export default About;