'use server';
import { PrismaClient, Project } from '@prisma/client';
import { verifyAdmin } from './auth';
import { CreateProject } from '@/interfaces/project.interface';

const prisma = new PrismaClient();

export const createProject = async (values: CreateProject) : Promise<Project> => {
    const isAdmin = await verifyAdmin();
     if (!isAdmin) {
        throw new Error('Unauthorized');
    }

    const project = await prisma.project.create({
        data: {
            ...values,
        },
    });

    return project;
}
