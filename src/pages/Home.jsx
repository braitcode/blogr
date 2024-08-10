import React from "react";
import logo from "../assets/images/logo.svg";
import image from "../assets/images/bg-pattern-intro-desktop.svg"

const Home = () => {
  return (
    <>
      <main className=" h-screen ">
        
        <section className="container mx-auto px-[7rem] bg-gradient-to-r from-red-400 to-red-600 pt-12 rounded-bl-[5rem] h-[40rem] relative before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('/src/assets/images/bg-pattern-intro-desktop.svg')] before:bg-cover before:bg-no-repeat before:bg-center before:z-0" style={{backgroundSize:'130rem' }}>
          <nav className="relative z-10 flex items-center justify-between">
            <div className="flex gap-7 items-center">
              <img src={logo} alt="logo"  />
              <ul className="flex gap-5 text-white">
                <li>Product</li>
                <li>Company</li>
                <li>Connect</li>
              </ul>
            </div>
            <div className="flex gap-5 text-white">
              <button className="hover:bg-white hover:text-red-500 hover:font-bold py-2 px-3 rounded-3xl transition ease-in-out ">Login</button>
              <button className="hover:bg-white hover:text-red-500 hover:font-bold py-2 px-3 rounded-3xl transition ease-in-out">Sign Up</button>
            </div>
          </nav>

          <div className="relative z-10 mt-[12rem] text-white">
            <h1 className="text-5xl font-bold text-center">
              A modern publishing platform
            </h1>
            <p className="text-center mt-7 text-xl">
              Grow your audience and build your online brand
            </p>
            <div className="flex gap-5 justify-center pt-10">
              <button className="bg-white text-red-500 font-bold py-2 px-3 rounded-3xl">Start for Free</button>
              <button className="border py-2 px-3 rounded-3xl">Learn More</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
