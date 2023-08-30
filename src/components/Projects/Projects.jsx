import React from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  return (
    <div className="projects">
      <div className="container-p bg-background">
        <Fade triggerOnce>
          <h1 className="text-center fz-xxl pad-b5">PROJECTS</h1>
        </Fade>
        <div className="container-md row">
          <ProjectItem
            title="E-Commerce Website"
            tech={["React", "Redux", "Stripe", "Strapi"]}
            img="eliscornershop.png"
            buttonLabels={[
              { "Source Code": "https://github.com/eliashazboun/ecommerce" },
              { "Check it Out": "https://elisscorner.shop/" },
            ]}
          >
            An E-Commerce Platform that uses Strapi, a headless CMS, to handle
            products and categories. Stripe API was also implemented to provide
            secure and hassle free payment.
          </ProjectItem>
          <ProjectItem
            title="Car Booking"
            tech={[
              "Next.js",
              "React",
              "Typescript",
              "Tailwind",
              "Selenium",
              "Python",
            ]}
            img="cars.png"
            buttonLabels={[
              { "Source Code": "https://github.com/eliashazboun/cars" },
              { "Check it Out": "https://cars-chi-amber.vercel.app/" },
            ]}
          >
            Car booking application which is fully responsive on mobile devices.
            Utilized Cars API by Ninjas for car information. Car pictures were
            gathered by webscraping with Selenium and Pillow to remove the
            backgrounds.
            <br /> <br /> 
            Features full search functionality by make, model and
            fuel type. Pagination for the list of cars,and server side rendering
            to imporove SEO and load speeds.
          </ProjectItem>
          <ProjectItem
            title="Car Detailing Website"
            tech={["React", "Sass", "Gulp"]}
            img="detailing.png"
            buttonLabels={[
              {
                "Source Code":"https://github.com/eliashazboun/car-detailing/tree/main",
              },
              { "Check it Out": "https://detailing.eliscorner.net/" },
            ]}
          >
            A company page for a car detailing business. Showcases the services
            and what they include, a gallery to show images of work done, a
            testimonials page for social proof, and finally a contact
            information section.
          </ProjectItem>

          <ProjectItem
            title="Therapy Private Practice"
            tech={["Mongo", "Express", "React", "Node"]}
            img="website.png"
            buttonLabels={[
              {
                "Source Code":"https://github.com/eliashazboun/private-practice",
              },
            ]}
          >
            This is a MERN stack application I am in the process of building.
            <br /> <br /> 
            All in one solution for private practice owners, designed to streamline
            the intricacies of managing a practice. Inlcudes login/signup, client lookup,
            calendar to show appointments, admin dashboard, and full CRUD operations for
            clients and appointments.
          </ProjectItem>
        </div>
      </div>
    </div>
  );
};

export default Projects;
