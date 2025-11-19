import { Module } from '@nestjs/common';
import { GenerateurService } from './generateur.service';
import { GenerateurRepository } from './generateur.repository';

@Module({
  providers: [GenerateurService, GenerateurRepository],
  exports: [GenerateurService],
})
export class GenerateurModule {}
