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
	id: any;
	city: City[];
	public errorMsg: string;
	public showSpinner: boolean = true;

	constructor(private route: ActivatedRoute, private apiService: ApiService) {}

	ngOnInit() {
		this.route.paramMap.subscribe((params) => {
			this.id = params.get('id');
			return this.apiService
				.getOne(this.id)
				.subscribe(
					(city) => (this.city = city),
					(error) => (this.errorMsg = error),
					(this.showSpinner = false)
				);
		});
	}
}
