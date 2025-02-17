import React from "react";
import profile from "./assets/devgirl.png"; 

const Portfolio = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-200 px-4 md:px-10">
      <div className="bg-pink-400 w-full max-w-5xl rounded-lg p-6 md:p-12 shadow-lg relative">
        
        <div className="bg-white rounded-lg shadow-md p-6 md:p-12 relative border-r-16 border-blue-300">
         
          <nav className="flex justify-end space-x-6 text-gray-700 text-lg mb-6">
            <a href="#works" className="hover:text-blue-500">Works</a>
            <a href="#blog" className="hover:text-blue-500">Blog</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </nav>

         
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Hi, I am Sayali,<br />Web Devoloper
              </h1>
              <p className="text-gray-600 mt-2">
              I am a web developer. I specialize in creating responsive and user-friendly web applications.   Passionate about design, development, and innovation.
              </p>
              <button className="mt-6 bg-red-500 text-white px-5 py-2 rounded-md font-bold hover:bg-red-600 transition">
                Download Resume
              </button>
           </div>

           
            <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
              <img
                src={profile}
                alt="Profile"
                className="w-28 h-28 rounded-full border-4 border-white"
              />
            </div>
          </div>
          </div>
        

        
        <div className="bg-blue-100 p-6 rounded-lg shadow-md mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Recent Posts</h2>
            <a className="text-blue-500" href="#">View all</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-bold">Food Nutrition App</h3>
              <p className="text-gray-500 text-sm">12 Feb 2020 | Design, Pattern</p>
              <p className="text-gray-600 mt-2">
              A Food API is an online service that provides data related to food, recipes, nutrition, ingredients, and meal planning. These APIs help developers integrate food-related features into apps, websites, and software.
              </p>
            </div>

            
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-bold">Movie Search App</h3>
              <p className="text-gray-500 text-sm">12 Feb 2020 | API call</p>
              <p className="text-gray-600 mt-2">
              A Movie Search App is a web or mobile application that allows users to search for movies, view details, and sometimes even get recommendations. These apps typically use Movie APIs to fetch real-time data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default Portfolio;
