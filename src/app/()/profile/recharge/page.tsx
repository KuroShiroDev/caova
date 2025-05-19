'use client';
//TODO: Atencion esto no esta terminado
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MaxWidthWrapper } from '@/components/ui/maxWidthWrapper/MaxWidthWrapper';
import Script from 'next/script';

export default function RecargarSaldoPage() {
  const [monto, setMonto] = useState<string>('100000'); // Monto inicial
  const [reference] = useState(`ref-${Date.now()}`); // Generar referencia única
  const [signature, setSignature] = useState<string>('');
  const [isWompiLoaded, setIsWompiLoaded] = useState(false);
  const wompiContainerRef = useRef<HTMLDivElement>(null);

  const publicKey = 'pub_test_jzrK2RAa6Dc1zX6EqFC9TWnvUQPR1aSr'; // Llave pública de Wompi
  const integrityKey = 'test_integrity_gnYWLgVXsIv15383JgS1eAwyBIADs1jH'; // Llave de integridad
  const currency = 'COP'; // Moneda
  const redirectUrl = 'https://tu-sitio.com/pagos/respuesta'; // URL de redirección

  // Generar la firma de integridad
  const generateIntegritySignature = async () => {
    const amountInCents = parseInt(monto) * 100; // Convertir el monto a centavos
    const concatenatedString = `${reference}${amountInCents}${currency}${integrityKey}`;
    const encoder = new TextEncoder();
    const encodedText = encoder.encode(concatenatedString);
    const hashBuffer = await crypto.subtle.digest('SHA-256', encodedText);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  };

  useEffect(() => {
    // Generate signature when amount changes
    const updateSignature = async () => {
      const newSignature = await generateIntegritySignature();
      setSignature(newSignature);
    };

    updateSignature();
  }, [monto]);

  // Efecto para renderizar el botón de Wompi cuando cambia el monto o la firma
  useEffect(() => {
    if (!isWompiLoaded || !signature || !wompiContainerRef.current) return;

    // Limpiar el contenedor antes de agregar un nuevo botón
    wompiContainerRef.current.innerHTML = '';

    const amountInCents = parseInt(monto) * 100;

    // Crear el formulario y script para Wompi
    const form = document.createElement('form');
    const script = document.createElement('script');

    // Configurar los atributos del script
    script.src = 'https://checkout.wompi.co/widget.js';
    script.setAttribute('data-render', 'button');
    script.setAttribute('data-public-key', publicKey);
    script.setAttribute('data-currency', currency);
    script.setAttribute('data-amount-in-cents', amountInCents.toString());
    script.setAttribute('data-reference', reference);
    script.setAttribute('data-signature:integrity', signature);
    script.setAttribute('data-redirect-url', redirectUrl);

    // Agregar el script al formulario y el formulario al contenedor
    form.appendChild(script);
    wompiContainerRef.current.appendChild(form);
  }, [monto, signature, isWompiLoaded]);

  const handleMontoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonto(e.target.value);
  };

  const montoOptions = [
    { value: '100000', label: '$ 100.000' },
    { value: '500000', label: '$ 500.000' },
    { value: '1000000', label: '$ 1.000.000' },
    { value: '5000000', label: '$ 5.000.000' },
    { value: '10000000', label: '$ 10.000.000' },
  ];

  return (
    <MaxWidthWrapper className="py-6 max-w-3xl">
      {/* Cargar el script de Wompi de manera asíncrona */}
      <Script src="https://checkout.wompi.co/widget.js" strategy="afterInteractive" onLoad={() => setIsWompiLoaded(true)} />

      <div className="mb-6">
        <Link href="/profile" className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al Perfil
        </Link>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Recargar Saldo</h1>
        <div className="flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-md">
          <Wallet className="h-5 w-5 mr-2" />
          <span className="font-medium">Saldo actual: COP 9.305.917.990</span>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>¿Cuánto deseas recargar?</CardTitle>
          <CardDescription>Selecciona un monto predefinido o ingresa un valor personalizado</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Montos predefinidos */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {montoOptions.map((option) => (
              <Button
                key={option.value}
                type="button"
                variant={monto === option.value ? 'default' : 'outline'}
                className="h-16"
                onClick={() => setMonto(option.value)}>
                {option.label}
              </Button>
            ))}
          </div>

          {/* Monto personalizado */}
          <div className="space-y-2">
            <Label htmlFor="monto-personalizado">Monto personalizado (COP)</Label>
            <Input
              id="monto-personalizado"
              type="number"
              min="10000"
              step="10000"
              value={monto}
              onChange={handleMontoChange}
              className="text-lg"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          {/* Contenedor para el botón de Wompi */}
          <div ref={wompiContainerRef} className="w-full h-full"></div>

          {!isWompiLoaded && (
            <Button className="w-full" size="lg" disabled>
              Cargando pasarela de pago...
            </Button>
          )}

          <p className="text-xs text-gray-500 text-center">
            Al hacer clic en Pagar con Wompi serás redirigido a nuestra pasarela de pagos segura.
          </p>
        </CardFooter>
      </Card>
    </MaxWidthWrapper>
  );
}
