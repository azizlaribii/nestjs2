import { Injectable } from '@nestjs/common';

@Injectable()
export class VehiculeRepository {
  operate(): string {
    return 'Assemblage du véhicule et préparation à l’opération.';
  }
}
