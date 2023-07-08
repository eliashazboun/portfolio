import React from "react";
import "./Projects.scss";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import eliscorner from "../../images/eliscornershop.png";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Projects = React.forwardRef((props, ref) => {
  return (
    <div className="projects" ref={ref}>
      <div className="wrapper">
        <KeyboardArrowUpOutlinedIcon
          className="projects-arrow-up"
          onClick={() => props.handler(props.targetUp)}
        />
        <KeyboardArrowDownOutlinedIcon
          className="projects-arrow-down"
          onClick={() => props.handler(props.targetDown)}
        />
        <div className="heading"></div>

        <div className="card-holder">
          <div className="sectiontitle">
            <p>Projects</p>
          </div>
          <div className="cards">
            <div className="card">
              <div className="image">
                <img src={eliscorner} alt="" />
              </div>
              <div className="title">
                <h1>Ecommerce Website</h1>
              </div>
              <div className="description"></div>
              <div className="icons">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                  alt=""
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                  alt=""
                />
                <img
                  src={require("../../images/2560px-Stripe_Logo,_revised_2016.svg.png")}
                  alt=""
                />
                <img src={require("../../images/strapi.png")} alt="" />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg"
                  alt=""
                />
              </div>
              <div className="goto">
                <Link to="https://elisscorner.shop/" target="_blank">
                  Check it out!
                  <ArrowForwardIcon />
                </Link>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={require("../../images/website.png")} alt="" />
              </div>
              <div className="title">
                <h1>Private Practice Website</h1>
              </div>
              <div className="description"></div>
              <div className="icons">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                  alt=""
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt=""
                />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
                <img src={require("../../images/express-logo.png")} alt="" />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg"
                  alt=""
                />
              </div>
              <div className="goto">
                <Link to="https://elisscorner.shop/" target="_blank">
                  Check it out!
                  <ArrowForwardIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Projects;
