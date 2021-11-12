import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";

@Injectable({
    providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

    constructor() {
    }

    createDb() {
        const heroes = [
            {id: 11, name: 'Dr Nice'},
            {id: 12, name: 'Marvel'},
            {id: 13, name: 'Patrick'},
            {id: 14, name: 'Sara'},
            {id: 15, name: 'Nanda'},
            {id: 16, name: 'César'},
            {id: 17, name: 'Dynama'},
            {id: 18, name: 'Dr IQ'},
            {id: 19, name: 'Magma'},
            {id: 20, name: 'Tornado'}
        ];
        return {heroes};
    }

    //
    // genId(heroes: Hero[]): number {
    //   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
    // }
}
