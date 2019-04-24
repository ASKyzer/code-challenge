import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { City } from '../../models/city.model';
import { ApiService } from '../../services/api.service';
@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: [ './edit.component.scss' ]
})
export class EditComponent implements OnInit {
	id: any;
	city: City[];
	public errorMsg: string;

	constructor(private route: ActivatedRoute, private apiService: ApiService) {}

	ngOnInit() {
		this.route.paramMap.subscribe((params) => {
			this.id = params.get('id');
			return this.apiService
				.getOne(this.id)
				.subscribe((city) => (this.city = city), (error) => (this.errorMsg = error));
		});
	}
}
