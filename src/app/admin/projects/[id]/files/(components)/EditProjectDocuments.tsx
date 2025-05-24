'use client';
import { useParams } from 'next/navigation';
import UploadProjectDocuments from './UploadProjectDocuments';
import useGetProject from '@/hooks/project/useGetProject';
import ProjectDocuments from './ProjectDocuments';

const EditProjectDocuments = () => {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const { project, setProject } = useGetProject({ id });
  return (
    <>
      <h2 className="title">Documentos | Proyecto ID #{params.id}</h2>
      <div className="grid gap-12 grid-cols-1 lg:grid-cols-2 min-h-[400px] items-start">
        <UploadProjectDocuments setProject={setProject} />
        <ProjectDocuments project={project} setProject={setProject} />
      </div>
    </>
  );
};

export default EditProjectDocuments;
