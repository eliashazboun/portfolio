import React from "react";
import "./Hero.scss";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import ReactCardFlip from "react-card-flip";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { Link } from "react-router-dom";

const Hero = React.forwardRef((props, ref) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="hero" ref={ref}>
      <div className="wrapper">
        <KeyboardArrowDownOutlinedIcon
          className="hero-arrow-down"
          onClick={() => props.handler(props.target)}
        />
        <div className="top">
          <div className="left">
            <div className="info">
              <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Hello there!")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("My name is")
                      .pauseFor(500)
                      .callFunction(handleFlip)
                      .start();
                  }}
                  options={{
                    wrapperClassName: "typed",
                    cursor: "|",
                  }}
                />

                <div className="content">
                  <h1
                    onClick={() => {
                      console.log("hi");
                    }}
                  >
                    Elias Hazboun
                  </h1>
                  <h2>Software Developer</h2>

                  <div className="icons">
                    <Link to="https://github.com/eliashazboun" target="_blank">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                        alt=""
                      />
                    </Link>
                    <Link to="https://www.linkedin.com/in/elias-hazboun-5b6a0717a/" target="_blank">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </ReactCardFlip>
            </div>
          </div>
          <div className="right">
            <img src={require("../../images/308A6340.jpg")} alt="" />
          </div>
        </div>
        <div className="bot">
          {/* <div className="skills">
            <div className="icons">
              <div className="icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
              </div>
              <div className="icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
              </div>
              <div className="icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
              </div>
              <div className="icon">
               <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
              </div>  
              <div className="icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
              </div>
              <div className="icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
});

export default Hero;
