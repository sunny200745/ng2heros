import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { descriptions } from './mock-heroes';

@Injectable()
export class HeroService {
	getHeroes() {
		return Promise.resolve(HEROES);
	}

	getDescriptions(){
		return Promise.resolve(descriptions);
	}
}