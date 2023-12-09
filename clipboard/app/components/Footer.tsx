/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const SOCIAL_ICONS = [
    "/images/icon-facebook.svg",
    "/images/icon-twitter.svg",
    "/images/icon-instagram.svg",
  ];

  return (
    <section id="footer" className="min-w-full bg-gray-50 p-8">
      <footer className="flex flex-col justify-between md:flex-row">
        <div className="flex justify-center items-center">
          <img src={`/images/logo.svg`} alt="logo" className="scale-50" />
        </div>
        <div className="flex flex-col flex-1 space-y-5 md:flex-row md:space-y-0 md:justify-between md:p-20 text-grayishBlue">
          <div
            id="footer-menu"
            className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-20 md:ml-48"
          >
            <div className="flex flex-col items-center space-y-5 md:items-start">
              <Link href="#" className="hover:text-strongCyan duration-200">
                FAQs
              </Link>
              <Link href="#" className="hover:text-strongCyan duration-200">
                Contact US
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-5 md:items-start">
              <Link href="#" className="hover:text-strongCyan duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-strongCyan duration-200">
                Press Kit
              </Link>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <Link href="#" className="hover:text-strongCyan duration-200">
                Install Guide
              </Link>
            </div>
          </div>

          <div
            id="social-icons"
            className="flex items-center justify-center space-x-6"
          >
            {SOCIAL_ICONS.map((iconUrl, i) => (
              <Image
                key={i}
                height={0}
                width={0}
                src={`${iconUrl}`}
                alt="logo"
                className="h-5 w-auto ficon cursor-pointer"
              />
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
