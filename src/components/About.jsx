import "./About.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    window.scrollTo(0, 0);
  }, []);
  return (
    <section id="about">
      <div className="container-fluid main_menu">
        <div className="row">
          <div
            className="about-details col-md-8 col-sm-8 col-12 mx-auto "
            id="contact-details"
          >
            <h1
              className="about"
              data-aos="zoom-in"
              data-aos-offset="100"
              data-aos-easing="linear"
            >
              About <span>ME</span>
            </h1>
            <p
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-easing="linear"
            >
              My fascination with technology was fueled by my desire to study
              and discover new things. I was drawn to web programming because of
              its seemingly endless potential and revolutionary potential. Since
              then, I've been actively involved in developing my coding skills
              and expanding my knowledge of a variety of programming languages
              and frameworks. With each project I take on, I try to push
              boundaries and provide original solutions.I strongly believe in
              the importance of lifelong learning and am constantly interested
              in learning about the most recent developments and trends in the
              field of web development.
            </p>
            <button>
              <a target="_blank" href="https://drive.google.com/file/d/1kBfSuIVj4xh7WhSas9hXoGNUKNnX3wlc/view?usp=sharing">
                Download CV &nbsp;
                <i
                  className="fa-solid fa-file-arrow-down"
                  styles={{ color: "red" }}
                ></i>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
