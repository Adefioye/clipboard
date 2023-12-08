import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div id="hero" className="section-container mb-40 pt-16">
      <Image
        height={0}
        width={0}
        src={`/images/logo.svg`}
        alt="logo"
        className="h-25 w-auto my-16 mx-auto"
      />
      <h3>A history of everything you copy</h3>
      <p className="section-content mb-10 text-2xl">
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>
      <div className="button-container">
        <button className="py-4 px-10 shadow-lg bg-strongCyan rounded-full text-white duration-200 hover:opacity-80">
          Download for iOS
        </button>
        <button className="py-4 px-10 shadow-lg border bg-lightBlue rounded-full text-white duration-200 hover:opacity-80">
          Download for Mac
        </button>
      </div>
    </div>
  );
};

export default Hero;
