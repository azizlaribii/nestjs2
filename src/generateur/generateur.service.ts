import { Injectable } from '@nestjs/common';
import { GenerateurRepository } from './generateur.repository';

@Injectable()
export class GenerateurService {
  private power = 0;

  constructor(private readonly generateurRepository: GenerateurRepository) {}

  startGenerateur(moteurStatus: string): string {
    const message = this.generateurRepository.generatePower(moteurStatus);

    if (moteurStatus !== 'running') {
      return '❌ Le moteur doit être en marche pour activer le générateur.';
    }

    this.power = 1200;
    return '⚡ Générateur activé et production d’électricité en cours.';
  }

  getPower() {
    return { power: this.power };
  }

  // Méthode utilisée par VehiculeService
  generateElectricity(moteurRunning: boolean): boolean {
    if (moteurRunning) {
      this.power = 1200;
      return true;
    }
    this.power = 0;
    return false;
  }
}
