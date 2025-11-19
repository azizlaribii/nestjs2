import { Injectable } from '@nestjs/common';
import { MoteurRepository } from './moteur.repository';

@Injectable()
export class MoteurService {
  constructor(private readonly moteurRepository: MoteurRepository) {}

  startEngine(): string {
    return this.moteurRepository.start();
  }

  stopEngine(): string {
    return this.moteurRepository.stop();
  }

  getEngineStatus(): string {
    return this.moteurRepository.getStatus() ? 'running' : 'stopped';
  }
}
