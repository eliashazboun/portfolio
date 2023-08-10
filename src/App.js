import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer"
import "./css/index.css";

const App = () => {
  
  return (
    <div className="App bg-background">
      <Navbar/>
      <Hero />
      <Skills/>
      <Projects />
      <About />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
