'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button"
import {
    Form
} from "@/components/ui/form"
import CustomTextInput from '@/components/customForm/CustomTextInput';
import CustomTextArea from '@/components/customForm/CustomTextArea';
import CustomSelect from '@/components/customForm/CustomSelect';
import { propertyTypeOptions } from '@/app/data';

const projectSchema = z.object({
    title: z.string().min(1, { message: '* Requerido' }),
    description: z.string().min(1, { message: '* Requerido' }),
    address: z.string().min(1, { message: '* Requerido' }),
    projectValueTotal: z.coerce.number().min(1, { message: '* Requerido' }),
    startIncomeDate: z.coerce.date(),
    endIncomeDate: z.coerce.date(),
    country: z.string().min(1, { message: '* Requerido' }),
    department: z.string().min(1, { message: '* Requerido' }),
    city: z.string().min(1, { message: '* Requerido' }),
    minInvestmentAmount: z.coerce.number().min(1, { message: '* Requerido' }),
    propertyType: z.enum(['viviendaDeInteresSocial', 'viviendaDeInteresPrioritario'], { message: '* Requerido' }),
    squareMeters: z.coerce.number().min(1, { message: '* Requerido' }),
    rooms: z.coerce.number().min(1, { message: '* Requerido' }),
    bathrooms: z.coerce.number().min(1, { message: '* Requerido' }),
    rentalYieldsAnnualCash: z.coerce.number(),
    imcomeFromValuationAnnualCash: z.coerce.number(),
    builder: z.string().min(1, { message: '* Requerido' }),
    commonAreas: z.string().min(1, { message: '* Requerido' }),
    projectLinks: z.string(),
    totalPropertyCost: z.coerce.number(),
    finishingCost: z.coerce.number(),
    basicEquipmentAndTestingCost: z.coerce.number(),
    legalCost: z.coerce.number(),
    cetificatesSNandRCost: z.coerce.number(),
    studyTitleCost: z.coerce.number(),
    companiesIncorporationCost: z.coerce.number(),
    accountServicesCost: z.coerce.number(),
    propertyAppraisal: z.coerce.number(),
    transactionCost: z.coerce.number(),
    searchAndAdvertisingFee: z.coerce.number(),
    contigenciesFee: z.coerce.number()
})

const CreateProjectForm = (

) => {
    const form = useForm<z.infer<typeof projectSchema>>({
        resolver: zodResolver(projectSchema),
        defaultValues: {
            title: '',
            description: '',
            address: '',
            projectValueTotal: 0,
            startIncomeDate: new Date(),
            endIncomeDate: new Date(),
            country: 'Colombia',
            department: 'Antioquia',
            city: 'Medellín',
            minInvestmentAmount: 0,
            propertyType: 'viviendaDeInteresSocial',
            squareMeters: 0,
            rooms: 0,
            bathrooms: 0,
            rentalYieldsAnnualCash: 0,
            imcomeFromValuationAnnualCash: 0,
            builder: '',
            commonAreas: '',
            projectLinks: '',
            totalPropertyCost: 0,
            finishingCost: 0,
            basicEquipmentAndTestingCost: 0,
            legalCost: 0,
            cetificatesSNandRCost: 0,
            studyTitleCost: 0,
            companiesIncorporationCost: 0,
            accountServicesCost: 0,
            propertyAppraisal: 0,
            transactionCost: 0,
            searchAndAdvertisingFee: 0,
            contigenciesFee: 0
        }
    })

    function onSubmit(values: z.infer<typeof projectSchema>) {
        console.log('data')
        const transaformedValues = { commonAreas: values.commonAreas.split(', ') }
    }
    return (
        <div className="flex flex-col gap-2 items-center my-14 md:my-24 w-full">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-y-4 w-11/12 lg:w-4/12 md:w-8/12 lg:w-6/12 min-w-[360px]">
                    <CustomTextInput form={form} label="Titulo del proyecto *" name="title" />
                    <CustomTextInput form={form} label='Pais' name="country" />
                    <CustomTextInput form={form} label='Departamento' name="department" />
                    <CustomTextInput form={form} label='Ciudad' name="city" />
                    <CustomTextInput form={form} label='Dirección *' name="address" />
                    <div className="relative w-full h-[300px]">
                        <iframe
                            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&q=${form.watch('country')},${form.watch('department')},${form.watch('city')},${form.watch('address')}`}
                            className="absolute inset-0 w-full h-full"
                            title="map"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <CustomTextInput form={form} label='Valor total del proyecto*' name="projectValueTotal" type='number' />
                    <CustomTextInput form={form} label='Fecha de inicio Rentas' name="startIncomeDate" type='date' />
                    <CustomTextInput form={form} label='Fecha de fin de rentas' name="endIncomeDate" type='date' />
                    <CustomTextInput form={form} label='Monto minimo invertido *' name="minInvestmentAmount" type='number' />
                    <CustomSelect form={form} label='Tipo de propiedad' name="propertyType" options={propertyTypeOptions} />
                    <CustomTextInput form={form} label='Metros cuadrados*' name="squareMeters" type='number' />
                    <CustomTextInput form={form} label='Habitaciones *' name="rooms" type='number' />
                    <CustomTextInput form={form} label='Baños *' name="bathrooms" type='number' />
                    <CustomTextInput form={form} label='Rentabilidad de la renta anual*' name="rentalYieldsAnnualCash" type='number' />
                    <CustomTextInput form={form} label='Ingresos de la valuación anual *' name="imcomeFromValuationAnnualCash" type='number' />
                    <CustomTextInput form={form} label='Constructor *' name="builder" />
                    <CustomTextInput form={form} label='Areas comunes *' name="commonAreas" />
                    <CustomTextInput form={form} label='Enlaces de proyecto' name="projectLinks" />
                    <CustomTextInput form={form} label='Costo total del proyecto' name="totalPropertyCost" type='number' />
                    <CustomTextInput form={form} label='Costo de acabado' name="finishingCost" type='number' />
                    <CustomTextInput form={form} label='Costo de equipos y prueba' name="basicEquipmentAndTestingCost" type='number' />
                    <CustomTextInput form={form} label='Costo legal' name="legalCost" type='number' />
                    <CustomTextInput form={form} label='Costo de certificado SN y RC' name="cetificatesSNandRCost" type='number' />
                    <CustomTextInput form={form} label='Costo de titulo de estudios' name="studyTitleCost" type='number' />
                    <CustomTextInput form={form} label='Costo de incorporaciones de empresas' name="companiesIncorporationCost" type='number' />
                    <CustomTextInput form={form} label='Costo de servicios de cuenta' name="accountServicesCost" type='number' />
                    <CustomTextInput form={form} label='Costo de la valuación' name="propertyAppraisal" type='number' />
                    <CustomTextInput form={form} label='Costo de transacciones' name="transactionCost" type='number' />
                    <CustomTextInput form={form} label='Costo de busqueda y publicidad' name="searchAndAdvertisingFee" type='number' />
                    <CustomTextInput form={form} label='Costo de contigencias' name="contigenciesFee" type='number' />
                    <CustomTextArea form={form} label="Description del proyecto *" name="description" />
                    <Button type="submit">Submit</Button>
                </form>

            </Form>
        </div>
    )
}

export default CreateProjectForm