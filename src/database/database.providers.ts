import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

export const typeOrmOptions: TypeOrmModuleAsyncOptions = {
  useFactory: async () => ({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    autoLoadEntities: true,
  }),
};
