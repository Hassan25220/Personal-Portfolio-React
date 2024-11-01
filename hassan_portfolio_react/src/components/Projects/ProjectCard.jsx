import React from "react";

const ProjectCard = ({ title, main, githubLink, visitLink, imageSrc }) => {
  return (
    <div className="p-4 md:p-6 flex flex-col w-72 md:w-80 bg-whiteLilac shadow-lg rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <img className="rounded-t-xl" src={imageSrc} alt={`${title} banner`} />
      <div className="p-4">
        <h3 className="text-xl md:text-2xl font-bold text-darkBlue">{title}</h3>
        <p className="text-sm md:text-md leading-relaxed text-darkBlue mt-2">{main}</p>
      </div>
      <div className="mt-4 flex justify-between">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-bright-coral hover:bg-gradient-purple-coral text-white py-2 px-4 rounded-3xl transition duration-300 hover:scale-105"
        >
          GitHub
        </a>
        <a
          href={visitLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-bright-coral hover:bg-gradient-purple-coral text-white py-2 px-4 rounded-3xl transition duration-300 hover:scale-105"
        >
          Visit
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
