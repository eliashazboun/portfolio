import React from "react";
import ButtonRow from "../ButtonRow/ButtonRow";
import { Reveal, Slide } from "react-awesome-reveal";

const ProjectItem = ({ title, tech, img, buttonLabels, children }) => {
  return (
    <div className="project-item pad-b5 row">
      <div className="info col-12-sm col-12-md col-6-lg">
        <Reveal triggerOnce>
          <div className="project-left">
            <h1 className="titlep pad-b1">{title}</h1>
            <div className="row  gap-2 pad-b2">
              {tech.map((item, index) => {
                return (
                  <p className="tech text-center bg-secondary text-white br-sm pad-1 fw-9 " key={index}>
                    {item}
                  </p>
                );
              })}
            </div>
            <p className="description pad-b3">{children}</p>
            <ButtonRow items={buttonLabels} />
          </div>
        </Reveal>
      </div>
      <div className="project-image col-12-sm col-12-md col-6-lg">
        <Slide triggerOnce direction="right">

        <img src={require(`../../images/${img}`)} alt="" className="project-img" height={300} width={500} />
        </Slide>
      </div>
    </div>
  );
};

export default ProjectItem;
