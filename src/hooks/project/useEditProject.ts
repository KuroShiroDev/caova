import { updateProject } from '@/actions/projects';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { projectSchema } from '@/lib/formSchemas/projectSchema';
import { useToast } from '../use-toast';
import { useRouter } from 'next/navigation';
import { Project } from '@prisma/client';
import { formatDate } from '@/lib/utils';

interface Props {
  project: Project;
}
const useEditProject = ({ project }: Props): { form: UseFormReturn<any>; onSubmit: (values: any) => Promise<void> } => {
  const { toast } = useToast();
  const router = useRouter();

  const projectCommonAreas = project?.commonAreas?.join(', ');
  const startIncomeDate = project?.startIncomeDate ? formatDate(new Date(project?.startIncomeDate)) : undefined;
  const endIncomeDate = project?.endIncomeDate ? formatDate(new Date(project?.endIncomeDate)) : undefined;
  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: project?.title ?? undefined,
      description: project?.description ?? undefined,
      address: project?.address ?? undefined,
      projectValueTotal: Number(project?.projectValueTotal) ?? undefined,
      startIncomeDate: startIncomeDate,
      endIncomeDate: endIncomeDate,
      country: project?.country ?? undefined,
      department: project?.department ?? undefined,
      city: project?.city ?? undefined,
      minInvestmentAmount: Number(project?.minInvestmentAmount) ?? 0,
      propertyType: project?.propertyType ?? undefined,
      squareMeters: Number(project?.squareMeters) ?? undefined,
      bedrooms: project?.bedrooms ?? undefined,
      bathrooms: project?.bathrooms ?? undefined,
      rentalYieldsAnnualCash: project?.rentalYieldsAnnualCash ?? undefined,
      incomeFromValuationAnnualCash: project?.incomeFromValuationAnnualCash ?? undefined,
      builder: project?.builder ?? undefined,
      commonAreas: projectCommonAreas ?? undefined,
      projectLinks: project?.projectLinks ?? undefined,
      totalPropertyCost: Number(project?.totalPropertyCost) ?? undefined,
      finishingCost: Number(project?.finishingCost) ?? undefined,
      basicEquipmentAndTestingCost: Number(project?.basicEquipmentAndTestingCost) ?? undefined,
      legalCost: Number(project?.legalCost) ?? undefined,
      cetificatesSNandRCost: Number(project?.cetificatesSNandRCost) ?? undefined,
      studyTitleCost: Number(project?.studyTitleCost) ?? undefined,
      companiesIncorporationCost: Number(project?.companiesIncorporationCost) ?? undefined,
      accountServicesCost: Number(project?.accountServicesCost) ?? undefined,
      propertyAppraisal: Number(project?.propertyAppraisal) ?? undefined,
      transactionCost: Number(project?.transactionCost) ?? undefined,
      searchAndAdvertisingFee: Number(project?.searchAndAdvertisingFee) ?? undefined,
      contigenciesFee: Number(project?.contigenciesFee) ?? undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof projectSchema>) {
    const transaformedValues = {
      ...values,
      commonAreas: values.commonAreas.split(', '),
      startIncomeDate: new Date(values.startIncomeDate),
      endIncomeDate: new Date(values.endIncomeDate),
    };
    try {
      await updateProject(project.projectId, transaformedValues);
      toast({
        title: 'Proyecto actualizado!',
        description: 'El proyecto se ha actualizado exitosamente',
      });
      router.push('/admin/projects');
    } catch (error) {
      toast({
        title: 'Algo succedio!',
        description: 'No se pudo actualizar el proyecto',
        variant: 'destructive',
      });
      console.error(error);
    }
  }

  return { form, onSubmit };
};

export default useEditProject;
