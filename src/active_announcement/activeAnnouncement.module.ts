import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesModule } from 'src/files/files.module';
import { ActiveAnnouncementController } from './activeAnnouncement.controller';
import { ActiveAnnouncement } from './activeAnnouncement.model';
import { ActiveAnnouncementService } from './activeAnnouncement.service';
import { AuthModule } from 'src/auth/auth.module';
import { AnnouncementModule } from 'src/announcement/announcement.module';

@Module({
  imports: [TypeOrmModule.forFeature([ActiveAnnouncement]),
    FilesModule,
    AnnouncementModule,
    forwardRef(() => AuthModule)],
  controllers: [ActiveAnnouncementController],
  providers: [ActiveAnnouncementService],
  exports: [ActiveAnnouncementService]
})
export class ActiveAnnouncementModule {}
