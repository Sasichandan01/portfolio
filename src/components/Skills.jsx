import React from "react";
import "./Skills.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    window.scrollTo(0, 0);
  }, []);
  return (
    <section id="skillss">
      <div className="row">
        <div className="container-fluid main_menu">
          <div className="row">
            <div className="col-md-10 col-sm-8 col-12 mx-auto">
              <div className="row" id="skills-row">
                <div
                  className="skills col-lg-6 col-12 "
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-easing="linear"
                >
                  <h1>
                    Skil<span>ls</span>
                  </h1>
                </div>

                <div
                  className="about col-lg-6 col-12 "
                  id="skills"
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-easing="linear"
                >
                  <div className="front-end">
                    <p>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnnJKugRO6kiMWwkL80X3A75Wu9uEAbscXQ&usqp=CAU"
                        width="30"
                        height="30"
                      ></img>
                      <span>C</span>
                    </p>
                    <p>
                      <img
                        src="data:image/png;base64,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"
                        width="30"
                        height="30"
                      ></img>
                      <span>C++</span>
                    </p>
                    <p>
                      <i
                        className="fa-brands fa-html5 fa-2x"
                        style={{ color: "#E34C26" }}
                      ></i>
                      <span>HTML</span>
                    </p>{" "}
                    <p>
                      <img
                        src="data:image/jpeg;base64,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"
                        width="30"
                        height="30"
                      ></img>
                      <span>Bootstrap</span>
                    </p>
                    <p>
                      <i
                        className="fa-brands fa-css3-alt fa-2x"
                        style={{ color: "#264de4" }}
                      ></i>
                      <span>CSS</span>
                    </p>
                    <p>
                      <i
                        className="fa-brands fa-react fa-2x"
                        style={{ color: "#61DBFB" }}
                      ></i>
                      <span>React</span>
                    </p>
                    <p>
                      <img
                        src="data:image/png;base64,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"
                        height="30"
                        width="50"
                      ></img>
                      <span>Java Script</span>
                    </p>
                    <p>
                      <i
                        className="fa-brands fa-node-js fa-2x"
                        style={{ color: "#3C873A" }}
                      ></i>
                      <span>Node js</span>
                    </p>
                    <p>
                      <img
                        src="data:image/png;base64,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"
                        height="30"
                        width="30"
                      ></img>
                      <span>Express Js</span>
                    </p>
                    <p>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqGo5WeIPga0G_6K908bTkEcwWuSZ38DT3sA&usqp=CAU"
                        height="30"
                        width="30"
                      ></img>
                      <span>Mongo DB</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
