import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { useRef, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import "./App.scss";

const App = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open)
  }
  const handleClick = (refernce, item) => {
    console.log(refernce);
    window.scrollTo({ top: refernce.current.offsetTop, behavior: "smooth" });
  };
  return (
    <div className="App">
      <div className="navbar">
        <div className="wrapper">
          <div className="left">
            <div className="item">
              <img
                src={require("./images/eliaspic-removebg-preview.png")}
                alt=""
                onClick={() => handleClick(heroRef)}
              />
            </div>
          </div>
          <div className={open ? "center active" : "center"}>
            <div className="item">
              <h3 onClick={() => handleClick(aboutRef)}>About</h3>
            </div>
            <div className="item">
              <h3 onClick={() => handleClick(projectsRef)}>Projects</h3>
            </div>
            <div className="item">
              <h3 onClick={() => handleClick(contactRef)}>Contact</h3>
            </div>
          </div>
          <div className="right">
            <div className="item">
              <button onClick={() => handleClick(contactRef)}>Hire Me!</button>
            </div>
            <div class="item">
              <MenuIcon className="hamburger" onClick={ handleOpen}/>
            </div>
          </div>
        </div>
      </div>
      <Hero ref={heroRef} handler={handleClick} target={aboutRef} />
      <About
        ref={aboutRef}
        handler={handleClick}
        targetUp={heroRef}
        targetDown={projectsRef}
      />
      <Projects
        ref={projectsRef}
        handler={handleClick}
        targetUp={aboutRef}
        targetDown={contactRef}
      />
      <Contact ref={contactRef} handler={handleClick} targetUp={projectsRef} />
    </div>
  );
};

export default App;
