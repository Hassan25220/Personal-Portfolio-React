import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="relative flex flex-col md:flex-row justify-around items-center bg-gradient-to-r from-darkBlue to-electricPurple text-white p-10 md:p-12 space-y-6 md:space-y-0"
    >
      <div className="absolute -top-5 -right-10 w-36 h-36 bg-brightCoral opacity-30 rounded-full blur-xl" />
      <div className="absolute -bottom-5 -left-10 w-40 h-40 bg-electricPurple opacity-20 rounded-full blur-xl" />

      <div className="text-center md:text-left z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-whiteLilac">Contact</h1>
        <h3 className="text-md md:text-lg font-light text-lightLavender mt-2">
          Feel free to reach out!
        </h3>
      </div>

      <ul className="space-y-3 md:space-y-2 text-center md:text-left text-sm md:text-lg z-10">
        <li className="flex items-center gap-1 text-whiteLilac hover:text-brightCoral transition duration-300 transform hover:scale-105">
          <MdOutlineEmail size={24} />
          <span>hassan.saeed2522@gmail.com</span>
        </li>
        <li className="flex items-center gap-1 text-whiteLilac hover:text-brightCoral transition duration-300 transform hover:scale-105">
          <CiLinkedin size={24} />
          <span>
            <a href="https://www.linkedin.com/in/hassan-saeed25/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/hassan-saeed25
            </a>
          </span>
        </li>
        <li className="flex items-center gap-1 text-whiteLilac hover:text-brightCoral transition duration-300 transform hover:scale-105">
          <FaGithub size={24} />
          <span>
            <a href="https://github.com/Hassan25220" target="_blank" rel="noopener noreferrer">
              github.com/Hassan25220
            </a>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
