import Image from "next/image";
export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="widget-wrapper">
                    <div className="row">
                        <div className="col-xl-3 col-md-6">
                            <div className="footer-widget">
                                <div className="logo mb-35">
                                    <a href="index.html"> <Image src="assets/img/logo/logo.svg" alt="Hero image" width={200} height={200} /> </a>
                                </div>
                                <p className="desc mb-35">We are expert designer team, There have a lot of designer and developer If you have any project you can hire Create a website.</p>
                                <ul className="socials">
                                    <li>
                                        <a href="jvascript:void(0)"> <i className="lni lni-facebook-filled"></i> </a>
                                    </li>
                                    <li>
                                        <a href="jvascript:void(0)"> <i className="lni lni-twitter-filled"></i> </a>
                                    </li>
                                    <li>
                                        <a href="jvascript:void(0)"> <i className="lni lni-instagram-filled"></i> </a>
                                    </li>
                                    <li>
                                        <a href="jvascript:void(0)"> <i className="lni lni-linkedin-original"></i> </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 offset-xl-1 col-md-5 offset-md-1 col-sm-6">
                            <div className="footer-widget">
                                <h3>Link</h3>
                                <ul className="links">
                                    <li> <a href="javascript:void(0)">Home</a> </li>
                                    <li> <a href="javascript:void(0)">About</a> </li>
                                    <li> <a href="javascript:void(0)">Services</a> </li>
                                    <li> <a href="javascript:void(0)">Portfolio</a> </li>
                                    <li> <a href="javascript:void(0)">Pricing</a> </li>
                                    <li> <a href="javascript:void(0)">Team</a> </li>
                                    <li> <a href="javascript:void(0)">Contact</a> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-6">
                            <div className="footer-widget">
                                <h3>Services</h3>
                                <ul className="links">
                                    <li> <a href="javascript:void(0)">Graphic design</a> </li>
                                    <li> <a href="javascript:void(0)">Web design</a> </li>
                                    <li> <a href="javascript:void(0)">Visual design</a> </li>
                                    <li> <a href="javascript:void(0)">Product design</a> </li>
                                    <li> <a href="javascript:void(0)">UI/UX design</a> </li>
                                    <li> <a href="javascript:void(0)">Web development</a> </li>
                                    <li> <a href="javascript:void(0)">Startup business</a> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="footer-widget">
                                <h3>Contact</h3>
                                <ul>
                                    <li>+003894372632</li>
                                    <li>helldesigner@gmail.ccom</li>
                                    <li>United state of America</li>
                                </ul>
                                <div className="contact_map" style={{ width: "100%", height: "150px", marginTop: "25px" }}>
                                    <div className="gmap_canvas">
                                        <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Mission%20District%2C%20San%20Francisco%2C%20CA%2C%20USA&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{ width: "100%" }}></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="copy-right">
                    <p>Design and Developed by <a href="https://uideck.com" rel="nofollow" target="_blank"> UIdeck </a>. Distributed by <a href="https://themewagon.com" target="_blank">ThemeWagon</a></p>
                </div>

            </div>
        </footer>
    );
}
