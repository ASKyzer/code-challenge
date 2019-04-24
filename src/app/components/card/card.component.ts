import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { City } from '../../models/city.model';
import { ApiService } from '../../services/api.service';
@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: [ './card.component.scss' ]
})
export class CardComponent implements OnInit {
	id: any;
	city: City[];
	public errorMsg: string;

	constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) {}

	ngOnInit() {
		this.route.paramMap.subscribe((params) => {
			this.id = params.get('id');
			return this.apiService
				.getOne(this.id)
				.subscribe(
					(city) => (this.city = city),
					(error) => (this.errorMsg = error),
				);
		});
		console.log(this.city)
	}

	onDeleteClick(id) {
		this.apiService.deleteOne(id).subscribe((city) => {
			this.router.navigate([ '' ]);
		});
	}
}
