'use client';
import React from 'react';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import UsersRow from './UsersRow';
import { UserWithWallet } from '@/interfaces/user.interface';

interface Props {
  users: UserWithWallet[];
}
const UsersTable = ({ users }: Props) => {
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
        {users.map((user) => (
          <UsersRow key={user.userId} user={user} />
        ))}
      </TableBody>
    </Table>
  );
};

export default UsersTable;
