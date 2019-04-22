import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { City } from '../../models/city.model';
import { ApiService } from '../../services/api.service';
@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: [ './form.component.scss' ]
})
export class FormComponent implements OnInit {
	@Input('city') city: City[];

	public cityForm: FormGroup;

	// Form State
	loading = false;
	success = false;

	constructor(
		private fb: FormBuilder,
		private route: ActivatedRoute,
		private apiService: ApiService,
		private loaction: Location
	) {}

	// createPost(post) {
	// 	this.title = post.title;
	// 	this.content = post.content;
	// 	this.lat = post.lat;
	// 	this.long = post.long;
	// 	this.image_url = post.image_url;
	// }

	ngOnInit() {
		this.cityForm = new FormGroup({
			title: new FormControl(),
			content: new FormControl(),
			lat: new FormControl(),
			long: new FormControl(),
			image_url: new FormControl()
		});

		this.route.paramMap.subscribe((param) => {
			const cityID = +param.get('id');
			if (cityID) {
				this.getCity(cityID);
			}
		});
	}

	getCity(id) {
		this.apiService.getOne(id).subscribe((city) => this.editCity(city)), (err: any) => console.log(err);
	}

	editCity(city: City) {
		const { title, content, lat, long, image_url } = city;
		this.cityForm.patchValue({
			title: title,
			content: content,
			lat: lat,
			long: long,
			image_url: image_url
		});
	}

	submitHandler() {
		console.log(this.cityForm.value);
	}

	onCancelClick() {
		this.loaction.back();
	}
}
