import React from 'react';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import UsersRow from './UsersRow';

const UsersTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Correo</TableHead>
          <TableHead>Rol</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Caova Creditos</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((user) => (
          <UsersRow key={user} />
        ))}
      </TableBody>
    </Table>
  );
};

export default UsersTable;
