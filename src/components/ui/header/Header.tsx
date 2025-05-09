'use client';

import React, { useState } from 'react';
import { Button } from '../button';
import Image from 'next/image';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { navigationLinks, adminNavigationLinks } from '@/config/navigationLinks';
import Link from 'next/link';
import { AuthClerkButton } from '../clerk/AuthClerkButton';
interface HeaderProps {
  isAdmin?: boolean;
  isAdminPortal?: boolean;
}

export const Header = ({ isAdmin = false, isAdminPortal = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = isAdminPortal ? adminNavigationLinks : navigationLinks;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className=" fixed h-[100px] top-0 left-0 w-full bg-primary/85 backdrop-blur-md flex justify-between items-center px-6 md:px-10 py-4 text-primary-foreground shadow-lg z-50">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link href="/">
            <Image src="/logo-white.png" alt="Logo" width={150} height={150} />
          </Link>
          <Button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
            <HiOutlineMenuAlt3 size={24} />
          </Button>
        </div>
        <nav className="hidden md:flex space-x-8 font-bold text-xl">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.name}
            </Link>
          ))}
          {isAdmin && <Link href="/admin/projects">Admin</Link>}
        </nav>
        <div className=" hidden md:block">
          <AuthClerkButton />
        </div>
      </header>
      {isMenuOpen && (
        <div className="fixed md:hidden inset-0 bg-black bg-opacity-50 z-50" onClick={toggleMenu}></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-primary text-primary-foreground shadow-lg z-50 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 font-bold text-lg">
          <Button onClick={toggleMenu} className="absolute top-4 right-4 text-white focus:outline-none">
            <HiOutlineX size={24} />
          </Button>
          <AuthClerkButton />
          {navigationLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.name}
            </Link>
          ))}
          {isAdmin && <Link href="/admin/projects">Admin</Link>}

        </div>
      </div>
    </>
  );
};
