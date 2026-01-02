import Image from "next/image";
export default function Page(){
  return (
    <>
    <section className="counter-up-section pt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="counter-up-content mb-50">
                <div className="section-title mb-40">
                  <h1 className="mb-20 wow fadeInUp" data-wow-delay=".2s">Why we are the best, Why you hire?</h1>
                  <p className="wow fadeInUp" data-wow-delay=".4s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                </div>
                <div className="counter-up-wrapper">
                  <div className="row">
                    <div className="col-lg-6 col-sm-6">
                      <div className="single-counter">
                        <div className="icon color-1">
                          <i className="lni lni-emoji-smile"></i>
                        </div>
                        <div className="content">
                          <h1 id="secondo1" className="countup" cup-end="3642" cup-append=" ">3642</h1>
                          <span>Happy client</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="single-counter">
                        <div className="icon color-2">
                          <i className="lni lni-checkmark"></i>
                        </div>
                        <div className="content">
                          <h1 id="secondo2" className="countup" cup-end="5436" cup-append=" ">5436</h1>
                          <span>Project done</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="single-counter">
                        <div className="icon color-3">
                          <i className="lni lni-world"></i>
                        </div>
                        <div className="content">
                          <h1 id="secondo3" className="countup" cup-end="642" cup-append="K">642</h1>
                          <span>Live Design</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="single-counter">
                        <div className="icon color-4">
                          <i className="lni lni-users"></i>
                        </div>
                        <div className="content">
                          <h1 id="secondo4" className="countup" cup-end="42" cup-append=" ">42</h1>
                          <span>Creative designer's</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="counter-up-img mb-50">
                <Image src="assets/img/counter-up/counter-up-img.svg" alt="Hero image" width={500} height={500} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section img-bg pt-110 pb-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-7">
              <div className="section-title mb-50">
                <h1 className="mb-20 wow fadeInUp" data-wow-delay=".2s">Have any project in you mind? You can hire</h1>
                <p className="wow fadeInUp" data-wow-delay=".4s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5">
              <div className="cta-btn text-lg-end mb-50">
                <a href="javascript:void(0)" className="main-btn btn-hover text-uppercase">LET'S START YOUR PROJECT</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    
  );
}