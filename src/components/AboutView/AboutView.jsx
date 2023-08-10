import React from "react";
import "./AboutView.scss";


const AboutView = ({ id }) => {
  return (
    <div className="aboutview">
      {id === "1" && (
        <div className="view view1">
          <div className="item">
            <div className="left">
              <h1>Front End</h1>
            </div>
            <div className="right">
              <div className="image">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="" />
              </div>
              <div className="image">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="" />
              </div>
              <div className="image">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="" />
              </div>
              <div className="image">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="" />
              </div>
              <div className="image">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="left">
              <h1>Back End</h1>
            </div>
            <div className="right">
              <div className="image">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="" />
              </div>
              <div className="image">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="" />
              </div>
              <div className="image">
                <img src={require("../../images/express-logo.png")} alt="" />
              </div>

              <div className="image">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="left">
              <h1>CI/CD Tools</h1>
            </div>
            <div className="right">
              <div className="image">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" alt="" />
              </div>
              <div className="image">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="" />
              </div>
              <div className="image">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original-wordmark.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
      {id === "2" && (
        <div className="view view2">
          <h1>B.S Computer Science</h1>
          <h2>East Carolina University</h2>
          <span>
            <img src={require("../../images/East_Carolina_Pirates_logo.svg.png")} height={"50px"} width={"50px"} alt=""></img>
          </span>
        </div>
      )}
      {id === "3" && (
        <div className="view view3">
          <div className="title">
            <h1>I have recently completed a Bachelor of Science, majoring in Computer Science. I have a passion for Software Development and excel in situations that challenge me. I am extremely driven and feel most myself when I am activley solving problems.</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutView;
