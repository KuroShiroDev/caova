'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { IoCloseCircle } from 'react-icons/io5';
import { useEdgeStore } from '@/lib/edgestore';
import { useState, useRef, Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { addMediaToProject } from '@/actions/projects';
import { useToast } from '@/hooks/use-toast';
import { useParams } from 'next/navigation';
import { LoaderIcon } from 'lucide-react';
import { Project } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  setProject?: Dispatch<SetStateAction<Project | null>>;
};

export default function UploadProjectFiles({ setProject }: Props) {
  const [files, setFiles] = useState<File[]>([]);
  const { edgestore } = useEdgeStore();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const params = useParams();

  const UploadProjectFiles = async () => {
    setLoading(true);
    const urls: string[] = [];
    if (files.length > 0) {
      for (const file of files) {
        const fileName = `cavoa-${params.id}-${uuidv4()}`;
        const res = await edgestore.cavoaProjects.upload({ file, options: { manualFileName: fileName } });
        urls.push(res.url);
      }
    }
    try {
      const project = await addMediaToProject(
        Array.isArray(params.id) ? params.id[0] : params.id,
        urls
      );
      toast({
        title: 'Media actualizada!',
        description: 'Las imagenes se han actualizado exitosamente',
      });
      if (setProject) {
        setProject(project);
      }
      setFiles([]);
      inputRef.current!.value = '';
    } catch (error) {
      console.error(error);
      toast({
        title: 'Algo succedio!',
        description: 'Error al actualizar las imagenes',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAttachFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files!);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  return (
    <div className="grid gap-2 grid-cols-1">
      <Label className="text-lg font-bold my-4">Carga nuevas imagenes</Label>
      <Input type="file" multiple onChange={(e) => handleAttachFile(e)} ref={inputRef} />
      {files.length > 0 && (
        <>
          <h4 className="text-lg font-bold color-white">Vista Previa</h4>
          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 bg-slate-400 rounded-md p-4">
            {files.map((file, index) => (
              <div key={index} className="relative">
                <Image
                  className="w-full h-32 object-cover rounded-md"
                  width={100}
                  height={100}
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                />
                <span className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 cursor-pointer">
                  <IoCloseCircle onClick={() => handleRemoveFile(index)} />
                </span>
              </div>
            ))}
          </div>
        </>
      )}
      <Button onClick={UploadProjectFiles} disabled={files.length === 0}>
        {loading ? <LoaderIcon className="animate-spin mr-2" /> : 'Guardar'}
      </Button>
    </div>
  );
}
