import {Injectable} from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add("Heroes fetched")
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero>{
    const hero = HEROES.find(hero => hero.id === id)!;
    this.messageService.add(`${hero.id  } fetched`)
    return of(hero);
  }
}
