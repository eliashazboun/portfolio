import React from "react";
import ButtonRow from "../ButtonRow/ButtonRow";
import { Fade } from "react-awesome-reveal";

const About = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className="about">
      <div className="test-1">
        <Fade cascade triggerOnce>
          <h1 className="text-center fz-xxl pad-b4 pad-t5 m-t5">ABOUT</h1>
          <div className="container-lg">
            <div className="row">
              <div className="left display-f justify-center  col-12-sm col-12-md col-6-lg m-t3">
                <img
                  className="br-50 bg-background border-secondary "
                  src={require("../../images/picture.png")}
                  height={300}
                  width={300}
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
              <div className="right col-12-sm col-12-md col-6-lg">
                <p className="about-desc pad-b4 pad-t4">
                  As a recent Computer Science graduate, I have a solid
                  foundation in best coding practices and Software Development
                  Principles . I am also well versed in Agile Practices as my
                  education revolved heavily around Agile teams.
                  <br />
                  <br />
                  Since my graduation in May, I have dedicated all my time to learning as much as I can.
                  I have been working on projects that I am passionate about, and I am always looking for new opportunities to learn and grow.
                  <br /> <br />
                  I am currently seeking a position as a Software Developer. I will be a valuable asset to your team as I am a quick learner, a hard worker, and a team player.
                  <br /> <br />
                  If I am not working on a project, I am planning my next.
                </p>
                <ButtonRow
                  onClick={() =>
                    openInNewTab(
                      "https://drive.google.com/file/d/1RG-6C1GRBk6he1RJ3fjGe7ruhQikC2--/view?usp=sharing"
                    )
                  }
                  items={["Resume"]}
                  color={true}
                />
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
