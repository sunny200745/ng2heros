import { Component,Input} from '@angular/core';
import { Hero } from './hero';
import { Desc } from './hero';

@Component({
  selector: 'my-hero-work',
  template:`
  	<div *ngIf="hero">
      <h2>Designation of {{hero.name}} is   To be Achieved </h2>
    </div>

      
  `
})


export class HerosWorkComponent{
  
    
    @Input() 
    hero: any;
    selectedDesc : any;
    descs : any;

    ngOnChanges(changes: SimpleChanges, hero:Hero) {
      console.log('ngOnChanges - hero = ' , JSON.stringify(changes['hero']));
      // console.debug('Hero is ====>', hero)
      // //console.log('Desc ===>',descs);
      // for (var i = 0; i < Desc.length; ++i) {
      //   if(changes['hero'].id === Desc[i].id){
      //     this.selectedDesc = Desc[i].desc;
      //     break;
      //   }
        
      // }
    }
}






