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
	public errorMsg: string;

	constructor(private apiService: ApiService) {}

	ngOnInit() {
		return this.apiService
			.getAll()
			.subscribe((cities) => (this.cities = cities), (error) => (this.errorMsg = error));
	}

	onClick(id) {
		return this.apiService.getOne(id).subscribe((city) => console.log(city));
	}
}
