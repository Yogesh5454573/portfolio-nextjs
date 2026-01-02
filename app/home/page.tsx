import Image from "next/image";
export default function Page(){
  return (
   <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <span className="wow fadeInLeft" data-wow-delay=".2s">Welcome To Bliss</span>
              <h1 className="wow fadeInUp" data-wow-delay=".4s">
                You are using free lite version of Bliss.
              </h1>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                Please, purchase full version of the template to get all sections, elements and permission to remove footer credits.
              </p>
              <a href="javascript:void(0)" className="main-btn btn-hover wow fadeInUp" data-wow-delay=".6s">Buy Now</a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-img wow fadeInUp" data-wow-delay=".5s">
              <Image src="/assets/img/hero/hero-img.svg" alt="Hero image" width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
    </section>
       
  )
}