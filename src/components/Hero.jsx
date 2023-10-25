import React from "react";
import "../syles/Hero.css";
import hero from "../assets/hero.png";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-screen text-white"
      style={{
        background:
          "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)",
      }}>
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center"
          alt="hero"
          src={hero}
        />
        <div class="text-center lg:w-5/12 w-full">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Turning your dream paint job into reality!
          </h1>
          <p className="text-2xl mb-8">
            Highly qualified painters looking to help you realize your dream
            paint job just a click away!
          </p>
          <div className="flex justify-center mx-auto">
            <button onClick={() => navigate('/hire')} className="Get-started">Hire a Painter</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
