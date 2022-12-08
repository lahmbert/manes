import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'remotemysql.com',
    port: 3306,
    username: 'ULfVWmMpy4',
    password: 'GRXMReEtjb',
    database: 'ULfVWmMpy4',
    entities: [__dirname + '/../**/*.entity.{ts,js}'],
    synchronize: true,
};