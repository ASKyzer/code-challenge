import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { City } from '../../models/city.model';
@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: [ './map.component.scss' ]
})
export class MapComponent implements OnInit {
	@Input('title') title: string;
	@Input('lat') lat: number;
	@Input('long') long: number;

	constructor(private http: HttpClient) {}

	ngOnInit() {
		this.lat = Number(this.lat);
		this.long = Number(this.long);

		console.log(this.lat, this.long, this.title);
	}
}
