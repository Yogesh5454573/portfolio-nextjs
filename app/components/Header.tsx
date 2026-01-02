import Link from 'next/link';
export default function header() {
  return (
    <header className="header">
      <div className="navbar-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="index.html">
                  <img src="assets/img/logo/logo.svg" alt="Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                  <ul id="nav" className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <Link href="/aboutUs">About Us</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/skills">Skills</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/experience">Experience</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/contactUs">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}