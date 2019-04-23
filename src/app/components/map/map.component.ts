import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { City } from '../../models/city.model';
@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: [ './map.component.scss' ]
})
export class MapComponent implements OnInit {
	@Input('lat') lat: number;
	@Input('long') long: number;

	constructor(private http: HttpClient) {}

	ngOnInit() {
		console.log(this.lat, this.long);
	}
}
