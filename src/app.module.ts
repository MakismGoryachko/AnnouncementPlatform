import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config"
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.model';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AnnouncementModule } from './announcement/announcement.module';
import { Announcement } from './announcement/announcement.model';
import { FilesModule } from './files/files.module';
import { RegionController } from './region/region.controller';
import { RegionModule } from './region/region.module';
import { CategoryModule } from './category/category.module';
import { Category } from './category/category.model';
import { Region } from './region/region.model';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { ActiveAnnouncementModule } from './active_announcement/activeAnnouncement.module';
import { ActiveAnnouncement } from './active_announcement/activeAnnouncement.model';
import { FavouriteAnnouncement } from './favourite_announcement/favouriteAnnouncement.model';
import { FavouriteAnnouncementModule } from './favourite_announcement/favouriteAnnouncement.module';
import { RatingController } from './rating/rating.controller';

@Module(
  {
    controllers: [RatingController],
    providers: [],
    imports: [
      ConfigModule.forRoot({
        envFilePath: `.env`
      }),
      ServeStaticModule.forRoot({
        rootPath: path.resolve(__dirname, 'static'),
      }),
      NestjsFormDataModule,
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRESS_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRESS_PASSWORD,
        database: process.env.POSTGRES_DB,
        entities: [User, Announcement, Category, Region, ActiveAnnouncement, FavouriteAnnouncement],
        synchronize: true,
        logging: false,
      }),
      UsersModule,
      AuthModule,
      AnnouncementModule,
      FilesModule,
      RegionModule,
      CategoryModule,
      ActiveAnnouncementModule,
      FavouriteAnnouncementModule

    ],
  }
)
export class AppModule { }
