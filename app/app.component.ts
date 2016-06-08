import { Component } from '@angular/core';
import { HeroDetailComponent } from './heroDetails.component';
import { HerosWorkComponent } from './herosWork.component';
import { Hero } from './hero';
import { Desc } from './hero';
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
	    <my-hero-work [hero]="selectedHero" [descs]="descs"></my-hero-work>
	`,
  directives: [HeroDetailComponent,HerosWorkComponent]
})
export class AppComponent{
  title = 'Tour of Heroes';
  selectedHero: any;
  public heroes = HEROES;
  public descs = descriptions;

  onSelect(hero: Hero) { 
  	this.selectedHero = hero; 
  }
}

var HEROES: Hero[] = [
  { "id": 1, "name": "Sunny"},
  { "id": 2, "name": "Ishita"},
  { "id": 3, "name": "Utsav"},
  { "id": 4, "name": "Ruchit"},
  { "id": 5, "name": "Sarab"},
  { "id": 6, "name": "Pratima"},
  { "id": 7, "name": "Rasika"},
  { "id": 8, "name": "Dinesh"},
  { "id": 9, "name": "Himank"},
  { "id": 10, "name": "Rajesh"}
];
var descriptions: Desc[] = [
  { "id": 1,"desc":"DW" },
  { "id": 2,"desc":"DW" },
  { "id": 3,"desc":"BE" },
  { "id": 4,"desc":"DW" },
  { "id": 5,"desc":"BE" },
  { "id": 6,"desc":"BE" },
  { "id": 7,"desc":"DW" },
  { "id": 8,"desc":"BE" },
  { "id": 9,"desc":"PO" },
  { "id": 10,"desc":"BE" }
];
