import { createProject } from '@/actions/projects';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { projectSchema } from '@/lib/formSchemas/projectSchema';
import { useToast } from '../use-toast';
import { useRouter } from 'next/navigation';

const useCreateProject = () => {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: 'New Project',
      description: 'Description',
      address: 'Calle 34 #50 -35',
      projectValueTotal: 1000000,
      startIncomeDate: new Date(),
      endIncomeDate: new Date(),
      country: 'Colombia',
      department: 'Antioquia',
      city: 'Medellín',
      minInvestmentAmount: 100000,
      propertyType: 'viviendaDeInteresSocial',
      squareMeters: 50,
      bedrooms: 2,
      bathrooms: 2,
      rentalYieldsAnnualCash: 100000,
      incomeFromValuationAnnualCash: 100000,
      builder: 'Contructora',
      commonAreas: 'piscina, turco',
      projectLinks: '',
      totalPropertyCost: 500000,
      finishingCost: 200000,
      basicEquipmentAndTestingCost: 100000,
      legalCost: 100000,
      cetificatesSNandRCost: 50000,
      studyTitleCost: 50000,
      companiesIncorporationCost: 50000,
      accountServicesCost: 50000,
      propertyAppraisal: 50000,
      transactionCost: 50000,
      searchAndAdvertisingFee: 50000,
      contigenciesFee: 50000,
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
      await createProject(transaformedValues);
      toast({
        title: 'Proyecto creado!',
        description: 'El proyecto se ha creado exitosamente',
      });
      router.push('/admin/projects');
    } catch (error) {
      toast({
        title: 'Algo succedio!',
        description: 'No se pudo crear el proyecto',
        variant: 'destructive',
      });
      console.error(error);
    }
  }

  return { form, onSubmit };
};

export default useCreateProject;
