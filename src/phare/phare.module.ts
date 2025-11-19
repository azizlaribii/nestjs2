import { Module } from '@nestjs/common';
import { PhareService } from './phare.service';
import { PhareRepository } from './phare.repository';
import { MoteurModule } from '../moteur/moteur.module';

@Module({
  imports: [MoteurModule],
  providers: [PhareService, PhareRepository],
  exports: [PhareService],
})
export class PhareModule {}
