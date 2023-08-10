import React from "react";
import { Fade } from "react-awesome-reveal";


const Skills = () => {
  return (
    <div className="skills">
      <div className="test">
        <Fade triggerOnce>

          <h1 className="text-white text-center fz-xxl">SKILLS</h1>
        </Fade>
        <div className="container-md">
          <Fade cascade damping={.05} triggerOnce>
          <div className="skill row">
            <h1 className="col-12-sm col-12-md col-6-lg text-center">Front End</h1>
            <div className="images display-f justify-center col-12-sm col-12-md col-6-lg">
              <div className="image">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />
                <p className="text-center fz-md">React</p>
              </div>
              <div className="image">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="" />
                <p className="text-center fz-md">Javascript</p>
              </div>
              <div className="image">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" />
                <p className="text-center fz-md">HTML5</p>
              </div>
              <div className="image">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="" />
                <p className="text-center fz-md">CSS3</p>
              </div>
              <div className="image">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="" />
                <p className="text-center fz-md">Sass</p>
              </div>
            </div>
          </div>
          <div className="skill row pad-b2 ">
            <h1 className="col-12-sm col-12-md col-6-lg text-center">Back End</h1>
            <div className="images display-f justify-center col-12-sm col-12-md col-6-lg">
              <div className="image">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt=""/>

                <p className="text-center fz-md">Mongo</p>
              </div>
              <div className="image">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="" />

                <p className="text-center fz-md">Node.js</p>
              </div>
              <div className="image">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt=""/>

                <p className="text-center fz-md">Express.js</p>
              </div>
              
              <div className="image">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt=""/>

                <p className="text-center fz-md">PostgreSQL</p>
              </div>
            </div>
          </div>
          <div className="skill row pad-b4">
            <h1 className="col-12-sm col-12-md col-6-lg text-center">Tools</h1>
            <div className="images col-12-sm col-12-md col-6-lg display-f justify-center">
              <div className="image">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="" />
                <p className="text-center fz-md">Docker</p>

              </div>
              <div className="image">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="" />
                <p className="text-center fz-md">Git</p>

              </div>
              <div className="image">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="" />
                <p className="text-center fz-md">Figma</p>

              </div>
              <div className="image">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="" />
                <p className="text-center fz-md">AWS</p>
              
              </div>
            </div>
          </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Skills;
