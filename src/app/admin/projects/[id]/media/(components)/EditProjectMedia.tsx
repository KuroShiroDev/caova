'use client';
import { useEffect, useState } from 'react';
import { getOneProjectBasic } from '@/actions/projects';
import { useParams } from 'next/navigation';
import { Project } from '@prisma/client';
import UploadProjectFiles from './UploadProjectFiles';
import ProjectMedia from './ProjectMedia';

const EditProjectMedia = () => {
  const [project, setProject] = useState<Project | null>(null);
  const params = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await getOneProjectBasic(Number(params.id));
        setProject(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProject();
  }, [params.id]);
  return (
    <>
      <h2 className="title">Media | Proyecto ID #{params.id}</h2>
      <div className="grid gap-12 grid-cols-1 lg:grid-cols-2 min-h-[400px] items-start">
        <UploadProjectFiles setProject={setProject} />
        <ProjectMedia project={project} setProject={setProject} />
      </div>
    </>
  );
};

export default EditProjectMedia;
