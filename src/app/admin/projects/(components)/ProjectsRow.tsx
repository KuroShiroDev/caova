import { TableCell, TableRow } from '@/components/ui/table';
import React from 'react';
import EditProjectPopOver from './EditProjectPopOver';
import { ProjectInvesmentDialog } from './ProjectInvestmentDialog';
import { ProjectWithInvestmentsAndUsers } from '@/interfaces/project.interface';

interface Props {
  project: ProjectWithInvestmentsAndUsers;
}
const ProjectsRow = ({ project }: Props) => {
  console.log(project);
  return (
    <TableRow>
      <TableCell className="font-medium">{project.projectId}</TableCell>
      <TableCell>{project.address}</TableCell>
      <TableCell>{project.title}</TableCell>
      <TableCell>{project.projectValueTotal?.toLocaleString()} COP</TableCell>
      <TableCell>{project.projectValueActual ? `${project.projectValueActual?.toLocaleString()} COP` : 'Pendiente'}</TableCell>
      <TableCell>{project.status}</TableCell>
      <TableCell>{project.startIncomeDate?.toLocaleDateString()} </TableCell>
      <TableCell>{project.endIncomeDate?.toLocaleDateString()}</TableCell>
      <TableCell>
        <ProjectInvesmentDialog project={project} />
      </TableCell>
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
