import React from 'react';
import avatarImg from "../../assets/7358602-removebg-preview.png";

const Home = () => {
  return (
    <div className='text-white flex flex-col md:flex-row w-full justify-between items-center p-10 md:p-20 bg-gradient-to-r from-darkBlue to-blueViolet rounded-lg shadow-lg'>
      <div className='md:w-2/4 text-center md:text-left'>
        <h1 className='text-4xl md:text-6xl font-bold leading-snug tracking-tight mb-6 text-white animate-bounce'>
          Hi, I'm Hassan
        </h1>
        <p className='text-md md:text-xl text-gray-300 tracking-tight mb-8'>
          A passionate software developer skilled in Python, Django, and full-stack development. I create efficient, user-friendly solutions that bring ideas to life through clean code and innovative design.
        </p>
        <a href="#Footer">
          <button className="bg-bright-coral hover:bg-gradient-purple-coral text-white py-2 px-4 rounded-3xl transition duration-300 hover:scale-105">
            Contact Me
          </button>
        </a>

      </div>
      <div className='mt-10 md:mt-0'>
        <img
          className='w-64 md:w-80 rounded-full shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out'
          src={avatarImg}
          alt="Hassan's Avatar"
        />
      </div>
    </div>
  );
};

export default Home;
