import { Component, OnInit, Input, EventEmitter } from '@angular/core';

import { City } from '../../models/city.model';
import { ApiService } from '../../services/api.service';
@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: [ './card.component.scss' ]
})
export class CardComponent implements OnInit {
	@Input('city') city: City[];

	constructor(private apiService: ApiService) {}

	ngOnInit() {}

	onDeleteClick(id) {
		this.apiService.deleteOne(id).subscribe((city) => {
			console.log(city);
		});
	}
}
