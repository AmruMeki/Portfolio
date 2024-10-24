import React from 'react'
import Heroimage from '../assets/20240202_081240.jpg'
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
	return (
    <div
      id="home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full  px-4 ml-40 md:flex-row">
        <div className="flex flex-col justify-center h-full pt-10">
          <h2 className="text-4xl sm:text-7xl font-bold text-white hover:scale-105 hover:text-gray-300 ">
            I'm Frontend Developer
          </h2>
          <p className=" text-gray-400 py-4 max-w-md">
            I'am <span className="text-white">Amru Meki ,</span>I'm a passionate
            frontend developer. currently ,I love to work on web application
            using technologies like{' '}
            <span className="text-white">React , tailwind </span> and{' '}
            <span className="text-white ">Javascript</span>
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={Heroimage}
            alt="my profile"
            height={100}
            width={100}
            className=" rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Home
