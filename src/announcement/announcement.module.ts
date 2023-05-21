import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesModule } from 'src/files/files.module';
import { AnnouncementController } from './announcement.controller';
import { Announcement } from './announcement.model';
import { AnnouncementService } from './announcement.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Announcement]),
    FilesModule,
    forwardRef(() => AuthModule)],
  controllers: [AnnouncementController],
  providers: [AnnouncementService],
  exports: [AnnouncementService]
})
export class AnnouncementModule {}
