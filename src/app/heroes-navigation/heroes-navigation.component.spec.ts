import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesNavigationComponent } from './heroes-navigation.component';

describe('HeroesNavigationComponent', () => {
  let component: HeroesNavigationComponent;
  let fixture: ComponentFixture<HeroesNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
