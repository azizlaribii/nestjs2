import { Controller, Post } from '@nestjs/common';
import { PhareService } from './phare.service';
import { MoteurService } from '../moteur/moteur.service';

@Controller('phare')
export class PhareController {
  constructor(
    private readonly phareService: PhareService,
    private readonly moteurService: MoteurService,
  ) {}

  @Post('on')
  turnOn() {
    const isEngineRunning = this.moteurService.getEngineStatus() === 'running';
    // On retourne l'objet JSON directement
    return this.phareService.turnOnHeadlights(isEngineRunning);
  }
}
