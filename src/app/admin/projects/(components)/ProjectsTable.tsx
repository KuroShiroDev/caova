import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import ProjectsRow from './ProjectsRow'

const ProjectsTable = () => {
  return (
    <Table>
    <TableHeader>
        <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Direccion</TableHead>
            <TableHead>Titulo</TableHead>
            <TableHead>Meta de inversion</TableHead>
            <TableHead>Colecta Actual</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Fecha Inicial</TableHead>
            <TableHead className="text-right">Fecha Final</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        { [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((project) => (
            <ProjectsRow key={project} />
        ))}
    </TableBody>
</Table>
  )
}

export default ProjectsTable