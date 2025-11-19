import { Injectable } from '@nestjs/common';

@Injectable()
export class AudioRepository {
  playMusic(powerGenerated: boolean): string {
    if (powerGenerated) {
      return '🎶 Système audio allumé. Musique en cours...';
    }
    return '❌ Système audio éteint : pas d\'électricité.';
  }
}
