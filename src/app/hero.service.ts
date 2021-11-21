import {Injectable} from '@angular/core';
import {Hero} from "./hero";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';
  private httpOptions = {
    headers: new HttpHeaders({'Content type': 'application/json'})
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url)
      .pipe(
        tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
  }

  private handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`)

      return of(result as T);
    }
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`)
  }

  updateHero(hero: Hero): Observable<any> {

    return this.http.put(this.heroesUrl, hero, this.httpOptions)
      .pipe(
        tap(_ => this.log(`updated hero id=${hero.id}`)),
        catchError(this.handleError<any>('updateHero'))
      );
  }

  saveHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions)
      .pipe(
        tap((savedHero: Hero) => this.log(`saved hero id=${savedHero.id}`)),
        catchError(this.handleError<Hero>('addHero'))
      );
  }

  removeHero(hero: Hero): Observable<any> {
    const deleteUrl = `${this.heroesUrl}/${hero.id}`;
    return this.http.delete(deleteUrl, this.httpOptions)
      .pipe(
        tap(_ => this.log(`deleted hero id=${hero.id}`)),
        catchError(this.handleError<any>('deletedHero'))
      );
  }

  searchHeroes(search: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${search}`)
      .pipe(
        tap(result => result.length ?
          this.log(`found hero with name=${search}`) :
          this.log(`No hero found with name=${search}`)),
        catchError(this.handleError<Hero[]>('searchHeroes', []))
      );
  }
}
