export default function Page() {
  return (
    <section id="contact" className="contact-section pt-100 pb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-10">
            <div className="section-title text-center mb-50">
              <h1>Contact Us</h1>
              <p>
                Have a project in mind or need help?  
                Fill out the form below and we’ll get back to you soon.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form className="contact-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-30">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-30">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group mb-30">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group mb-30">
                    <textarea
                      rows={5}
                      className="form-control"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12 text-center">
                  <button
                    type="submit"
                    className="main-btn btn-hover"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
