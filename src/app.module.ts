import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config"
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.model';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AnnouncementModule } from './announcement/announcement.module';
import { Announcement } from './announcement/announcement.model';
import { FilesModule } from './files/files.module';



@Module(
  {
    controllers: [],
    providers: [],
    imports: [
      ConfigModule.forRoot({
        envFilePath: `.env`
      }),
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRESS_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRESS_PASSWORD,
        database: process.env.POSTGRES_DB,
        entities: [User, Announcement],
        synchronize: true,
        logging: false,
      }),
      UsersModule,
      AuthModule,
      AnnouncementModule,
      FilesModule
    ],
  }
)
export class AppModule {}
