import React from "react";
import { Zoom, Fade, Bounce, Roll } from "react-reveal";
import { scroller } from "react-scroll";
import icon from "../../../resources/images/icons/gmail.png";
const Footer = () => {
  const scrollToElement = el => {
    scroller.scrollTo(el, {
      duration: 1500,
      delay: 100,
      smooth: true
    });
  };
  return (
    <div className="footer-container">
      <div className="row">
        <Roll left duration={1000}>
          <div className="col s1">
            <div
              className="footer-a"
              style={{ cursor: `pointer` }}
              onClick={() => scrollToElement("header")}
            >
              <div className="arrow"> &uarr;</div>
            </div>
          </div>
        </Roll>
        <div className="col s11">
          <div className="row">
            <Zoom duration={1000} delay={200}>
              <div className=" full white-text singer-name jim col s6">
                Muhammad Khan
              </div>
            </Zoom>
            <Zoom duration={1000} delay={500}>
              <div className="col s6">
                <div>
                  <h1 className="footer-h1">Emails</h1>
                  <div className="row">
                    <div className="col s6">
                      <a
                        className="footer-a-2"
                        href="mailto:mkhan2khan@gmail.com"
                      >
                        <img className="footer-icon" src={icon} alt="abc" />
                        Assistant
                      </a>
                    </div>
                    <div className="col s6">
                      <a
                        className="footer-a-2"
                        href="mailto:mkhan2khan@gmail.com"
                      >
                        <img className="footer-icon" src={icon} alt="abc" />
                        Private
                      </a>
                    </div>
                  </div>
                  <div className="white-text">
                    <h1 className="footer-h1">
                      I CAN <b>DEVELOP</b> BETTER THAN YOU <b>WANT.</b>
                    </h1>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>
          <div>
            <Bounce top>
              <div className="col s6">
                <div className="footer-a-2 contact-link">
                  <div className="contact-page  ">
                    <div className="footer-h1">Mobile No: 0309-6164622</div>
                  </div>
                </div>
              </div>
            </Bounce>
            <Fade left delay={1000}>
              <div className="col s6">
                <div className="copyright ">
                  <p>&copy;{new Date().getFullYear()} . All rights Reserved</p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
