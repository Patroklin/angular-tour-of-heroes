import {Component, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-hero-new',
  templateUrl: './hero-new.component.html',
  styleUrls: ['./hero-new.component.scss']
})
export class HeroNewComponent implements OnInit {

  constructor(private heroService: HeroService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  save(name: string) {
    this.heroService.saveHero({name} as Hero)
      .subscribe(() => this.router.navigate(['/heroes']))
  }
}
