'use client';
import useCreateProject from '@/hooks/project/useCreateProject';
import ProjectForm from '../../(components)/ProjectForm';

const CreateProjectForm = () => {
  const { form, onSubmit } = useCreateProject();

  return <ProjectForm form={form} onSubmit={onSubmit} />;
};

export default CreateProjectForm;
