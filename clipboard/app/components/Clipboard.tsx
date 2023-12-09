import React from "react";

const Clipboard = () => {
  return (
    <section id="clipboard" className="section-container my-16">
      <h3>Clipboard for iOS and MacOS</h3>
      <p className="section-content mb-10 text-2xl">
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you&apos;re ready to start adding to your clipboard.
      </p>
      <div className="button-container">
        <button className="py-4 px-10 shadow-lg bg-strongCyan rounded-full text-white duration-200 hover:opacity-80">
          Download for iOS
        </button>
        <button className="py-4 px-10 shadow-lg border bg-lightBlue rounded-full text-white duration-200 hover:opacity-80">
          Download for Mac
        </button>
      </div>
    </section>
  );
};

export default Clipboard;
