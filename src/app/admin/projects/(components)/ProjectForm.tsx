import React from 'react';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import CustomTextInput from '@/components/customForm/CustomTextInput';
import CustomTextArea from '@/components/customForm/CustomTextArea';
import CustomSelect from '@/components/customForm/CustomSelect';
import { propertyTypeOptions } from '@/app/data';
import { UseFormReturn } from 'react-hook-form';
import { projectSchema } from '@/lib/formSchemas/projectSchema';
import { z } from 'zod';

interface Props {
  form: UseFormReturn<any>;
  onSubmit: (values: z.infer<typeof projectSchema>) => Promise<void>;
  isEdit?: boolean;
}

const ProjectForm = ({ form, onSubmit, isEdit = false }: Props) => {
  return (
    <div className="flex flex-col gap-2 items-center my-14 md:my-24 w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-y-4 w-11/12  md:w-8/12 lg:w-6/12 min-w-[360px]">
          <CustomTextInput form={form} label="Titulo del proyecto *" name="title" />
          <CustomTextInput form={form} label="Pais" name="country" />
          <CustomTextInput form={form} label="Departamento" name="department" />
          <CustomTextInput form={form} label="Ciudad" name="city" />
          <CustomTextInput form={form} label="Dirección *" name="address" />
          <div className="relative w-full h-[300px]">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&q=${form.watch(
                'country'
              )},${form.watch('department')},${form.watch('city')},${form.watch('address')}`}
              className="absolute inset-0 w-full h-full"
              title="map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <CustomTextInput form={form} label="Valor total del proyecto*" name="projectValueTotal" type="number" />
          <CustomTextInput form={form} label="Fecha de inicio Rentas" name="startIncomeDate" type="date" />
          <CustomTextInput form={form} label="Fecha de fin de rentas" name="endIncomeDate" type="date" />
          <CustomTextInput form={form} label="Monto minimo invertido *" name="minInvestmentAmount" type="number" />
          <CustomSelect form={form} label="Tipo de propiedad" name="propertyType" options={propertyTypeOptions} />
          <CustomTextInput form={form} label="Metros cuadrados*" name="squareMeters" type="number" />
          <CustomTextInput form={form} label="Habitaciones *" name="bedrooms" type="number" />
          <CustomTextInput form={form} label="Baños *" name="bathrooms" type="number" />
          <CustomTextInput form={form} label="Rentabilidad de la renta anual*" name="rentalYieldsAnnualCash" type="number" />
          <CustomTextInput
            form={form}
            label="Ingresos de la valuación anual *"
            name="incomeFromValuationAnnualCash"
            type="number"
          />
          <CustomTextInput form={form} label="Constructor *" name="builder" />
          <CustomTextInput form={form} label="Areas comunes *" name="commonAreas" />
          <CustomTextInput form={form} label="Enlaces de proyecto" name="projectLinks" />
          <CustomTextInput form={form} label="Costo total del proyecto" name="totalPropertyCost" type="number" />
          <CustomTextInput form={form} label="Costo de acabado" name="finishingCost" type="number" />
          <CustomTextInput form={form} label="Costo de equipos y prueba" name="basicEquipmentAndTestingCost" type="number" />
          <CustomTextInput form={form} label="Costo legal" name="legalCost" type="number" />
          <CustomTextInput form={form} label="Costo de certificado SN y RC" name="cetificatesSNandRCost" type="number" />
          <CustomTextInput form={form} label="Costo de titulo de estudios" name="studyTitleCost" type="number" />
          <CustomTextInput
            form={form}
            label="Costo de incorporaciones de empresas"
            name="companiesIncorporationCost"
            type="number"
          />
          <CustomTextInput form={form} label="Costo de servicios de cuenta" name="accountServicesCost" type="number" />
          <CustomTextInput form={form} label="Costo de la valuación" name="propertyAppraisal" type="number" />
          <CustomTextInput form={form} label="Costo de transacciones" name="transactionCost" type="number" />
          <CustomTextInput form={form} label="Costo de busqueda y publicidad" name="searchAndAdvertisingFee" type="number" />
          <CustomTextInput form={form} label="Costo de contigencias" name="contigenciesFee" type="number" />
          <CustomTextArea form={form} label="Description del proyecto *" name="description" />
          <Button type="submit">{isEdit ? 'Actualizar' : 'Crear'}</Button>
        </form>
      </Form>
    </div>
  );
};

export default ProjectForm;
