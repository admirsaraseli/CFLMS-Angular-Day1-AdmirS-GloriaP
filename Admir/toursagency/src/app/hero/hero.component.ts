import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass']
})
export class HeroComponent implements OnInit {
	heroHeading: string;
	heroText: string;
	heroBtnText: string;
	heroBtnUrl: string;

	constructor() {
		this.heroHeading =  "ToursAgency";
	    this.heroText =  " Feel the pulse, take a tour...:)";
	    this.heroBtnText =  "Learn more";
	    this.heroBtnUrl =  "/about";
	 }

	ngOnInit(): void {
	}

}
