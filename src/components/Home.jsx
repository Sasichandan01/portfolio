import { useState } from "react";
import "./Home.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="home" className="home">
      <div className="container-fluid main_menu">
        <div className="row">
          <div className="col-md-10 col-sm-8 col-12 mx-auto">
            <div className="row" id="row">
              <div className="details">
                <main>
                  <div className="containers" data-aos="fade-right">
                    <p>Hello 👋 I'm</p>
                  </div>

                  <div className="animation" data-aos="fade-left">
                    <div className="first">
                      <div>Sasi Chandan</div>
                    </div>
                    <div className="second">
                      <div>Programmer</div>
                    </div>
                    <div className="third">
                      <div>Web Developer</div>
                    </div>
                  </div>
                </main>
              </div>

              <div className="waviy" data-aos="fade-left">
                <h1 style={{ "--i": "1" }}>M</h1>
                <h1 style={{ "--i": "2" }}>Y</h1>
                <h1 style={{ "--i": "3" }}>P</h1>
                <h1 style={{ "--i": "4" }}>o</h1>
                <h1 style={{ "--i": "5" }}>r</h1>
                <h1 style={{ "--i": "6" }}>t</h1>
                <h1 style={{ "--i": "7" }}>f</h1>
                <h1 style={{ "--i": "8" }}>o</h1>
                <h1 style={{ "--i": "9" }}>l</h1>
                <h1 style={{ "--i": "10" }}>i</h1>
                <h1 style={{ "--i": "10" }}>o</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
