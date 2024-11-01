import React from "react";
import Slider from "react-slick";
import { FaPython, FaJava, FaJs, FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiCplusplus, SiDjango, SiFlask, SiMysql, SiMongodb } from "react-icons/si";


const experiences = [
  {
    company: "Axis Cyber Technologies",
    role: "Python Developer Intern",
    date: "Aug 2024 – Oct 2024",
    location: "Gulberg II, Lahore",
    points: [
      "Developed and maintained back-end systems using Flask and MongoDB with PyMongo for various projects.",
      "Worked with SQL and NoSQL (MongoDB) databases to design efficient data models.",
      "Collaborated on Django projects, integrating SQL databases.",
      "Built APIs for data retrieval and management in Flask using RESTful architecture.",
      "Participated in code reviews, debugging, and testing to enhance application quality.",
    ],
  },
  {
    company: "Code Soft",
    role: "Web Development Intern",
    date: "Oct 2023 – Nov 2023",
    location: "Remote",
    points: [
      "Developed landing pages using HTML, CSS, and JavaScript.",
      "Designed and customized a personal portfolio website.",
      "Contributed to front-end enhancements in eCommerce website projects.",
      "Actively engaged in team collaboration and code reviews.",
    ],
  },
  {
    company: "Riphah International University",
    role: "WordPress Developer Intern",
    date: "July 2023 - Sep 2023",
    location: "Gulberg III, Lahore",
    points: [
      "Managed Riphah's WordPress website, maintaining content and functionality.",
      "Created and optimized web pages for improved user experience.",
      "Collaborated to support marketing efforts and improve SEO practices.",
    ],
  },
  {
    company: "Blue Digital Pixel",
    role: "SEO Analyst",
    date: "Aug 2021 - May 2022",
    location: "Johar Town, Lahore",
    points: [
      "Conducted keyword research for SEO.",
      "Improved organic traffic by 25% through on-page SEO.",
      "Secured 50+ high-quality backlinks, enhancing domain authority by 15%.",
    ],
  },
];

const Experience = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div id="Experience" className="p-6 md:p-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-12">Experience</h1>
      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Skills Section */}
        <div className="flex flex-wrap gap-8 md:w-1/3 md:p-8">
          {[FaHtml5, FaCss3, FaJs, FaReact, SiMongodb, FaPython, FaJava, SiCplusplus, SiDjango, SiFlask, SiMysql].map((Icon, index) => (
            <span key={index} className="p-4 bg-gray-700 rounded-2xl shadow-lg transition-transform hover:scale-110 hover:shadow-2x1">
              <Icon size={25} />
            </span>
          ))}
        </div>

        {/* Experience Carousel */}
        <div className="md:w-2/3 w-full mt-8 md:mt-0">
          <Slider {...settings}>
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-90 rounded-lg p-6 m-2 shadow-md transform transition-transform hover:scale-105">
                <div className="mb-4 text-lg font-semibold">{exp.role}, {exp.company}</div>
                <p className="text-sm text-gray-400">{exp.date} | {exp.location}</p>
                <ul className="mt-4 space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-sm leading-tight text-gray-300">• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Experience;
