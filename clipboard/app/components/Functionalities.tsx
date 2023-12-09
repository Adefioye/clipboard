/* eslint-disable @next/next/no-img-element */
import React from "react";

const Functionalities = () => {
  return (
    <section id="features" className="w-full md:mb-32">
      <div className="section-container">
        <div className="relative flex flex-col md:flex-row md:space-x-13">
          <div className="md:w-1/2">
            <img
              src="/images/image-computer.png"
              alt=""
              className="md:absolute md:top-0 md:right-[50%]"
            />
          </div>

          <div className="flex flex-col mt-16 space-y-12 text-xl md:w-1/2 md:text-left md:pl-16">
            <div className="flex flex-col">
              <h5>Quick Search</h5>
              <p className="max-w-md text-grayishBlue leading-9">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            <div className="flex flex-col">
              <h5>iCloud Sync</h5>
              <p className="max-w-md text-grayishBlue leading-9">
                Instantly saves and syncs snippets across all your devices.
              </p>
            </div>
            <div className="flex flex-col">
              <h5>Completely History</h5>
              <p className="max-w-md text-grayishBlue leading-9">
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Functionalities;
