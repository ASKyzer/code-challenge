import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

import { City } from '../models/city';
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
	cities: City[];

	constructor(private apiService: ApiService) {}

	ngOnInit() {
		return this.apiService.getAll().subscribe((posts) => console.log(posts));
	}
}
