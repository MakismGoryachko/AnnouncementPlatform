import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesModule } from 'src/files/files.module';
import { FavouriteAnnouncementController } from './favouriteAnnouncement.controller';
import { FavouriteAnnouncement } from './favouriteAnnouncement.model';
import { FavouriteAnnouncementService } from './favouriteAnnouncement.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([FavouriteAnnouncement]),
    FilesModule,
    forwardRef(() => AuthModule)],
  controllers: [FavouriteAnnouncementController],
  providers: [FavouriteAnnouncementService],
  exports: [FavouriteAnnouncementService]
})
export class FavouriteAnnouncementModule {}
