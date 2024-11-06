'use client';

import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import { Button } from '../ui/button';
import Image from 'next/image';

export const HeroComponent = () => {
  return (
    <>
      <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left mt-40">
        <h1 className="text-4xl  md:text-6xl  mb-4 text-primary font-bold ">Inversión en bienes raíces al siguiente nivel</h1>
        <h3 className="mb-8 h-16 text-2xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gray-600 bg-gradient-to-r  to-[#0c457c] via-[#227da2] from-[#46c2e9]">
          <TypewriterComponent
            options={{
              strings: [
                'Crecimiento Financiero.',
                'Inversiones Seguras.',
                'Futuro Brillante.',
                'Confianza Total.',
                'Transparencia.',
                'Simplicidad.',
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 35,
              delay: 35,
            }}
          />
        </h3>
        <p className="mb-4 text-secondary-foreground/70">¡Invierte en propiedades de Colombia desde solo 200.000 COP!</p>
        <Button size="xl" className="bg-primary  text-xl text-primary-foreground">
          Regístrate
        </Button>
      </div>
      <div className="w-1/2">
        <Image src="/isometric-blue.png" alt="Hero Image" width={3000} height={3000} />
      </div>
    </>
  );
};
