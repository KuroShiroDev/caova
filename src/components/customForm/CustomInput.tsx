import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import React from "react"
import { UseFormReturn } from "react-hook-form"

interface CustomInputProps {
    form: UseFormReturn<any>
    label: string
    name: string
    description?: string
    children: JSX.Element
    className?: string
}

const CustomInput = ({ form, label, name, description, children, className }: CustomInputProps) => {
    return (
        <div className={className}>
            <FormField

                control={form.control}
                name={name}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>{label}</FormLabel>
                        <FormControl>
                            {React.cloneElement(children, { ...field })}
                        </FormControl>
                        <FormDescription>
                            {description}
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />

        </div>
    )
}

export default CustomInput