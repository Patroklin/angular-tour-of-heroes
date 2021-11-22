import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Hero} from "../hero";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";
import {HeroService} from "../hero.service";

@Component({
    selector: 'app-hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {

    private searchTerms = new Subject<string>();
    heroes$!: Observable<Hero[]>;

    constructor(private heroService: HeroService) {
    }

    ngOnInit(): void {
        this.heroes$ = this.searchTerms.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap(newValue => this.heroService.searchHeroes(newValue))
        );
    }

    search(value: string): void {
        value != '' ?
            this.searchTerms.next(value) :
            this.searchTerms.next();
    }

}
