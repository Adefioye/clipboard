import React from "react";
import Image from "next/image";

const AccessAnywhere = () => {
  return (
    <section id="access-anywhere" className="section-container">
      <h3>Access Clipboard Anywhere</h3>
      <p className="section-content mb-12 text-xl">
        Whether you’re on the go, or at your computer, you can access all your
        Clipboard snippets in a few simple clicks.
      </p>
      <Image
        height={0}
        width={0}
        alt=""
        src="/images/image-devices.png"
        className="w-4/5 h-auto mx-auto"
        unoptimized
      />
    </section>
  );
};

export default AccessAnywhere;
