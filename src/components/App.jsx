import { ToastContainer } from "react-toastify";
import Navbar from "./Navbar";
import Home from "./Home";
import Projects from "./Projects";
import Connect from "./Connect";
import Contact from "./Contact";
import Skills from "./Skills";
import About from "./About";
import Education from "./Education";
function App() {
  return (
    <div>
    <ToastContainer/>
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Connect />
      <Navbar />
    </div>
  );
}
export default App;
