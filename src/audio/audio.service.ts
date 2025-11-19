import { Injectable } from '@nestjs/common';

@Injectable()
export class AudioService {
  playVehicleMusic(canPower: boolean) {
    return {
      message: canPower ? '🎵 Musique du véhicule en cours.' : '❌ Pas d’électricité pour jouer la musique',
      powerGenerated: canPower,
    };
  }
}
