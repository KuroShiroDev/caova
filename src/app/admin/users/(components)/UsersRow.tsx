import { TableCell, TableRow } from '@/components/ui/table';
import { User } from '@prisma/client';
import React from 'react';

interface Props {
  user: User;
}
const UsersRow = ({ user }: Props) => {
  const userCashAmount = user.cashAmount ? user.cashAmount?.toLocaleString() : '0';
  return (
    <TableRow>
      <TableCell className="font-medium">{user.userId}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.role}</TableCell>
      <TableCell>{user.isActive ? 'Activo' : 'Inactivo'}</TableCell>
      <TableCell className="text-right">{`${userCashAmount} COP`}</TableCell>
    </TableRow>
  );
};

export default UsersRow;
