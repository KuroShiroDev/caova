'use client';

import { useCallback } from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Clock, AlertTriangle, RefreshCw, Download, ArrowRight, XCircle, Ban } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Transaction, TransactionStatus } from '@prisma/client';
import { MaxWidthWrapper } from '@/components/ui/maxWidthWrapper/MaxWidthWrapper';
import { useSearchParams } from 'next/navigation';
import { formatDate, formatDateTime } from '@/lib/utils';
import { TransactionLoadingSkeleton } from './components/TransactionLoadingSkeleton';

// Enum de estados de transacción

export default function EstadoTransaccionPage() {
  const searchParams = useSearchParams();
  const externalId = searchParams.get('id');
  const [status, setStatus] = useState<TransactionStatus>(TransactionStatus.PENDING);
  const [transactionData, setTransactionData] = useState<Transaction>();
  const [loading, setLoading] = useState(true);

  const checkStatus = useCallback(() => {
    setLoading(true);
    fetch(`/api/transactions/by-external-id?externalId=${externalId}`)
      .then((res) => res.json())
      .then((data) => {
        setTransactionData(data);
        setStatus(data.status);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [externalId]);

  useEffect(() => {
    if (!externalId) return;
    checkStatus();
  }, [checkStatus, externalId]);

  // Función para obtener el color de fondo según el estado
  const getHeaderBgColor = () => {
    switch (status) {
      case TransactionStatus.APPROVED:
        return 'bg-green-50';
      case TransactionStatus.PENDING:
        return 'bg-blue-50';
      case TransactionStatus.VOIDED:
        return 'bg-amber-50';
      case TransactionStatus.DECLINED:
        return 'bg-red-50';
      case TransactionStatus.ERROR:
        return 'bg-red-50';
      default:
        return 'bg-blue-50';
    }
  };

  // Función para obtener el color del ícono según el estado
  const getIconBgColor = () => {
    switch (status) {
      case TransactionStatus.APPROVED:
        return 'bg-green-100';
      case TransactionStatus.PENDING:
        return 'bg-blue-100';
      case TransactionStatus.VOIDED:
        return 'bg-amber-100';
      case TransactionStatus.DECLINED:
        return 'bg-red-100';
      case TransactionStatus.ERROR:
        return 'bg-red-100';
      default:
        return 'bg-blue-100';
    }
  };

  // Función para obtener el ícono según el estado
  const getStatusIcon = () => {
    switch (status) {
      case TransactionStatus.APPROVED:
        return <CheckCircle className="h-10 w-10 text-green-600" />;
      case TransactionStatus.PENDING:
        return <Clock className="h-10 w-10 text-blue-600" />;
      case TransactionStatus.VOIDED:
        return <Ban className="h-10 w-10 text-amber-600" />;
      case TransactionStatus.DECLINED:
        return <XCircle className="h-10 w-10 text-red-600" />;
      case TransactionStatus.ERROR:
        return <AlertTriangle className="h-10 w-10 text-red-600" />;
      default:
        return <Clock className="h-10 w-10 text-blue-600" />;
    }
  };

  // Función para obtener el título según el estado
  const getStatusTitle = () => {
    switch (status) {
      case TransactionStatus.APPROVED:
        return '¡Recarga Exitosa!';
      case TransactionStatus.PENDING:
        return 'Transacción en Proceso';
      case TransactionStatus.VOIDED:
        return 'Transacción Anulada';
      case TransactionStatus.DECLINED:
        return 'Transacción Rechazada';
      case TransactionStatus.ERROR:
        return 'Error en la Transacción';
      default:
        return 'Transacción en Proceso';
    }
  };

  // Función para obtener la descripción según el estado
  const getStatusDescription = () => {
    switch (status) {
      case TransactionStatus.APPROVED:
        return 'Tu saldo ha sido actualizado correctamente';
      case TransactionStatus.PENDING:
        return 'Estamos procesando tu recarga';
      case TransactionStatus.VOIDED:
        return 'La transacción ha sido anulada';
      case TransactionStatus.DECLINED:
        return 'Tu entidad financiera ha rechazado la transacción';
      case TransactionStatus.ERROR:
        return 'Ha ocurrido un error al procesar tu recarga';
      default:
        return 'Estamos procesando tu recarga';
    }
  };

  // Función para obtener el color del texto del título según el estado
  const getTitleTextColor = () => {
    switch (status) {
      case TransactionStatus.APPROVED:
        return 'text-green-800';
      case TransactionStatus.PENDING:
        return 'text-blue-800';
      case TransactionStatus.VOIDED:
        return 'text-amber-800';
      case TransactionStatus.DECLINED:
        return 'text-red-800';
      case TransactionStatus.ERROR:
        return 'text-red-800';
      default:
        return 'text-blue-800';
    }
  };

  // Función para obtener el color del texto de la descripción según el estado
  const getDescriptionTextColor = () => {
    switch (status) {
      case TransactionStatus.APPROVED:
        return 'text-green-700';
      case TransactionStatus.PENDING:
        return 'text-blue-700';
      case TransactionStatus.VOIDED:
        return 'text-amber-700';
      case TransactionStatus.DECLINED:
        return 'text-red-700';
      case TransactionStatus.ERROR:
        return 'text-red-700';
      default:
        return 'text-blue-700';
    }
  };

  useEffect(() => {
    if (status !== TransactionStatus.PENDING) return;
    const interval = setInterval(() => {
      checkStatus();
    }, 5000); // cada 5 segundos
    return () => clearInterval(interval);
  }, [status, checkStatus]);

  if (loading || !transactionData) {
    return <TransactionLoadingSkeleton />;
  }

  return (
    <MaxWidthWrapper className=" md:w-[600px] lg:w-[800px]">
      <div className="mb-6">
        <Link href="/profile" className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al Perfil
        </Link>
      </div>

      <Card className="border-0 shadow-lg">
        <CardHeader className={`text-center rounded-t-lg border-b pb-6 ${getHeaderBgColor()}`}>
          <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${getIconBgColor()}`}>
            {getStatusIcon()}
          </div>

          <CardTitle className={`text-2xl ${getTitleTextColor()}`}>{getStatusTitle()}</CardTitle>

          <CardDescription className={getDescriptionTextColor()}>{getStatusDescription()}</CardDescription>
        </CardHeader>

        <CardContent className="pt-6 px-6">
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-1">Monto de recarga</p>
              <p className="text-3xl font-bold">COP {transactionData.amount}</p>
            </div>

            <Tabs defaultValue="detalles" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="detalles">Detalles</TabsTrigger>
                <TabsTrigger value="estado">Estado</TabsTrigger>
              </TabsList>

              <TabsContent value="detalles" className="space-y-4 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">ID de Transacción</p>
                    <p className="font-medium">{transactionData.transactionId}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Referencia</p>
                    <p className="font-medium">{transactionData.reference}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Fecha</p>
                    <p className="font-medium">{formatDate(new Date(transactionData.updatedAt))}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Hora</p>
                    <p className="font-medium">{formatDateTime(new Date(transactionData.updatedAt))}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-gray-500">Método de pago</p>
                    <p className="font-medium">{transactionData.paymentMethodType}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-gray-500">Estado</p>
                    <p
                      className={`font-medium ${
                        status === TransactionStatus.APPROVED
                          ? 'text-green-600'
                          : status === TransactionStatus.PENDING
                            ? 'text-blue-600'
                            : status === TransactionStatus.VOIDED
                              ? 'text-amber-600'
                              : 'text-red-600'
                      }`}>
                      {status}
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="estado" className="space-y-4 pt-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 bg-green-100 text-green-600">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Solicitud recibida</p>
                        <p className="text-sm text-gray-500">{formatDate(new Date(transactionData.updatedAt))}</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-0.5 h-6 bg-gray-200 ml-4"></div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                          status === TransactionStatus.PENDING
                            ? 'bg-blue-100 text-blue-600'
                            : status === TransactionStatus.APPROVED
                              ? 'bg-green-100 text-green-600'
                              : status === TransactionStatus.VOIDED
                                ? 'bg-amber-100 text-amber-600'
                                : 'bg-red-100 text-red-600'
                        }`}>
                        {status === TransactionStatus.PENDING ? (
                          <Clock className="h-5 w-5" />
                        ) : status === TransactionStatus.APPROVED ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : status === TransactionStatus.VOIDED ? (
                          <Ban className="h-5 w-5" />
                        ) : status === TransactionStatus.DECLINED ? (
                          <XCircle className="h-5 w-5" />
                        ) : (
                          <AlertTriangle className="h-5 w-5" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">
                          {status === TransactionStatus.PENDING
                            ? 'Procesando pago'
                            : status === TransactionStatus.APPROVED
                              ? 'Pago confirmado'
                              : status === TransactionStatus.VOIDED
                                ? 'Pago anulado'
                                : status === TransactionStatus.DECLINED
                                  ? 'Pago rechazado'
                                  : 'Error en el pago'}
                        </p>
                        <p className="text-sm text-gray-500">
                          {status === TransactionStatus.PENDING
                            ? 'En proceso...'
                            : formatDateTime(new Date(transactionData.updatedAt))}
                        </p>
                      </div>
                    </div>
                  </div>

                  {status !== TransactionStatus.PENDING && (
                    <>
                      <div className="w-0.5 h-6 bg-gray-200 ml-4"></div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                              status === TransactionStatus.APPROVED
                                ? 'bg-green-100 text-green-600'
                                : status === TransactionStatus.VOIDED
                                  ? 'bg-amber-100 text-amber-600'
                                  : 'bg-red-100 text-red-600'
                            }`}>
                            {status === TransactionStatus.APPROVED ? (
                              <CheckCircle className="h-5 w-5" />
                            ) : status === TransactionStatus.VOIDED ? (
                              <Ban className="h-5 w-5" />
                            ) : (
                              <AlertTriangle className="h-5 w-5" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium">
                              {status === TransactionStatus.APPROVED
                                ? 'Saldo actualizado'
                                : status === TransactionStatus.VOIDED
                                  ? 'Transacción anulada'
                                  : 'Transacción no completada'}
                            </p>
                            <p className="text-sm text-gray-500">
                              {status === TransactionStatus.APPROVED
                                ? formatDateTime(new Date(transactionData.updatedAt))
                                : status === TransactionStatus.VOIDED
                                  ? 'La transacción ha sido anulada'
                                  : status === TransactionStatus.DECLINED
                                    ? 'La entidad financiera ha rechazado la transacción'
                                    : 'Ha ocurrido un error al procesar la transacción'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </TabsContent>
            </Tabs>

            {status === TransactionStatus.APPROVED && (
              <div className="bg-green-50 rounded-lg p-4 flex justify-between items-center">
                <div>
                  <p className="text-sm text-green-700">Nuevo saldo disponible</p>
                  <p className="text-xl font-bold text-green-800">COP 9.306.917.990</p>
                </div>
                <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-100 hover:text-green-800">
                  <Download className="h-4 w-4 mr-2" />
                  Comprobante
                </Button>
              </div>
            )}

            {status === TransactionStatus.PENDING && (
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-blue-700">
                  <Clock className="h-4 w-4 inline mr-1" />
                  Tu transacción está siendo procesada. Este proceso puede tomar unos minutos. Puedes verificar el estado o volver
                  más tarde.
                </p>
              </div>
            )}

            {status === TransactionStatus.VOIDED && (
              <div className="bg-amber-50 rounded-lg p-4">
                <p className="text-sm text-amber-700">
                  <Ban className="h-4 w-4 inline mr-1" />
                  La transacción ha sido anulada. Esto puede deberse a una solicitud de cancelación o a un tiempo de espera
                  excedido.
                </p>
              </div>
            )}

            {status === TransactionStatus.DECLINED && (
              <div className="bg-red-50 rounded-lg p-4">
                <p className="text-sm text-red-700">
                  <XCircle className="h-4 w-4 inline mr-1" />
                  Tu entidad financiera ha rechazado la transacción. Esto puede deberse a fondos insuficientes o a restricciones
                  de seguridad. Por favor, contacta a tu banco para más información.
                </p>
              </div>
            )}

            {status === TransactionStatus.ERROR && (
              <div className="bg-red-50 rounded-lg p-4">
                <p className="text-sm text-red-700">
                  <AlertTriangle className="h-4 w-4 inline mr-1" />
                  Ha ocurrido un error al procesar tu transacción. Esto puede deberse a problemas técnicos temporales. Por favor,
                  intenta nuevamente más tarde.
                </p>
              </div>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex flex-col space-y-3 px-6 pb-6">
          {status === TransactionStatus.PENDING && (
            <Button className="w-full" onClick={checkStatus} disabled={loading}>
              {loading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Verificando...
                </span>
              ) : (
                <>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Verificar Estado
                </>
              )}
            </Button>
          )}

          {status === TransactionStatus.APPROVED && (
            <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
              <Link href="/proyectos">
                Explorar Proyectos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}

          {(status === TransactionStatus.DECLINED ||
            status === TransactionStatus.ERROR ||
            status === TransactionStatus.VOIDED) && (
            <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/profile/recargar">
                Intentar Nuevamente
                <RefreshCw className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}

          <Button
            variant="outline"
            asChild
            className={
              status === TransactionStatus.DECLINED || status === TransactionStatus.ERROR
                ? 'border-red-200 text-red-700 hover:bg-red-50'
                : status === TransactionStatus.VOIDED
                  ? 'border-amber-200 text-amber-700 hover:bg-amber-50'
                  : ''
            }>
            <Link href="/profile">Volver al Perfil</Link>
          </Button>
        </CardFooter>
      </Card>
    </MaxWidthWrapper>
  );
}
