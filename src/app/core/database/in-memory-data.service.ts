import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = [
      { id: 1, title: 'Wake up' },
      { id: 2, title: 'Drink a caffee' },
    ];

    return { todos };
  }

  genId(list): number {
    return list.length ? Math.max(...list.map((item) => item.id)) + 1 : 1;
  }
}
