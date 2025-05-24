import { updateDocumentName } from '@/actions/projects';
import { useToast } from '@/hooks/use-toast';
import { editFileNameSchema } from '@/lib/formSchemas/editFileNameSchema';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

//TODO - Refactorizar este hook para que sea usando el {name:""-link:""}
const useEditDocumentName = ({ projectId, oldName, setProject, setLoading }) => {
  const handleUpdateFileName = async (projectId, oldName, newName, setProject, setLoading) => {
    setLoading(true);
    try {
      const updatedProject = await updateDocumentName(projectId, oldName, newName);
      setProject(updatedProject);
      toast({
        title: 'Nombre de archivo actualizado',
        description: 'El nombre de archivo se ha actualizado correctamente.',
      });
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const form = useForm<z.infer<typeof editFileNameSchema>>({
    resolver: zodResolver(editFileNameSchema),
    defaultValues: {
      name: 'New Project',
    },
  });

  async function onSubmit(values: z.infer<typeof editFileNameSchema>) {
    try {
      await handleUpdateFileName(projectId, oldName, values.name, setProject, setLoading);
      form.reset();
    } catch (error) {
      console.error(error);
    }
  }
  const { toast } = useToast();

  return {
    form,
    onSubmit,
  };
};

export default useEditDocumentName;
