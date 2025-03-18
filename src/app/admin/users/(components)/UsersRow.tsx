import { TableCell, TableRow } from '@/components/ui/table';
import React from 'react';

const UsersRow = () => {
  return (
    <TableRow>
      <TableCell className="font-medium">001</TableCell>
      <TableCell>example@example.com</TableCell>
      <TableCell>User</TableCell>
      <TableCell>Activo</TableCell>
      <TableCell className="text-right">30.000 COP</TableCell>
    </TableRow>
  );
};

export default UsersRow;
