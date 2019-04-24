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
	

	constructor(private route: ActivatedRoute, private apiService: ApiService) {}

	ngOnInit() {
		
	}
}
