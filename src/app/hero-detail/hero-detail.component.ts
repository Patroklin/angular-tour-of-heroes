import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Hero} from "../hero";
import {ActivatedRoute, Router} from "@angular/router";
import {HeroService} from "../hero.service";
import {Observable} from "rxjs";
import {Location} from "@angular/common";

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit, OnChanges {

    @Input() heroId?: number;
    @Input() showCompleteMode: boolean = false;

    selectedHero$?: Observable<Hero>;

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private heroService: HeroService,
                private location: Location) {
    }

    ngOnInit(): void {
        if (this.heroId) {
            this.selectedHero$ = this.getHeroById(this.heroId);
        }else {
            this.selectedHero$ = this.getHero();
        }
    }

    navigateTo(route: string) {
        this.router.navigateByUrl(route);
    }

    getHero(): Observable<Hero> {
        const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
        return this.heroService.getHero(id);
    }

    private getHeroById(heroId: number): Observable<Hero> {
        return this.heroService.getHero(heroId);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.heroId) {
            this.selectedHero$ = this.getHeroById(this.heroId);
        }else {
            this.selectedHero$ = this.getHero();
        }
    }

    goBack() {
        this.location.back();
    }
}
