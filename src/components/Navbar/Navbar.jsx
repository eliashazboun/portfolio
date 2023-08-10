import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
        <Link  to='hero' spy={false} smooth={true} offset={0} >

          <div className="item">
            <img src={require("../../images/eliaspic-removebg-preview.png")} alt="" />
          </div>
        </Link>

        </div>
        <div className={open ? "center active" : "center"}>
          <div className="item">
            <Link to="skills" spy={false} smooth={true} offset={-50}>
              <h3>Skills</h3>
            </Link>
          </div>
          <div className="item">
            <Link to="projects" spy={false} smooth={true} offset={0}>
              <h3>Projects</h3>
            </Link>
          </div>
          <div className="item">
            <Link to="about" spy={false} smooth={true} offset={100}>
              <h3>About</h3>
            </Link>
          </div>
          <div className="item">
            <Link to="contact" spy={false} smooth={true} offset={0}>
              <h3>Contact</h3>
            </Link>
          </div>
        </div>
        <div className="right">
          <div class="item">
            <MenuIcon className="hamburger icon" onClick={handleOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
