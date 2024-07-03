import React, { useState } from "react";
import "./Connect.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Connect() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    window.scrollTo(0, 0);
  }, []);
  const [call, setCall] = useState(false);

  return (
    <div>
      <div
        className="connect"
        data-aos="flip-left"
        data-aos-offset="200"
        data-aos-easing="linear"
      >
        <div>
          <a target="_blank" href="https://www.instagram.com/bhargav._.2266/">
            <p id="insta">
              <i className="fa-brands fa-instagram"></i>
              <span>&nbsp;Instagram&nbsp;</span>
            </p>
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/bhargav-sasi-chandan-67575a249/"
          >
            <p id="linked">
              <i className="fa-brands fa-linkedin"></i>
              <span>&nbsp;Linkedin&nbsp;</span>
            </p>
          </a>
        </div>
        <div>
          <a target="_blank" href="https://github.com/Sasichandan01">
            <p id="github">
              {" "}
              <i className="fa-brands fa-github"></i>
              <span>&nbsp;Github&nbsp;</span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
