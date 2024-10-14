import { Button } from "@/components/ui/button";
import { MaxWidthWrapper } from "@/components/ui/maxWidthWrapper/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className=" min-h-screen flex flex-col md:flex-row items-start justify-between  ">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left mt-40">
          <h1 className="text-6xl font-bold mb-4">
            Enterprise Standard for Private Gen AI and Document Processing
          </h1>
          <p className="mb-4 text-secondary-foreground/70">
            The TitanML Enterprise Inference Stack makes building, deploying ands
            scaling private and secure Enterprise
            applications, effortless.{" "}
          </p>
          <Button
            size="xl"
            className="bg-primary text-xl text-primary-foreground"
          >
            Regístrate
          </Button>
        </div>
        <div className="w-1/2">
          <Image
            src="/isometric-blue.png"
            alt="Hero Image"
            width={3000}
            height={3000}
          />
        </div>
      </div>
      <div className="bg-green-100 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Pasos a Seguir</h2>
        <p className="text-lg">Sigue estos sencillos pasos para comenzar.</p>
      </div>
      <div className="bg-yellow-100 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Proyectos Disponibles</h2>
        <p className="text-lg">Explora los proyectos que tenemos para ti.</p>
      </div>
      <div className="bg-red-100 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Quiénes Somos</h2>
        <p className="text-lg">Conoce más sobre nuestro equipo y misión.</p>
      </div>
    </MaxWidthWrapper>
  );
}
