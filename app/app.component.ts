import { Component, OnInit } from '@angular/core';
import { HeroDetailComponent } from './heroDetails.component';
import { HerosWorkComponent } from './herosWork.component';
import { HeroService } from './hero.service';

import { Hero } from './hero';
@Component({
	selector:'my-app',
	template:`
		<h1>{{title}}</h1>
	    <h2>My Heroes</h2>
	    <ul class="heroes">
	      <li *ngFor="let hero of heroes"
	        [class.selected]="hero === selectedHero"
	        (click)="onSelect(hero)">
	        <span class="badge">{{hero.id}}</span> {{hero.name}}
	      </li>
	    </ul>
	    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
	    <my-hero-work [hero]="selectedHero"></my-hero-work>
	`,
  directives: [HeroDetailComponent,HerosWorkComponent],
  providers: [HeroService]
})
export class AppComponent implements OnInit{
  title = 'Tour of Heroes';
  selectedHero: any;
  public heroes :Hero[];
  
  
  constructor(private heroService: HeroService) { }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) { 
    this.selectedHero = hero; 
  }
}


