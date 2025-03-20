import React from 'react';
import { TableCell, TableRow } from '@/components/ui/table';
import { GetAdminInvestments } from '@/interfaces/investment.interface';

interface Props {
  investment: GetAdminInvestments;
}

const InvestmentsRow = ({ investment }: Props) => {
  return (
    <TableRow>
      <TableCell className="font-medium">{investment.investmentId}</TableCell>
      <TableCell>{investment.project.title}</TableCell>
      <TableCell>{investment.projectId}</TableCell>
      <TableCell>{investment.user.email}</TableCell>
      <TableCell>{`${investment.amount?.toLocaleString()} COP`}</TableCell>
      <TableCell>{investment.transaction_status}</TableCell>
      <TableCell className="text-right">{investment.createdAt.toLocaleDateString()} </TableCell>
    </TableRow>
  );
};

export default InvestmentsRow;
