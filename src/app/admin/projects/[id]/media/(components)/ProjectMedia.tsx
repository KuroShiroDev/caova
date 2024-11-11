'use client';
import { Project } from '@prisma/client';
import Image from 'next/image';

interface Props {
  project: Project | null;
}
const ProjectMedia = ({ project }: Props) => {
  return (
    <div>
      <h3 className="text-lg font-bold my-4">Imagenes del proyecto</h3>
      {project ? (
        <div>
          {project?.media.length > 0 ? (
            <div className="grid grid-cols-3 gap-4 bg-gray-200 p-2 rounded-md">
              {project.media.map((media: string) => (
                <Image
                  key={media}
                  src={media}
                  alt="Imagen del proyecto"
                  width={200}
                  height={200}
                  className="w-full h-48 object-fit rounded-md"
                />
              ))}
            </div>
          ) : (
            <div>Proyecto sin imagenes</div>
          )}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ProjectMedia;
