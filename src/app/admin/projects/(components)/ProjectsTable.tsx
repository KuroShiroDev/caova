import React from 'react';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import ProjectsRow from './ProjectsRow';
import { ProjectWithInvestmentsAndUsers } from '@/interfaces/project.interface';

interface Props {
  projects: ProjectWithInvestmentsAndUsers[];
}
const ProjectsTable = ({ projects }: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Direccion</TableHead>
          <TableHead>Titulo</TableHead>
          <TableHead>Meta de inversion</TableHead>
          <TableHead>Colecta Actual</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Fecha Inicial</TableHead>
          <TableHead>Fecha Final</TableHead>
          <TableHead>Inversiones</TableHead>
          <TableHead className="text-right">Editar</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <ProjectsRow key={project.projectId} project={project} />
        ))}
      </TableBody>
    </Table>
  );
};

export default ProjectsTable;
