import React, { useState } from "react";
import "./About.scss";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import AboutView from "../AboutView/AboutView";

const About = React.forwardRef((props, ref) => {
  const [active, setActive] = useState("3");

  const handleClick = (e) => {
    setActive(e.target.id);
  };
  return (
    <div className="about" ref={ref}>
      <div className="wrapper">
        <KeyboardArrowUpOutlinedIcon
          className="about-arrow-up"
          onClick={() => props.handler(props.targetUp)}
        />
        <KeyboardArrowDownOutlinedIcon
          className="about-arrow-down"
          onClick={() => props.handler(props.targetDown)}
        />
       
        <div className="heading"></div>
        <div className="slider">
          <div className="content">
            <div className="left">
              <img src={require("../../images/DSC_0154.jpg")} alt="" />
            </div>
            <div className="right">
              <span className="name">Elias Hazboun</span>
              <span className="work">Full Stack Developer</span>
              <span className="quote">“Work to become, not to acquire.”</span>
            </div>
          </div>
          <div className="buttons">
            <button
              id={3}
              onClick={handleClick}
              className={active === "3" ? "active" : "inactive"}
            >
              About
            </button>
            <button
              id={1}
              onClick={handleClick}
              className={active === "1" ? "active" : "inactive"}
            >
              Skills
            </button>
            <button
              id={2}
              onClick={handleClick}
              className={active === "2" ? "active" : "inactive"}
            >
              Education
            </button>
          </div>
          <AboutView id={active}></AboutView>
        </div>
      </div>
    </div>
  );
});

export default About;
