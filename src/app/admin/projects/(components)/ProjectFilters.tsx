import React from 'react';
import { Input } from '@/components/ui/input';
import CustomSelect from '@/components/ui/CustomSelect';
import { Button } from '@/components/ui/button';
import { statusFilterProjectsOptions } from '../(data)/data';
import Link from 'next/link';

const ProjectFilters = () => {
  return (
    <div className="flex flex-col gap-2 md:flex-row justify-between mb-5">
      <div className="flex justify-between items-end gap-2">
        <Input type="text" placeholder="Buscar por Titulo o Dirección" />
        <Button>Buscar</Button>
      </div>
      <div className="flex justify-between items-end gap-2">
        <Link href="/admin/projects/create-project">
          <Button variant="secondary">Crear proyecto</Button>
        </Link>
        <CustomSelect label="Status" options={statusFilterProjectsOptions} placeHolder="Todos" />
      </div>
    </div>
  );
};

export default ProjectFilters;
