import React from 'react';

const About = () => {
  return (
    <div
      id="about"
      className=" w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            About me
          </p>
        </div>
        <p className="text-xl mt-10">
          I'm Frontend Developer and Web Designer with strong commitment to
          crafting responsive and visually engaging website, proficient in HTML,
          CSS , JS, REACT ,TAILWIND .with a solid foundation in web development principle
        </p>
        <br />
        <p className="text-xl">
          i'm currently studying computer engineering at UNIVERSITY OF GONDAR.
        </p>
      </div>
    </div>
  );
};

export default About;
