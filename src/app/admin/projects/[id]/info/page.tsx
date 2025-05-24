'use client';
import { useParams } from 'next/navigation';
import EditProjectInfo from './(components)/EditProjectInfo';
import useGetProject from '@/hooks/project/useGetProject';
import { LoaderIcon } from 'lucide-react';

export default function EditProjectPage() {
  const params = useParams();
  const { project } = useGetProject({ id: params.id as string });
  if (!project) {
    return <LoaderIcon className="animate-spin mr-2" />;
  }
  return <EditProjectInfo project={project} />;
}
