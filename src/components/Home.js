import "./Home.css";

function Home() {
  return (
    <>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">

          <div className="carousel-item active" data-bs-interval="3000">
            <img
              src="/pic/computer2.png"
              className="d-block w-100"
              alt="Slide 1"
              style={{ height: "390px", objectFit: "cover" }}
            />
          </div>

          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="/pic/computer1.png"
              className="d-block w-100"
              alt="Slide 2"
              style={{ height: "390px", objectFit: "cover" }}
            />
          </div>

          <div className="carousel-item">
            <img
              src="/pic/computer.png"
              className="d-block w-100"
              alt="Slide 3"
              style={{ height: "390px", objectFit: "cover" }}
            />
          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="why-section">
  <h2 className="why-title">Why Choose Our Institute</h2>

  <div className="container">
    <div className="row text-center g-4">

      <div className="col-12 col-sm-6 col-md-4 feature-box">
        <i className="bi bi-laptop"></i>
        <h5>Computer Education</h5>
        <p>Learn modern computer skills and software.</p>
        <img src="/pic/computer2.jpeg" ></img>
      </div>

      <div className="col-12 col-sm-6 col-md-4 feature-box">
        <i className="bi bi-book"></i>
        <h5>Quality Learning</h5>
        <p>Experienced teachers and practical training.</p>
        <img src="/pic/Qulity.png"></img>
      </div>

      <div className="col-12 col-sm-6 col-md-4 feature-box">
        <i className="bi bi-mortarboard"></i>
        <h5>Certified Courses</h5>
        <p>Government approved certification programs.</p>
        <img src="/pic/certified.png"></img>
      </div>

      <div className="col-12 col-sm-6 col-md-4 feature-box">
        <i className="bi bi-people"></i>
        <h5>Expert Trainers</h5>
        <p>Professional instructors with industry knowledge.</p>
        <img src="/pic/export.png"></img>
      </div>

      <div className="col-12 col-sm-6 col-md-4 feature-box">
        <i className="bi bi-pc-display"></i>
        <h5>Practical Training</h5>
        <p>Hands-on computer lab practice.</p>
        <img src="/pic/Practical.png"></img>
      </div>

      <div className="col-12 col-sm-6 col-md-4 feature-box">
        <i className="bi bi-briefcase"></i>
        <h5>Career Support</h5>
        <p>Guidance for jobs and career development.</p>
        <img src="/pic/careers.png"></img>
      </div>

    </div>
  </div>
</section>
    </>
  );
}

export default Home;