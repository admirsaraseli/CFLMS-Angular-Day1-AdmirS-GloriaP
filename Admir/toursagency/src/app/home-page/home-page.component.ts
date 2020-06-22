import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
	destination = [];
	price = [];
	numOfNights = [];
	city = [];
	images = [];

	constructor() {
		this.destination =  ["Zoo Vienna", "Castle of Prague", "Eiffel Tower", "Big Ben", "October Fest", "Sagrada Família"];
	    this.price =  ["400 Euro", "300 ", "500 ", "600 ", "600 ", "600 "];
	    this.numOfNights =  [4 , 4, 4, 4, 4, 4];
	    this.city =  ["Vienna", "Prague", "Paris", "London", "Munich", "Barcelona"];
	    this.images = [""];
	}

	ngOnInit(): void {
	}

}
