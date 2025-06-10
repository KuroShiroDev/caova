'use client';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MaxWidthWrapper } from '@/components/ui/maxWidthWrapper/MaxWidthWrapper';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ConfirmRechargeWalletPage() {
  const searchParams = useSearchParams();
  const monto = searchParams.get('monto') || '0';
  const reference = searchParams.get('reference') || '';
  const [signature, setSignature] = useState('');
  const [isWompiLoaded, setIsWompiLoaded] = useState(false);
  const wompiContainerRef = useRef<HTMLDivElement>(null);

  const currency = 'COP';
  const handleRecharge = useCallback(async () => {
    await fetch('/api/transactions/create-recharge', {
      method: 'POST',
      body: JSON.stringify({ amount: monto, reference }),
      headers: { 'Content-Type': 'application/json' },
    });
  }, [monto, reference]);

  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://checkout.wompi.co/widget.js"]');
    if (existingScript) {
      setIsWompiLoaded(true);
    }
  }, []);

  useEffect(() => {
    const generateIntegritySignature = async () => {
      const amountInCents = parseInt(monto) * 100;
      const concatenatedString = `${reference}${amountInCents}${currency}${process.env.NEXT_PUBLIC_INTEGRITY_KEY}`;
      const encoder = new TextEncoder();
      const encodedText = encoder.encode(concatenatedString);
      const hashBuffer = await crypto.subtle.digest('SHA-256', encodedText);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
    };

    generateIntegritySignature().then(setSignature);
  }, [monto, reference, currency]);

  useEffect(() => {
    if (!isWompiLoaded || !signature || !wompiContainerRef.current) return;

    wompiContainerRef.current.innerHTML = '';

    handleRecharge();

    const amountInCents = parseInt(monto) * 100;

    const form = document.createElement('form');
    const script = document.createElement('script');

    script.src = 'https://checkout.wompi.co/widget.js';
    script.setAttribute('data-render', 'button');
    script.setAttribute('data-public-key', process.env.NEXT_PUBLIC_PUBLICK_KEY!);
    script.setAttribute('data-currency', currency);
    script.setAttribute('data-amount-in-cents', amountInCents.toString());
    script.setAttribute('data-reference', reference);
    script.setAttribute('data-signature:integrity', signature);
    script.setAttribute('data-redirect-url', process.env.NEXT_PUBLIC_REDIRECT_URL!);

    form.appendChild(script);
    wompiContainerRef.current.appendChild(form);
  }, [monto, signature, isWompiLoaded, reference, currency, handleRecharge]);

  return (
    <MaxWidthWrapper className="flex flex-col items-center justify-center min-h-[80vh]">
      {!isWompiLoaded && (
        <Script src="https://checkout.wompi.co/widget.js" strategy="afterInteractive" onLoad={() => setIsWompiLoaded(true)} />
      )}
      <Card className="w-full max-w-md shadow-xl border-0">
        <CardHeader className="flex flex-col items-center bg-blue-50 rounded-t-md pb-4">
          <Link href="/profile/recharge" className="self-start mb-2 text-blue-600 hover:underline flex items-center text-sm">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Cambiar monto
          </Link>
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Confirma tu recarga</h2>
          <p className="text-gray-600 text-center">
            Estás a punto de recargar:
            <br />
            <span className="text-3xl font-extrabold text-blue-700">${parseInt(monto).toLocaleString()} COP</span>
          </p>
        </CardHeader>
        <CardContent>
          <div ref={wompiContainerRef} className="flex justify-center mt-8" />
        </CardContent>
        <CardFooter className="flex flex-col items-center">
          {!isWompiLoaded && (
            <Button disabled className="w-full bg-blue-200 text-blue-700">
              Cargando pasarela de pago...
            </Button>
          )}
          <p className="text-xs text-gray-400 mt-4 text-center">
            Serás redirigido a Wompi para completar tu pago de forma segura.
          </p>
        </CardFooter>
      </Card>
    </MaxWidthWrapper>
  );
}
