import { Component, OnInit, Input } from '@angular/core';

import { City } from '../../models/city.model';
@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: [ './map.component.scss' ]
})
export class MapComponent implements OnInit {
	@Input('city') city: City[];

	constructor() {}

	ngOnInit() {}
}
