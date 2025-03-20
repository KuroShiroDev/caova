import React from 'react';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import InvestmentsRow from './InvestmentsRow';
import { GetAdminInvestments } from '@/interfaces/investment.interface';

interface Props {
  investments: GetAdminInvestments[];
}
const InvestmentsTable = ({ investments }: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Titutlo Proyecto</TableHead>
          <TableHead>ID Proyecto</TableHead>
          <TableHead>Correo Usuario</TableHead>
          <TableHead>Monto</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Fecha Creación</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {investments.map((investment) => (
          <InvestmentsRow key={investment.projectId} investment={investment} />
        ))}
      </TableBody>
    </Table>
  );
};

export default InvestmentsTable;
