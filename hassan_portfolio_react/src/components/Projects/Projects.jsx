import React from "react";
import ProjectCard from "./ProjectCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgPortfolio from "../../assets/portfolio_img.png"
import imgAirline from "../../assets/airline_system.png"
import imgFlight from "../../assets/flight_system.svg"
import imgHackFree from "../../assets/hackfree.png"
import imgSoftUi from "../../assets/soft_ui.png"
import imgfinalYear from "../../assets/final_year.png"
import imgReactCrud from "../../assets/react_crud.png"
import imgeShop from "../../assets/eShop.jpg"
import imgGobGame from "../../assets/gob_game.png"

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of cards shown at a time on larger screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-darkBlue font-bold mb-8">Projects</h1>
      <Slider {...settings}>
        <div>
          <ProjectCard
            title="Final Year Project"
            main="Developed a Similar Video Detection System using Python and deep learning techniques, implementing Convolutional Neural Networks (CNN), YOLO (You Only Look Once) for real-time object detection, and SAM (Segment Anything Model) for precise segmentation. This project enhanced my skills in computer vision, enabling accurate detection and analysis of video content."
            githubLink="#"
            visitLink="#"
            imageSrc={imgfinalYear}
          />
        </div>
        <div>
          <ProjectCard
            title="Flask Soft UI"
            main="I developed a web application using Flask with PyMongo for the MongoDB backend, focusing on secure user authentication. The application allows users to register and log in seamlessly. I thoroughly tested API calls with the React frontend to ensure smooth data interactions and a responsive user experience, showcasing the integration of Flask and MongoDB effectively."
            githubLink="https://github.com/Hassan25220/Flask-Backend-softUi"
            visitLink=""
            imageSrc={imgSoftUi}
          />
        </div>
        <div>
          <ProjectCard
            title="eShop Django"
            main="This Django eCommerce app features product categories, size and color variants, and a dynamic cart system. It includes complete user authentication, email notifications, product price and image updates based on size and variant, and a robust cart management system. Easily extendable with features like coupons and order tracking."
            githubLink="https://github.com/Hassan25220/eShop-Django"
            visitLink="#"
            imageSrc={imgeShop}
          />
        </div>
        <div>
          <ProjectCard
            title="GOB Game"
            main="I enhanced the backend functionality of the game using Python with Flask, focusing on improving the ball movement mechanics. This involved creating new functions to handle player interactions and optimize gameplay. Additionally, I developed features for managing player animations, ensuring smoother transitions and more engaging gameplay experiences for users."
            githubLink="#"
            visitLink="#"
            imageSrc={imgGobGame}
          />
        </div>
        <div>
          <ProjectCard
            title="React Frontend CRUD with Flask"
            main="I designed and created a CRUD-based frontend application that communicates with a Flask backend to manage products stored in a MongoDB database. This project helped me understand API calls and the interaction between the frontend and backend. By implementing various features, I gained valuable experience with database operations, improving my full-stack development skills."
            githubLink="https://github.com/Hassan25220/React-Soft-UI"
            visitLink="#"
            imageSrc={imgReactCrud}
          />
        </div>
        <div>
          <ProjectCard
            title="Hack Free"
            main="During my time at HackFree, I worked extensively in UI development, focusing on creating intuitive and user-friendly interfaces. My responsibilities included debugging errors and resolving issues to enhance the overall user experience. I collaborated with cross-functional teams to ensure seamless functionality, ultimately contributing to the success of our projects"
            githubLink="#"
            visitLink="https://hackfree.com/"
            imageSrc={imgHackFree}
          />
        </div>
        <div>
          <ProjectCard
            title="Personal Portfolio"
            main="Created a personal portfolio using React and TailwindCSS, that showcases my journey as a developer, highlighting projects that illustrate my skills in HTML, CSS, JavaScript, Django, and Python. It features an intuitive layout with engaging visuals, project details, and links to live demos and GitHub repositories. This portfolio reflects my passion for coding and continuous learning in the tech field."
            githubLink="https://github.com/Hassan25220/Personal-Portfolio-React"
            visitLink="#"
            imageSrc={imgPortfolio}
          />
        </div>
        <div>
          <ProjectCard
            title="Flight System"
            main="This Python Django-based project simulates a functional flight management system. It allows users to search for flights, book tickets, and manage their reservations. Featuring authentication, real-time availability updates, and a user-friendly interface, this system streamlines flight booking and management processes."
            githubLink="https://github.com/Hassan25220/flight-system/tree/master/flightsystem"
            visitLink="#"
            imageSrc={imgFlight}
          />
        </div>
        <div>
          <ProjectCard
            title="Airline System"
            main="This project is an Airline Management System built using Django. It includes features for booking flights, managing schedules, and handling passenger information. The system provides a user-friendly interface for both passengers and administrators, ensuring efficient airline operations and seamless user experience."
            githubLink="https://github.com/Hassan25220/Airline-System"
            visitLink="#"
            imageSrc={imgAirline}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Projects;
