import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-hero',
	templateUrl: './hero.component.html',
	styleUrls: [ './hero.component.scss' ]
})
export class HeroComponent implements OnInit {
	public heroQuote: string = 'You’re on your own. And you know what you know. And you are the one who’ll decide where to go.';

	constructor() {}

	ngOnInit() {}
}
