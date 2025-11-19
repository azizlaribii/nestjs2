import { Injectable } from '@nestjs/common';
import { PhareRepository } from './phare.repository';

@Injectable()
export class PhareService {
  constructor(private readonly phareRepository: PhareRepository) {}

  turnOnHeadlights(canPower: boolean) {
    return {
      message: canPower ? this.phareRepository.turnOn() : '❌ Pas d’électricité pour allumer les phares',
      powerGenerated: canPower,
    };
  }

  turnOffHeadlights() {
    return { message: this.phareRepository.turnOff(), powerGenerated: false };
  }
}
