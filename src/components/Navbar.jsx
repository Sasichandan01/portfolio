
import "./navbar.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Navbar(params) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div>
        <div className="nav">
          
          <p>
            <a href="#about">
              <i
                className="fa-solid fa-address-card"
                style={{ color: "#f6f7f9", paddingRight: "2px" }}
              ></i>
              About
            </a>
          </p>
         {" "}
          <p>
            <a href="#skillss">
              <i
                className="fa-solid fa-screwdriver-wrench"
                style={{ color: "#f6f7f9", paddingRight: "2px" }}
              ></i>
              Skills
            </a>
          </p>
          <p>
            <a href="#projectss">
             
              <i
                className="fa-solid fa-gear"
                style={{ color: "#f6f7f9", paddingRight: "2px" }}
              ></i>
              Projects
            </a>
          </p>{" "}
          <p>
            <a href="#contact">
              <i
                className="fa-solid fa-phone"
                style={{ color: "#f6f7f9", paddingRight: "2px" }}
              ></i>
              Contact
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
