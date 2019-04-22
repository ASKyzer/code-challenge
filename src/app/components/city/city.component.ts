import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { City } from '../../models/city.model';
import { ApiService } from '../../services/api.service';
@Component({
	selector: 'app-city',
	templateUrl: './city.component.html',
	styleUrls: [ './city.component.scss' ]
})
export class CityComponent implements OnInit {
	id: string;
	city: City[];

	constructor(private route: ActivatedRoute, private apiService: ApiService) {}

	ngOnInit() {
		this.route.paramMap.subscribe((params) => {
			this.id = params.get('id');
			console.log(this.id);
			return this.apiService.getOne(this.id).subscribe((city) => (this.city = city));
		});
	}
}
