'use client';
import { useParams } from 'next/navigation';
import UploadProjectFiles from './UploadProjectFiles';
import ProjectMedia from './ProjectMedia';
import useGetProject from '@/hooks/project/useGetProject';

const EditProjectMedia = () => {
  const params = useParams();
  const { project, setProject } = useGetProject({ id: Number(params.id) });
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
