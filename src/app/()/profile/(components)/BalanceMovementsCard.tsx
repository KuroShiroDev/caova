'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowUpCircle, ArrowDownCircle, Search, Wallet, Building2 } from 'lucide-react';
import { TransactionWithInvestment } from '@/interfaces/transaction.interface';
import { TransactionType, TransactionStatus } from '@prisma/client';
import { formatDate } from '@/lib/utils';

interface BalanceMovementsCardProps {
  transactions: TransactionWithInvestment[];
  currentBalance: bigint | number;
}

export const BalanceMovementsCard = ({ transactions, currentBalance }: BalanceMovementsCardProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const getTransactionDescription = (transaction: TransactionWithInvestment) => {
    switch (transaction.type) {
      case TransactionType.RECHARGE:
        return `Recarga de saldo${transaction.paymentMethodType ? ` - ${transaction.paymentMethodType}` : ''}`;
      case TransactionType.SPEND:
        return `Inversión en ${transaction.investment?.projectName || 'proyecto'}`;
      case TransactionType.WITHDRAWAL:
        return 'Retiro de saldo';
      default:
        return 'Transacción';
    }
  };

  const filteredTransactions = transactions.filter((transaction) => {
    const description = getTransactionDescription(transaction);
    const matchesSearch = description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || transaction.type === filterType;
    const matchesStatus = filterStatus === 'all' || transaction.status === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  // Calcular estadísticas
  const approvedTransactions = transactions.filter((t) => t.status === TransactionStatus.APPROVED);

  const totalRecharges = approvedTransactions
    .filter((t) => t.type === TransactionType.RECHARGE)
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const totalSpent = approvedTransactions
    .filter((t) => t.type === TransactionType.SPEND)
    .reduce((sum, t) => sum + Number(t.amount), 0);

  // Función para obtener el ícono según el tipo de transacción
  const getTransactionIcon = (type: TransactionType) => {
    switch (type) {
      case TransactionType.RECHARGE:
        return <ArrowDownCircle className="h-5 w-5 text-green-600" />;
      case TransactionType.SPEND:
        return <Building2 className="h-5 w-5 text-blue-600" />;
      case TransactionType.WITHDRAWAL:
        return <ArrowUpCircle className="h-5 w-5 text-red-600" />;
      default:
        return <Wallet className="h-5 w-5 text-gray-600" />;
    }
  };

  // Función para obtener el color del badge según el estado
  const getStatusBadgeVariant = (status: TransactionStatus) => {
    switch (status) {
      case TransactionStatus.APPROVED:
        return 'default' as const;
      case TransactionStatus.PENDING:
        return 'secondary' as const;
      case TransactionStatus.DECLINED:
      case TransactionStatus.ERROR:
        return 'destructive' as const;
      case TransactionStatus.VOIDED:
        return 'outline' as const;
      default:
        return 'outline' as const;
    }
  };

  // Función para obtener el texto del estado en español
  const getStatusText = (status: TransactionStatus) => {
    switch (status) {
      case TransactionStatus.APPROVED:
        return 'Aprobado';
      case TransactionStatus.PENDING:
        return 'Pendiente';
      case TransactionStatus.DECLINED:
        return 'Rechazado';
      case TransactionStatus.ERROR:
        return 'Error';
      case TransactionStatus.VOIDED:
        return 'Anulado';
      default:
        return status;
    }
  };

  // Función para formatear el monto
  const formatAmount = (amount: bigint, type: TransactionType) => {
    const numAmount = Number(amount);
    const formattedAmount = numAmount.toLocaleString('es-CO');

    // Para RECHARGE es positivo, para SPEND y WITHDRAWAL es negativo
    const isPositive = type === TransactionType.RECHARGE;

    return {
      formatted: `${isPositive ? '+' : '-'} $${formattedAmount}`,
      className: isPositive ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold',
    };
  };

  return (
    <div className="space-y-6">
      {/* Resumen de balance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Wallet className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-sm text-muted-foreground">Saldo actual</p>
                <p className="text-lg font-bold">COP {currentBalance.toLocaleString('es-CO')}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <ArrowDownCircle className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-sm text-muted-foreground">Total recargado</p>
                <p className="text-lg font-bold text-green-600">+${totalRecharges.toLocaleString('es-CO')}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-sm text-muted-foreground">Total invertido</p>
                <p className="text-lg font-bold text-blue-600">${totalSpent.toLocaleString('es-CO')}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filtros y búsqueda */}
      <Card>
        <CardHeader>
          <CardTitle>Historial de movimientos</CardTitle>
          <CardDescription>Consulta todas tus transacciones de recarga, inversión y retiro</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar transacciones..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Tipo de transacción" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los tipos</SelectItem>
                <SelectItem value={TransactionType.RECHARGE}>Recargas</SelectItem>
                <SelectItem value={TransactionType.SPEND}>Inversiones</SelectItem>
                <SelectItem value={TransactionType.WITHDRAWAL}>Retiros</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los estados</SelectItem>
                <SelectItem value={TransactionStatus.APPROVED}>Aprobado</SelectItem>
                <SelectItem value={TransactionStatus.PENDING}>Pendiente</SelectItem>
                <SelectItem value={TransactionStatus.DECLINED}>Rechazado</SelectItem>
                <SelectItem value={TransactionStatus.ERROR}>Error</SelectItem>
                <SelectItem value={TransactionStatus.VOIDED}>Anulado</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Lista de transacciones */}
          <div className="space-y-4">
            {filteredTransactions.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No se encontraron transacciones con los filtros aplicados</p>
              </div>
            ) : (
              filteredTransactions.map((transaction) => {
                const amount = formatAmount(BigInt(transaction.amount), transaction.type);
                const description = getTransactionDescription(transaction);

                return (
                  <div
                    key={transaction.transactionId}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">{getTransactionIcon(transaction.type)}</div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{description}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <p className="text-sm text-muted-foreground">{formatDate(transaction.createdAt)}</p>
                          {transaction.reference && (
                            <span className="text-xs text-muted-foreground font-mono">{transaction.reference}</span>
                          )}
                          {transaction.investmentId && (
                            <Badge variant="outline" className="text-xs">
                              {transaction.investmentId}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant={getStatusBadgeVariant(transaction.status)}>{getStatusText(transaction.status)}</Badge>
                      <p className={amount.className}>{amount.formatted}</p>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Paginación */}
          {filteredTransactions.length > 0 && (
            <div className="flex justify-center mt-6">
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Anterior
                </Button>
                <Button variant="outline" size="sm">
                  1
                </Button>
                <Button variant="outline" size="sm" disabled>
                  Siguiente
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
