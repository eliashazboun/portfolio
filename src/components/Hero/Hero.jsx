import React from "react";
import { Bounce, Reveal } from "react-awesome-reveal";
import ButtonRow from "../ButtonRow/ButtonRow";
import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";
import {IoDocumentText} from "react-icons/io5"

const Hero = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer")
  }

  return (
    <div className="hero w-100">
      <div className="w-100">
        <div className="section bg-background h-90vh w-100">
          <div className="display-f flex-d-col justify-center align-center h-80vh">
            <div className="container-md">
              <div>
                <div>
                  <Reveal cascade damping={1} triggerOnce>
                    <div>
                      <h1 className="title fz-xxxl">
                        Hi, I'm <span className="text-secondary">Elias.</span>
                      </h1>
                      <h1 className="fz-xxxl pad-b2 title">I'm a full stack developer.</h1>
                      <div className="buttonrow"></div>
                    </div>
                    <ButtonRow scroll={true} items={["Skills", "Projects", "About", "Contact"]} />
                  </Reveal>
                  <div className="icons display-f gap-10 m-t2 justify-left">
                    <Bounce triggerOnce cascade delay={2000} damping={0.1}>
                      <FaSquareGithub onClick={() => openInNewTab('https://github.com/eliashazboun')} size={50} color="#5818fb" className="icon move" />
                      <FaLinkedin onClick={() => openInNewTab('https://www.linkedin.com/in/elias-hazboun-5b6a0717a/')} className="icon move" color="#5818fb" size={50} />
                      <IoDocumentText onClick={() => openInNewTab('https://drive.google.com/file/d/1RG-6C1GRBk6he1RJ3fjGe7ruhQikC2--/view?usp=sharing')} className="icon move" size={50} color="#5818fb"/>
                    </Bounce>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
