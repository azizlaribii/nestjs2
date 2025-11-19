import { Controller, Post, Get } from '@nestjs/common';
import { GenerateurService } from './generateur.service';
import { MoteurService } from '../moteur/moteur.service';

@Controller('generateur')
export class GenerateurController {
  constructor(
    private readonly generateurService: GenerateurService,
    private readonly moteurService: MoteurService,
  ) {}

  @Post('start')
  start() {
    const moteurStatus = this.moteurService.getEngineStatus(); // string
    return this.generateurService.startGenerateur(moteurStatus);
  }

  @Get('power')
  getPower() {
    return this.generateurService.getPower();
  }
}
