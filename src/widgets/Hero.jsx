import React, { useRef } from "react";
import video from "../assets/TailwindCSS.mp4";

export default function Hero() {
  const videoRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="grid justify-items-center gap-8 pb-28 relative px-4">
      <p className="text-4xl md:text-6xl font-black text-center leading-normal md:leading-normal">
        Welcome to TailwindCSS
      </p>

      <p className="text-xl text-gray-700 md:w-1/2 text-center">
        TailwindCSS is a highly customizable, low-level CSS framework that gives
        you all the building blocks you need to build bespoke designs without
        any annoying opinionated styles you have to fight to override.
      </p>

      <div className="flex gap-4">
        <button className="rounded bg-gray-800 text-base text-white py-3 px-8 hover:bg-gray-700 transition">
          <a href="https://tailwindcss.com/">Try it for free</a>
        </button>
        <button className="rounded bg-blue-500 text-base text-white py-3 px-8 hover:bg-blue-400 transition">
          <a href="https://tailwindcss.com/docs/installation">Learn more</a>
        </button>
      </div>

      <div className="absolute -z-10 w-[256px] h-[256px] -top-16 md:-top-28 md:-right-10">
        <svg
          width="256"
          height="256"
          viewBox="0 0 256 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <circle cx="128" cy="128" r="128" fill="url(#paint0_linear_0_22)" />
          <defs>
            <linearGradient
              id="paint0_linear_0_22"
              x1="0"
              y1="0"
              x2="0"
              y2="256"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="0.774" stopColor="#EAEAEA" />
              <stop offset="1" stopColor="#DFDFDF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative grid justify-items-center">
        <video
          ref={videoRef}
          src={video}
          controls
          className="w-[90%] md:w-[760px] h-auto object-cover object-top rounded-lg"
        ></video>

        <div
          className="absolute bottom-[-5rem] bg-white rounded-full px-5 py-3 shadow-xl flex items-center cursor-pointer"
          onClick={playVideo}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <circle cx="12" cy="12" r="11" stroke="#999" strokeWidth="2" />
            <path d="M10 17L16 12L10 7V17Z" fill="#999" />
          </svg>
          <span className="text-gray-700 font-semibold">Watch video</span>
        </div>
      </div>
      <svg
        width="128"
        height="128"
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 md:bottom-20 -left-10 -z-10"
      >
        <circle cx="64" cy="64" r="64" fill="url(#paint0_linear_0_23)" />
        <defs>
          <linearGradient
            id="paint0_linear_0_23"
            x1="0"
            y1="0"
            x2="0"
            y2="128"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="0.774017" stop-color="#EAEAEA" />
            <stop offset="1" stop-color="#DFDFDF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
