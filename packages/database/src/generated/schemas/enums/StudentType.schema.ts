import * as z from 'zod';

export const StudentTypeSchema = z.enum(['individual', 'team'])

export type StudentType = z.infer<typeof StudentTypeSchema>;