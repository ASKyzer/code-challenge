import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { City } from '../../models/city.model';
import { ApiService } from '../../services/api.service';
@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: [ './card.component.scss' ]
})
export class CardComponent implements OnInit {
	@Input('city') city: City[];

	constructor(private apiService: ApiService, private router: Router) {}

	ngOnInit() {}

	onDeleteClick(id) {
		this.apiService.deleteOne(id).subscribe((city) => {
			this.router.navigate([ '' ]);
		});
	}
}
