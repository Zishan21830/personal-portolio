import React from "react";
import "../styles/fonts.css";
import Navbar from "./Navbar.jsx";

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
        <img src="https://plus.unsplash.com/premium_photo-1733514433474-e91aeaed25fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" alt="" className='w-[10rem] h-[10rem] rounded-full'/>
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
