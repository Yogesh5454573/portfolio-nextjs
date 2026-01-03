export default function Page() {
  return (
    <section id="skills" className="skills-section pt-100 pb-100">
      <div className="container">

        {/* Section Title */}
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-10">
            <div className="section-title text-center mb-50">
              <h1>My Skills</h1>
              <p>
                A powerful blend of design, development, and problem-solving skills
                that deliver high-quality digital experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="row">
          
          {/* Skill Item */}
          <div className="col-md-6 mb-40">
            <div className="skill-item">
              <div className="d-flex justify-content-between mb-2">
                <h5>HTML / CSS</h5>
                <span>95%</span>
              </div>
              <div className="progress">
                <div className="progress-bar bg-success" style={{ width: "95%" }}></div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-40">
            <div className="skill-item">
              <div className="d-flex justify-content-between mb-2">
                <h5>JavaScript</h5>
                <span>90%</span>
              </div>
              <div className="progress">
                <div className="progress-bar bg-info" style={{ width: "90%" }}></div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-40">
            <div className="skill-item">
              <div className="d-flex justify-content-between mb-2">
                <h5>React / Next.js</h5>
                <span>88%</span>
              </div>
              <div className="progress">
                <div className="progress-bar bg-primary" style={{ width: "88%" }}></div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-40">
            <div className="skill-item">
              <div className="d-flex justify-content-between mb-2">
                <h5>PHP / Laravel</h5>
                <span>85%</span>
              </div>
              <div className="progress">
                <div className="progress-bar bg-warning" style={{ width: "85%" }}></div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-40">
            <div className="skill-item">
              <div className="d-flex justify-content-between mb-2">
                <h5>MySQL / MongoDB</h5>
                <span>80%</span>
              </div>
              <div className="progress">
                <div className="progress-bar bg-danger" style={{ width: "80%" }}></div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-40">
            <div className="skill-item">
              <div className="d-flex justify-content-between mb-2">
                <h5>UI / UX Design</h5>
                <span>90%</span>
              </div>
              <div className="progress">
                <div className="progress-bar bg-dark" style={{ width: "90%" }}></div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
