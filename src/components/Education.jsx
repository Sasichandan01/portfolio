import "./Education.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Education() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    window.scrollTo(0, 0);
  }, []);
  return (
    <section id="edu">
      <h1
        className="edu"
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-easing="linear"
        data-aos-mirror="true"
      >
        EDUCA<span>TION</span>
      </h1>
      <div className="container-fluid main_menu">
        <div className="row">
          <div className="col-md-10 col-sm-8 col-12 mx-auto">
            <div className="row" id="edu-row">
              <div
                className=" col-lg-4 col-12 "
                id="edu-details"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-easing="linear"
              >
                <span>
                  <i className="fa-solid fa-school fa-3x"></i>
                </span>
                <span className="badge">2014-2019</span>
                <p>Tiny Tots High School</p>
                <p>VI-X </p>
                <p style={{ fontWeight: "bolder", textTransform: "uppercase" }}>
                  CGPA : 10
                </p>
              </div>

              <div
                className=" col-lg-4 col-12 "
                id="edu-details"
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-easing="linear"
              >
                <span>
                  <i className="fa-solid fa-building-columns fa-3x"></i>
                </span>
                <span className="badge">2019-2021</span>
                <p>Bhashyam Junior College, Guntur</p>
                <p> 10+2 (MPC)</p>
                <p style={{ fontWeight: "bolder", textTransform: "uppercase" }}>
                  Percentage : 96%
                </p>
              </div>
              <div
                className=" col-lg-4 col-12 "
                id="edu-details"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="linear"
              >
                <span>
                  <i className="fa-solid fa-user-graduate fa-3x"></i>
                </span>
                <span className="badge">2021-2025</span>
                <p>National Institute of Technology,Raipur</p>
                <p>B.Tech (CSE)</p>
                <p style={{ fontWeight: "bolder", textTransform: "uppercase" }}>
                  CGPA: 8.09 (till 6th semester)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
