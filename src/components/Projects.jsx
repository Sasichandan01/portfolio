import React from "react";
import "./Projects.css";
import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1200, min: 1100 },
    items: 1,
    slidesToSlide:1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 900, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    
  }, []);

  return (
    <section id="projectss" className="projects">
      <div>
        <h1>
          PROJE<span>CTS</span>
        </h1>
      </div>
      <div className="row">
        <div className="container-fluid main_menu">
          <div className="row">
            <div className="col-md-10 col-sm-8 col-12 mx-auto">
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                autoPlay={true}
                infinite={true}
                autoPlaySpeed={3000}
                transitionDuration={0}
                pauseOnHover={true}
              >
                <div>
                  <div className="card">
                    <img src="https://i.imgur.com/onn9k3y.png" alt="" />
                    <div className="card-content">
                      <h2>Portfolio</h2>
                      <p>
                        An interactive portFolio website which showcases all my
                        works such as my education, projects, skills at one
                        place with some visual treat. This website contains
                        several sections which can be easily navigated through
                        navigation bar provided, and also contains a contact
                        section to contact me if required.
                        <br />
                        <b>Tech Used:</b> MERN Stack
                      </p>

                      <a target="_blank" className="a" href="#">
                        View Code
                      </a>
                      <a target="_blank" className="b" href="#">
                        View project
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card">
                    <img src="https://i.imgur.com/s3PwbWq.png" alt="" />
                    <div className="card-content">
                      <h2>Flix Booking</h2>
                      <p>
                        A flix booking is an online platform that allows users a
                        static experience to reserve and purchase cinema
                        tickets. Users can browse movie listings, select
                        showtimes, choose seats, and make static payments
                        through the system. 
                        <br />
                        <b>Tech Used:</b> React.js, Css, Bootstarp
                      </p>
                      <a
                        target="_blank"
                        className="a"
                        href="https://github.com/Sasichandan01/ticketbooking"
                      >
                        View Code
                      </a>
                      <a
                        target="_blank"
                        className="b"
                        href="https://bookmovieticket22.netlify.app/"
                      >
                        View project
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card">
                    <img
                      src="https://www.figma.com/community/thumbnail?resource_id=735650288109030027&resource_type=plugin"
                      alt=""
                    />
                    <div className="card-content">
                      <h2>QR code generator</h2>
                      <p>
                        A QR code generator is a tool that creates Quick
                        Response (QR) codes. Users input information like URLs
                        or text, and the generator converts it into a QR code
                        that can be scanned by smartphones or QR code readers.
                        These codes are widely used for quick access to
                        websites, information, or promotions.
                        <br />
                        <b>Tech Used:</b> Html, Css ,JavaScript
                      </p>
                      <a
                        target="_blank"
                        className="a"
                        href="https://github.com/Sasichandan01/qrcode"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card">
                    <img src="https://i.imgur.com/xX8VjbG.png" alt="" />
                    <div className="card-content">
                      <h2>Keeper App</h2>
                      <p>
                        A keeper app is a digital tool designed to help users
                        organize and manage tasks, deadlines, and priorities
                        efficiently. It typically features a user-friendly
                        interface for creating, editing, and categorizing tasks,
                        often with reminders and due dates.
                        <br />
                        <b>Tech Used:</b> React.js, Css, Bootstrap
                      </p>
                      <a
                        target="_blank"
                        className="a"
                        href="https://github.com/Sasichandan01/keeper"
                      >
                        View Code
                      </a>
                      <a
                        target="_blank"
                        className="b"
                        href="https://keeperapp22.netlify.app/"
                      >
                        View project
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card">
                    <img src="https://imgur.com/dCmf15H.png" />

                    <div className="card-content">
                      <h2>Simon Game</h2>
                      <p>
                        Simon is a classNameic electronic memory game where
                        players must replicate a sequence of colored lights and
                        tones. The game progressively adds to the sequence,
                        challenging players' memory and concentration. The goal
                        is to see how long players can accurately repeat the
                        growing pattern.
                        <br />
                        <b>Tech Used:</b> Html, Css, JavaScript
                      </p>
                      <a
                        target="_blank"
                        className="a"
                        href="https://github.com/Sasichandan01/html"
                      >
                        View Code
                      </a>
                      <a
                        target="_blank"
                        className="b"
                        href="https://sasichandan01.github.io/html/"
                      >
                        View project
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
