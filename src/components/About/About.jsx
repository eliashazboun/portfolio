import React from "react";
import ButtonRow from "../ButtonRow/ButtonRow";
import { Fade, Reveal } from "react-awesome-reveal";

const About = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer")
  }
 
  return (
    <div className="about">
      <div className="test-1">
        <Fade cascade triggerOnce>
        <h1 className="text-center fz-xxl pad-b4 pad-t5 m-t5">ABOUT</h1>
        <div className="container-lg">
          <div className="row">
            <div className="left display-f justify-center  col-12-sm col-12-md col-6-lg m-t3">
              <img className="br-50 bg-background border-secondary " src={require("../../images/picture.png")} height={300} width={300} style={{objectFit:'cover'}} alt="" />

            </div>
            <div className="right col-12-sm col-12-md col-6-lg">
              <p className="about-desc pad-b4 pad-t4">As a recent Computer Science graduate, I have a solid foundation in Software Development Lifecycle, Cloud Technologies, 
                and leveraging CI / CD Tools. I am also well versed in Agile Practices as my education revolved heavily around Agile teams. 
                 <br/><br/> 
                 Aside from my technical skills, I also thrive in fast-paced environments and am detail-oriented. This is due to my nature, and my previous role as a line cook. Working in a kitchen environment taught me how to prioritize tasks effectively, 
                 communicate in a way that maximizes comprehension, and to always listen actively and with intent. 
                 <br /> <br />
                 If I am not working on a project, I am  planning my next.
                 </p>
                 <ButtonRow onClick={() => openInNewTab('https://drive.google.com/file/d/1RG-6C1GRBk6he1RJ3fjGe7ruhQikC2--/view?usp=sharing')} items={['Resume']} color={true}/>

            </div>
          </div>
        </div>
        </Fade>


      </div>
      
    </div>
  );
};

export default About;
