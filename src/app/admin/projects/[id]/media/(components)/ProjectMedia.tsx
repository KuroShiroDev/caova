'use client';
import { removeMediaFromProject } from '@/actions/projects';
import { useEdgeStore } from '@/lib/edgestore';
import { Project } from '@prisma/client';
import { LoaderIcon } from 'lucide-react';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';

interface Props {
  project: Project | null;
  setProject: Dispatch<SetStateAction<Project | null>>;
}
const ProjectMedia = ({ project, setProject }: Props) => {
  const { edgestore } = useEdgeStore();
  const [loading, setLoading] = useState('');
  const handleDelete = async (media: string) => {
    setLoading(media);
    try {
      const updatedProject = await removeMediaFromProject(project!.projectId, [media]);
      await edgestore.cavoaProjects.delete({ url: media });
      setProject(updatedProject);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading('');
    }
  };
  return (
    <div>
      <h3 className="text-lg font-bold my-4">Imagenes del proyecto</h3>
      {project ? (
        <div>
          {project?.media.length > 0 ? (
            <div className="grid grid-cols-3 gap-4 bg-gray-200 p-4 rounded-md">
              {project.media.map((media: string) => (
                <div className="relative" key={media}>
                  <Image
                    src={media}
                    alt="Imagen del proyecto"
                    width={200}
                    height={200}
                    className="w-full h-24 md:h-40 lg:h-40 xl:h-48 object-cover rounded-md"
                  />
                  <button
                    className="absolute text-sm top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md"
                    onClick={() => handleDelete(media)}>
                    {loading === media ? <LoaderIcon className="animate-spin mr-2" /> : 'Eliminar'}
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div>Proyecto sin imagenes</div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[200px]">
          <LoaderIcon className="animate-spin mr-2" />
        </div>
      )}
    </div>
  );
};

export default ProjectMedia;

//TODO: Delete this todo.
