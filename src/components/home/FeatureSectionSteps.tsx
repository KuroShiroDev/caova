import { BiMoneyWithdraw } from 'react-icons/bi';
import { BsBuildingFillAdd } from 'react-icons/bs';
import { FaUserPlus } from 'react-icons/fa';
import { GiPayMoney } from 'react-icons/gi';
import { PiMoneyFill } from 'react-icons/pi';
import { Card, CardContent } from '../ui/card';

const steps = [
  {
    number: 1,
    title: 'Regístrate',
    description: 'Proporciona tus datos personales, correo electrónico, número de teléfono, cédula y firma.',
    icon: <FaUserPlus className=" text-primary" size={35} />,
  },
  {
    number: 2,
    title: 'Deposita tus fondos',
    description: 'Ingresa la cantidad deseada a tu cuenta en la plataforma para comprar acciones de 200.000 COP cada una.',
    icon: <PiMoneyFill className=" text-primary" size={35} />,
  },
  {
    number: 3,
    title: 'Elige la propiedad',
    description: 'Selecciona la propiedad que mejor se ajuste a tu perfil de inversionista con la información proporcionada.',
    icon: <BsBuildingFillAdd className=" text-primary" size={35} />,
  },
  {
    number: 4,
    title: 'Recibe tus retribuciones',
    description:
      'Recibe rentas mensuales por tus acciones y, al liquidar el inmueble, obtén tu inversión inicial más la valorización.',
    icon: <GiPayMoney className=" text-primary" size={35} />,
  },
  {
    number: 5,
    title: 'Retira tu dinero',
    description:
      'Retira tus retribuciones a partir de 50.000 COP a tu cuenta bancaria o medio registrado, o reinviértelo en otras propiedades.',
    icon: <BiMoneyWithdraw className="  text-primary" size={35} />,
  },
];

export const FeatureSectionSteps = () => {
  return (
    <section>
      <div className="py-8 mx-auto sm:py-16">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-5xl tracking-tight font-bold text-primary">Pasos para tu inversión</h2>
          <p className="text-gray-600 sm:text-xl">
            Sigue estos sencillos pasos para comenzar a invertir en bienes raíces y obtener retribuciones mensuales.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 mb-10">
          {steps.map((step, index) => {
            if (steps.length % 3 === 2 && (index === steps.length - 2 || index === steps.length - 1)) {
              return null;
            }
            return (
              <Card key={step.number} className=" shadow-lg p-10">
                <CardContent>
                  <div className="flex flex-col items-center">
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary/20 lg:h-20 lg:w-20">
                      <div className="">{step.icon}</div>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-primary">{step.title}</h3>
                    <p className="text-gray-500">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        {steps.length % 3 === 2 && (
          <div className="flex justify-center lg:col-span-3 space-x-12 ">
            <Card className=" shadow-lg p-10 w-full lg:w-1/3">
              <CardContent className="flex flex-col items-center">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary/20 lg:h-20 lg:w-20 ">
                  <div className="">{steps[steps.length - 2].icon}</div>
                </div>
                <h3 className="mb-2 text-xl text-primary font-bold">{steps[steps.length - 2].title}</h3>
                <p className="text-gray-500">{steps[steps.length - 2].description}</p>
              </CardContent>
            </Card>
            <Card className=" shadow-lg p-10 w-full lg:w-1/3">
              <CardContent className="flex flex-col items-center">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary/20 lg:h-20 lg:w-20 ">
                  <div className="">{steps[steps.length - 1].icon}</div>
                </div>
                <h3 className="mb-2 text-xl text-primary font-bold">{steps[steps.length - 1].title}</h3>
                <p className="text-gray-500">{steps[steps.length - 1].description}</p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};
