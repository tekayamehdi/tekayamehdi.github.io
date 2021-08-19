import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User, Adresse } from './user';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 11, nom: 'Dr Nice' },
      { id: 12, nom: 'Narco' },
      { id: 13, nom: 'Bombasto' },
      { id: 14, nom: 'Celeritas' },
      { id: 15, nom: 'Magneta' },
      { id: 16, nom: 'RubberMan' },
      { id: 17, nom: 'Dynama' },
      { id: 18, nom: 'Dr IQ' },
      { id: 19, nom: 'Magma' },
      { id: 20, nom: 'Tornado' },
      { id: 21, nom: 'hbiba', prenom: 'hnini', datenaissance: '1998-12-21', typeadresse: 'test' }

    ];
    return { users };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}
