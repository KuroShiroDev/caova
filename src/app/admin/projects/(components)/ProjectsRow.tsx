import { TableCell, TableRow } from '@/components/ui/table'
import React from 'react'

const ProjectsRow = () => {
    return (
        <TableRow>
            <TableCell className="font-medium">001</TableCell>
            <TableCell>Cll 32# 40 sur 32b</TableCell>
            <TableCell>Nuevo Proyecto Envigado</TableCell>
            <TableCell>3&apos;000.000.000 COP</TableCell>
            <TableCell>1&apos;500.000.000 COP</TableCell>
            <TableCell>Recaudación de Fondos</TableCell>
            <TableCell>N/A</TableCell>
            <TableCell className="text-right">N/A</TableCell>
        </TableRow>
    )
}

export default ProjectsRow