import { Injectable } from '@nestjs/common';

@Injectable()
export class MoteurRepository {
  private isRunning = false;

  start(): string {
    this.isRunning = true;
    return 'Moteur démarré.';
  }

  stop(): string {
    this.isRunning = false;
    return 'Moteur arrêté.';
  }

  getStatus(): boolean {
    return this.isRunning;
  }
}
