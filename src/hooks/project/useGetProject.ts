import { useState, useEffect } from 'react';
import { getOneProjectBasic } from '@/actions/projects';
import { Project } from '@prisma/client';

interface Props {
  id: number;
}

const useGetProject = ({ id }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await getOneProjectBasic(id);
        setProject(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProject();
  }, [id]);
  return { project, setProject, isLoading };
};

export default useGetProject;
