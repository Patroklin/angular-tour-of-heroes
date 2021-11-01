import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-heroes-navigation',
  templateUrl: './heroes-navigation.component.html',
  styleUrls: ['./heroes-navigation.component.scss']
})
export class HeroesNavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }
}
