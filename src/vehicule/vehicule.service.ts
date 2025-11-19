import { Injectable } from '@nestjs/common';
import { VehiculeRepository } from './vehicule.repository';
import { MoteurService } from '../moteur/moteur.service';
import { GenerateurService } from '../generateur/generateur.service';
import { PhareService } from '../phare/phare.service';
import { AudioService } from '../audio/audio.service';

@Injectable()
export class VehiculeService {
  constructor(
    private readonly vehiculeRepository: VehiculeRepository,
    private readonly moteurService: MoteurService,
    private readonly generateurService: GenerateurService,
    private readonly phareService: PhareService,
    private readonly audioService: AudioService,
  ) {}

  operateVehicle(): string[] {
    const operations: string[] = [];
    operations.push(this.vehiculeRepository.operate());

    // 1. Démarrer le moteur
    operations.push(this.moteurService.startEngine());
    const moteurStatus = this.moteurService.getEngineStatus(); // 'running' | 'stopped'
    const moteurRunning = moteurStatus === 'running';

    // 2. Générer l’électricité
    const powerGenerated = this.generateurService.generateElectricity(moteurRunning);

    // 3. Allumer les phares
    operations.push(JSON.stringify(this.phareService.turnOnHeadlights(powerGenerated)));

    // 4. Jouer la musique
    operations.push(JSON.stringify(this.audioService.playVehicleMusic(powerGenerated)));

    return ['--- Début Opération du Véhicule ---', ...operations, '--- Opération Terminée ---'];
  }
}
