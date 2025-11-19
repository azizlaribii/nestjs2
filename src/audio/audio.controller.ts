import { Controller, Post } from '@nestjs/common';
import { AudioService } from './audio.service';
import { MoteurService } from '../moteur/moteur.service'; 

@Controller('audio')
export class AudioController { 
  constructor(
    private readonly audioService: AudioService,
    private readonly moteurService: MoteurService, 
  ) {}

  @Post('play') // Route POST /audio/play
  play() {
    // 1️⃣ Convertir le statut du moteur en boolean
    const moteurStatus = this.moteurService.getEngineStatus(); // 'running' | 'stopped'
    const powerGenerated = moteurStatus === 'running'; // boolean

    // 2️⃣ Retourner l'objet directement
    return this.audioService.playVehicleMusic(powerGenerated);
  }
}
