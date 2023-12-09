import Image from "next/image";
import React from "react";

const References = () => {
  const IMAGES = [
    "/images/logo-google.png",
    "/images/logo-ibm.png",
    "/images/logo-microsoft.png",
    "/images/logo-hp.png",
    "/images/logo-vector-graphics.png",
  ];
  return (
    <section id="references" className="section-container my-20">
      <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8">
        {IMAGES.map((imageUrl, i) => (
          <Image
            key={i}
            height={0}
            width={0}
            alt=""
            src={`${imageUrl}`}
            className="w-52 h-auto"
            unoptimized
          />
        ))}
      </div>
    </section>
  );
};

export default References;
