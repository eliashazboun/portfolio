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
            title="E-Commerce Store Front"
            tech={[
              "Next.js",
              "Tailwind",
              "MySQL",
              "Prisma ORM",
              "Typescript",
              "Stripe",
            ]}
            img="molecular-decor.png"
            buttonLabels={[
              { "Source Code": "https://github.com/eliashazboun/molecular-decor-front" },
              { "Check it Out": "https://molecular-decor-front.vercel.app" },
            ]}
          >
            This E-Commerce platform is dedicated to providing individual molecular models
            to people that want them. It is fully mobile responsive, has individual product pages,
            and secure payment with Stripe. 
            <br /> <br />
            All of the content on the site is controlled through the Content Management System that I built
            for it. 
          </ProjectItem>
          <ProjectItem
            title="E-Commerce CMS"
            tech={["Next.js", "Tailwind", "MySQL", "Prisma ORM", "Typescript", "Stripe"]}
            img="molecular-decor-admin.png"
            buttonLabels={[
              {
                "Source Code":
                  "https://github.com/eliashazboun/molecular-decor-admin",
              },
              { "Check it Out": "https://molecular-decor-admin.vercel.app/" },
            ]}
          >
           This powerful CMS controls the content on the store front. You can manage your products,
            categories, billboards for each product page, setting products to featured or archived,
            and all the API routes to aide in developer experience.
          </ProjectItem>
          <ProjectItem
            title="Therapy Private Practice"
            tech={[
              "Next.js",
              "Tailwind",
              "MySQL",
              "Prisma ORM",
              "Typescript",
              "Stripe",
            ]}
            img="therapy-admin.png"
            buttonLabels={[
              {
                "Source Code":
                  "https://github.com/eliashazboun/therapy-admin",
              },
              { "Check it Out": "https://therapy-admin.vercel.app/" },
            ]}
          >
            <b>UNDER DEVELOPMENT</b>
            <br /> <br />
            All in one solution for private practice owners, designed to
            streamline the intricacies of managing a private practice. Inlcudes
            login/signup, client lookup, calendar for appointments, and full CRUD
            operations on clients and appointments.
            <br /><br />
            Currently working on the individual client pages,booking, stripe integration,
            and zoom integration.
          </ProjectItem>
          <ProjectItem
            title="Chatboard Application"
            tech={[
              "Vite",
              "Tailwind",
              "Firebase",
              "Javascript",
              "Redux",
            ]}
            img="chat-app.png"
            buttonLabels={[
              {
                "Source Code":
                  "https://github.com/eliashazboun/chat-prod",
              },
              { "Check it Out": "https://chat-prod-eliashazboun.vercel.app/" },
            ]}
          >
            Created a chatboard application for my friends and I to use. It is fully mobile responsive,
            has two individual chat rooms, user creation, profile pictures, mentioning other users,
            notifications, and a commenting and liking system.
            <br /><br />
            Check it out and create your own user!
          </ProjectItem>
          <ProjectItem
            title="Car Showcase"
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
            Car showcase application which is fully responsive on mobile
            devices. Utilized Cars API by Ninjas for car information. Car
            pictures were gathered by webscraping with Selenium and Pillow to
            remove the backgrounds.
            <br /> <br />
            Features full search functionality by make, model and fuel type.
            Pagination for the list of cars,and server side rendering to
            imporove SEO and load speeds.
          </ProjectItem>
          

          
        </div>
      </div>
    </div>
  );
};

export default Projects;
