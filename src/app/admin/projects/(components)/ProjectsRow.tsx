import { TableCell, TableRow } from '@/components/ui/table';
import { Project } from '@prisma/client';
import React from 'react';
import EditProjectPopOver from './EditProjectPopOver';

interface Props {
  project: Project;
}
const ProjectsRow = ({ project }: Props) => {
  return (
    <TableRow>
      <TableCell className="font-medium">{project.projectId}</TableCell>
      <TableCell>{project.address}</TableCell>
      <TableCell>{project.title}</TableCell>
      {/* //TODO: Apply currency format */}
      <TableCell>{project.projectValueTotal?.toLocaleString()} COP</TableCell>
      {/* //TODO: Apply currency format */}
      <TableCell>{project.projectValueActual ? `${project.projectValueActual?.toLocaleString()} COP` : 'Pendiente'}</TableCell>
      <TableCell>{project.status}</TableCell>
      <TableCell>{project.startIncomeDate?.toLocaleDateString()} </TableCell>
      <TableCell>{project.endIncomeDate?.toLocaleDateString()}</TableCell>
      <TableCell className="text-right">
        {/* <Button variant="secondary">
          {' '}
          <MdEdit />
        </Button> */}
        <EditProjectPopOver id={project.projectId} />
      </TableCell>
    </TableRow>
  );
};

export default ProjectsRow;
