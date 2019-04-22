import { Component, OnInit, Input, EventEmitter } from '@angular/core';

import { City } from '../../models/city.model';
@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: [ './card.component.scss' ]
})
export class CardComponent implements OnInit {
	@Input('city') city: City[];

	constructor() {}

	ngOnInit() {}

	onDeleteClick(id) {
		console.log(id);
	}
}
