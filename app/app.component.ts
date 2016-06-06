import { Component } from '@angular/core';
import { HeroDetailComponent } from './heroDetails.component';
import { HerosWorkComponent } from './herosWork.component';
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
  directives: [HeroDetailComponent,HerosWorkComponent]




})
export class AppComponent{
  title = 'Tour of Heroes';
  selectedHero: Hero;
  public heroes = HEROES;
  onSelect(hero: Hero) { 
  	this.selectedHero = hero; 
  }
}

var HEROES: Hero[] = [
  { "id": 1, "name": "Sunny","desc":"DW" },
  { "id": 2, "name": "Ishita","desc":"DW" },
  { "id": 3, "name": "Utsav","desc":"BE" },
  { "id": 4, "name": "Ruchit","desc":"DW" },
  { "id": 5, "name": "Sarab","desc":"BE" },
  { "id": 6, "name": "Pratima","desc":"BE" },
  { "id": 7, "name": "Rasika","desc":"DW" },
  { "id": 8, "name": "Dinesh","desc":"BE" },
  { "id": 9, "name": "Himank","desc":"PO" },
  { "id": 10, "name": "Rajesh","desc":"BE" }
];