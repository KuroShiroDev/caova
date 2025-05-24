'use client';
import { removeFilesFromProject } from '@/actions/projects';
import { useEdgeStore } from '@/lib/edgestore';
import { getFilenameFromUrl } from '@/lib/utils';
import { Project } from '@prisma/client';
import { Dispatch, SetStateAction, useState } from 'react';
import useEditDocumentName from '../(hooks)/useEditFileName';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LoaderIcon, Edit } from 'lucide-react';
import { ProjectDocument } from '@/interfaces/project.interface';

interface Props {
  project: Project | null;
  setProject: Dispatch<SetStateAction<Project | null>>;
}
const ProjectDocuments = ({ project, setProject }: Props) => {
  const { edgestore } = useEdgeStore();
  const [loading, setLoading] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState('');
  const { form, onSubmit } = useEditDocumentName({
    projectId: project?.projectId,
    oldName: selectedFile,
    setProject,
    setLoading,
  });
  const handleDelete = async (url: string) => {
    setLoading(url);
    try {
      const updatedProject = await removeFilesFromProject(project!.projectId, [url]);
      setProject(updatedProject);
      await edgestore.cavoaDocuments.delete({ url: url });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading('');
    }
  };

  const handleOpenEditModal = (fileUrl: ProjectDocument) => {
    setSelectedFile(fileUrl.name);
    form.setValue('name', fileUrl.name);
    setIsEditModalOpen(true);
  };

  const handleSubmitEdit = async (values) => {
    await onSubmit(values);
    setIsEditModalOpen(false);
  };

  return (
    <div>
      <h3 className="text-lg font-bold my-4">Archivos del proyecto</h3>
      {project ? (
        <div>
          {project?.documents.length > 0 ? (
            <div className="grid grid-cols-3 gap-4 bg-gray-200 p-4 rounded-md">
              {(project.documents as unknown as ProjectDocument[]).map((document) => (
                <div className="relative" key={document.url}>
                  <div className="bg-white border border-gray-300 p-2 rounded-md pt-12">
                    <p>{getFilenameFromUrl(document.name)}</p>
                  </div>
                  <div className="absolute top-2 right-2 flex space-x-2">
                    <a
                      href={document.url}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 transition-colors">
                      Ver
                    </a>
                    <button
                      className="text-sm bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600 transition-colors"
                      onClick={() => handleOpenEditModal(document)}>
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      className="text-sm bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition-colors"
                      onClick={() => handleDelete(document.url)}>
                      {loading === document.url ? <LoaderIcon className="animate-spin mr-2" /> : 'Eliminar'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>Proyecto sin documentos</div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[200px]">
          <LoaderIcon className="animate-spin mr-2" />
        </div>
      )}

      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Editar nombre de archivo</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmitEdit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre del archivo</FormLabel>
                    <FormControl>
                      <Input placeholder="Nombre del archivo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsEditModalOpen(false)}>
                  Cancelar
                </Button>
                <Button type="submit" disabled={loading === 'true'}>
                  {loading === 'true' ? <LoaderIcon className="animate-spin mr-2" /> : 'Guardar'}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectDocuments;
