import { Component, Input, OnInit, OnChanges, SimpleChange} from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Desc } from './hero';

@Component({
  selector: 'my-hero-work',
  template:`
  	<div *ngIf="hero">
      <h2>Designation of {{hero.name}} is    {{selectedDesc}}</h2>
    </div>
  `,
  providers: [HeroService]
})


export class HerosWorkComponent implements OnInit, OnChanges{

    @Input() 
    hero: Hero;
    selectedDesc: any;
  
  public descs : Desc[];

  constructor(private descService: HeroService) { }

  getDescriptions() {
    this.descService.getDescriptions().then(descs => this.descs = descs);
  }

  ngOnInit() {
    this.getDescriptions();
    
  }

  ngOnChanges(changes: { [propname:  string] : SimpleChange}) {
    console.log('ngOnChanges - myProp = ' + JSON.stringify(changes['hero'].currentValue));
    console.log(this.descs);
    if (!this.descs){
      return false;
    }
    for (var i = 0; i < this.descs.length; ++i) {
      if (changes['hero'].currentValue.id === this.descs[i].id){
        this.selectedDesc = this.descs[i].desc;
        break;
      }
    }

  }
}






