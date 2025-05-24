import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Link from 'next/link';
import { MdEdit } from 'react-icons/md';

type Props = {
  id: string;
};

const EditProjectPopOver = ({ id }: Props) => {
  return (
    <Popover>
      <PopoverTrigger>
        <MdEdit />
      </PopoverTrigger>
      <PopoverContent>
        <p>Qué desea editar en el proyecto con id {id}?</p>
        <div className="flex justify-end gap-4 mt-2 mx-2">
          <Link href={`/admin/projects/${id}/media`}>
            <Button>Media</Button>
          </Link>
          <Link href={`/admin/projects/${id}/info`}>
            <Button>Info</Button>
          </Link>
          <Link href={`/admin/projects/${id}/files`}>
            <Button>Archivos</Button>
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default EditProjectPopOver;
