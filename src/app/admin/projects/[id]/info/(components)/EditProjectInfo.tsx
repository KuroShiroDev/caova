'use client';
import useEditProject from '@/hooks/project/useEditProject';
import ProjectForm from '../../../(components)/ProjectForm';
import { Project } from '@prisma/client';

const EditProjectInfo = ({ project }: { project: Project }) => {
  const { form, onSubmit } = useEditProject({ project });
  return (
    <div className="grid grid-cols-1 justify-items-center">
      <h2 className="title text-center w-100">Info | Proyecto ID #{project.projectId}</h2>
      <ProjectForm form={form} onSubmit={onSubmit} isEdit={true} />
    </div>
  );
};

export default EditProjectInfo;
