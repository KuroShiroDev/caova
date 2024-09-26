"use client";

import React, { useState } from "react";
import { Button } from "../button";
import Image from "next/image";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { navigationLinks } from "@/config/navigationLinks";
import Link from "next/link";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-primary/90 bg-opacity-90 backdrop-blur-md flex justify-between items-center px-6 md:px-10 py-4 text-primary-foreground shadow-lg z-50">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link href="/">
            <Image src="/logo-white.png" alt="Logo" width={100} height={100} />
          </Link>
          <Button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            <HiOutlineMenuAlt3 size={24} />
          </Button>
        </div>
        <nav className="hidden md:flex space-x-8 font-bold text-lg">
          {navigationLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.name}
            </Link>
          ))}
        </nav>
        <Button
          className="hidden md:block text-secondary-foreground text-lg border-none"
          variant="outline"
        >
          Login
        </Button>
      </header>
      {isMenuOpen && (
        <div
          className="fixed md:hidden inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-primary text-primary-foreground shadow-lg z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 font-bold text-lg">
          {navigationLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.name}
            </Link>
          ))}
          <Button
            className="text-secondary-foreground text-lg border-none"
            variant="outline"
            onClick={toggleMenu}
          >
            Login
          </Button>
        </div>
      </div>
    </>
  );
};
