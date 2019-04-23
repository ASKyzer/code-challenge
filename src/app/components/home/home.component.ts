import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

import { City } from '../../models/city.model';
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
	cities: City[];

	constructor(private apiService: ApiService) {}

	ngOnInit() {
		const api = this.apiService;
		setTimeout(function() {
			api.getAll().subscribe((cities) => (this.cities = cities));
		}, 500);
	}

	onClick(id) {
		return this.apiService.getOne(id).subscribe((city) => console.log(city));
	}
}
