import { Controller, Get, Post } from '@nestjs/common';
import { MoteurService } from './moteur.service';

@Controller('moteur')
export class MoteurController {
  constructor(private readonly moteurService: MoteurService) {}

  @Post('start')
  start() {
    return { message: this.moteurService.startEngine() };
  }

  @Post('stop')
  stop() {
    return { message: this.moteurService.stopEngine() };
  }

  @Get('status')
  status() {
    return { status: this.moteurService.getEngineStatus() };
  }
}
