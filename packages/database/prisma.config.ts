import { PrismaConfig } from 'prisma';

export default {
    experimental: {
        adapter: true,
    },
    schema: './src/prisma/schema.prisma',
} satisfies PrismaConfig;