import React from "react";
import logo from "../assets/images/logo.svg";
import image from "../assets/images/bg-pattern-intro-desktop.svg"
import HamburgerMenu from "../components/Hamburger";

const Home = () => {
  return (
    <>
      <main className=" h-screen ">
        
        <section className="lg:container mx-auto px-[2rem] md:px-[7rem] bg-gradient-to-r from-red-400 to-red-600 pt-12 rounded-bl-[5rem] h-[30rem] md:h-[40rem] " style={{position: 'relative'}}>
          <div className="hidden lg:block" style={{
        backgroundImage: "url('/src/assets/images/bg-pattern-intro-desktop.svg')",
        backgroundSize: '190rem',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        paddingLeft:'130rem',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,}}></div>

        {/* mobile */}
          <div className="lg:hidden sm:block" style={{
        backgroundImage: "url('/src/assets/images/bg-pattern-intro-mobile.svg')",
        backgroundSize: '78rem',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        paddingLeft:'47rem',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,}}></div>


          <nav className="relative z-10 flex items-center justify-between">
            <div className="flex gap-7 items-center">
              <img src={logo} alt="logo"  />
              <ul className="hidden lg:block lg:flex gap-5 text-white ">
                <li>Product</li>
                <li>Company</li>
                <li>Connect</li>
              </ul>
            </div>
            <div className="hidden lg:block lg:flex gap-5 text-white">
              <button className="hover:bg-white hover:text-red-500 hover:font-bold py-2 px-3 rounded-3xl transition ease-in-out ">Login</button>
              <button className="hover:bg-white hover:text-red-500 hover:font-bold py-2 px-3 rounded-3xl transition ease-in-out">Sign Up</button>
            </div>
            <div className="lg:hidden">
              <HamburgerMenu/>
            </div>
          </nav>

          <div className="relative  mt-[6rem] md:mt-[12rem] text-white">
            <h1 className="text-3xl md:text-5xl font-bold text-center">
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
