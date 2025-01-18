import React from "react";
import "../styles/fonts.css";
import Navbar from "./Navbar.jsx";

import homePageImage from "../assets/images/home-page-image.jpg"

const Home = () => {

  // create an array for navigation items
  const navigationItems = ["LinkedIn", "Github"]
  return (
    <section className="bg-gray w-full h-[95vh] rounded-t-[3rem] rounded-[4rem] flex justify-center flex-col items-center">
    {/* navigation bars */}
    <Navbar navigationItems={navigationItems}/>

    {/* Home page */}
      <div className="h-full flex flex-col gap-5 justify-center items-center">
      <div className="flex items-center relative">
        {/* <div className="w-24 h-24 rounded-full bg-white"></div> */}
        <img src={homePageImage} alt="home page image" className='w-[10rem] h-[10rem] rounded-full transition-all hover:scale-125'/>
        <div className="flex justify-center gap-2 bg-white font-edensor px-2 py-1 rounded-2xl absolute -right-10">
          <span>Zishan</span>
          <span className="hover:rotate-12 hover:scale-150">✌️</span>
        </div>
      </div>
      {/* main heading */}
      <div className="w-2/4">
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center mt-3 font-edensor">Crafting Innovative Solutions, One Line of Python at a Time.</p>
      </div>
      </div>
    </section>
  );
};

export default Home;
