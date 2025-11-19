import { Injectable } from '@nestjs/common';

@Injectable()
export class GenerateurRepository {
  generatePower(moteurStatus: string): string {
    return moteurStatus === 'running'
      ? '⚡ Générateur prêt.'
      : '❌ Générateur inactif : moteur arrêté.';
  }
}
