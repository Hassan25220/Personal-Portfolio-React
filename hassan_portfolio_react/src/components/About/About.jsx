import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-darkBlue md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-whiteLilac shadow-xl mx-0 md:mx-20 rounded-lg p-12"
      style={{
        backgroundColor: "#F8F8F9",
      }}
    >
      <div>
        <h2 className="text-3xl md:text-5xl font-bold text-darkBlue mb-6">
          About Me
        </h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center gap-10">
          <img
            className="md:h-80 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            src={AboutImg}
            alt="About img"
          />

          <ul>
            <AboutItem
              title="Python Developer"
              description="Versatile Python Developer with a strong foundation in programming, utilizing Python for diverse applications and problem-solving"
            />
            <AboutItem
              title="Frontend Developer"
              description="Proficient in Frontend Development using modern frameworks and technologies to create responsive and user-friendly interfaces."
            />
            <AboutItem
              title="Backend Developer"
              description="Experienced Backend Developer skilled in building robust server-side applications using Python and Flask for seamless data handling."
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

const AboutItem = ({ title, description }) => (
  <div className="flex gap-4 py-4">
    <IoArrowForward
      size={30}
      className="text-brightCoral transition transform hover:scale-125"
      style={{ color: "#FF6F61" }}
    />
    <span className="w-96">
      <h1 className="text-2xl font-semibold leading-normal text-darkBlue">
        {title}
      </h1>
      <p className="text-md text-gray-600 leading-tight">{description}</p>
    </span>
  </div>
);

export default About;
