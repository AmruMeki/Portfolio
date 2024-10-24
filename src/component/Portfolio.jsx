import React from 'react';
import cat from '../assets/Amazon.jpg';
import node from '../assets/html.jpg';
import girl from '../assets/hill.png';
import tail from '../assets/tailwind.jpg';
import war from '../assets/warrior.jpg';
import react from '../assets/react-js.jpg';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: cat,
      link: 'https://amazon-clone-wine-ten.vercel.app/',
      git: 'https://github.com/AmruMeki/Amazon-Clone',
    },
    {
      id: 2,
      src: node,
      link: 'https://imaginative-heliotrope-aa4e7a.netlify.app/',
    },
    {
      id: 3,
      src: girl,
      link: 'https://github.com/AmruMeki/Hill-cypher-encryption',
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 pt-40">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(
            (
              { id, src, link } // Destructure link here
            ) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  height={400}
                  width={400}
                  className="rounded-md duration-200 hover:scale-105"
                />

                <div className="flex items-center justify-center">
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {' '}
                    {/* Add rel for security */}
                    <button className="w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105">
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
