import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./aboutUs/page";
import Projects from "./projects/page";
import Script from "next/script";
import Image from "next/image";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Yogesh Portfolio</title>
        <link rel="shortcut icon" href="/assets/img/favicon.svg" />
        <link rel="stylesheet" href="/assets/css/bootstrap-5.0.0-beta2.min.css" />
        <link rel="stylesheet" href="/assets/css/LineIcons.2.0.css" />
        <link rel="stylesheet" href="/assets/css/tiny-slider.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body>
      <div className="preloader">
        <div className="loader">
          <div className="spinner">
            <div className="spinner-container">
              <div className="spinner-rotator">
                <div className="spinner-left">
                  <div className="spinner-circle"></div>
                </div>
                <div className="spinner-right">
                  <div className="spinner-circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Header />
      {children}
      <Footer />
      <a href="#" className="scroll-top btn-hover">
        <i className="lni lni-chevron-up"></i>
      </a>
      <Script src="/assets/js/bootstrap-5.0.0-beta2.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/count-up.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/tiny-slider.js" strategy="afterInteractive" />
      <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/polifill.js" strategy="afterInteractive" />
      <Script src="/assets/js/main.js" strategy="afterInteractive" />3
      </body>
    </html>
  );
}