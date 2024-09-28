import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { RiFacebookFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-10 xl:px-32 2xl:px-64 bg-primary  text-sm mt-24 text-primary-foreground ">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            tincidunt, nunc nec maximus.
          </p>
          <span>hello@caova.dev</span>
          <span>+57 421 122 123</span>
          <div className="flex gap-6">
            <RiFacebookFill />
            <FaInstagram strokeWidth={10} />
            <FaXTwitter />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex flex-col text-center justify-center items-center  w-1/2">
          <Image src="/logo-white.png" alt="logo" width={250} height={250} />
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image src="/visa.png" alt="visa" width={40} height={40} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className=" mt-16">
        <div className="custom-text-p">© {new Date().getFullYear()} Caova </div>
      </div>
    </div>
  );
};
