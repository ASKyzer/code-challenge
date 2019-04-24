import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { City } from '../../models/city.model';
import { ApiService } from '../../services/api.service';
@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: [ './form.component.scss' ]
})
export class FormComponent implements OnInit {
	@Input('city') city: any;

	public cityForm: FormGroup;
	errorMessage = 'This field is required';
	

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private route: ActivatedRoute,
		private apiService: ApiService,
		private loaction: Location
	) {}

	ngOnInit() {
		this.createForm();
		this.getRouteParam();
	}

	createForm() {
		this.cityForm = new FormGroup({
			title: new FormControl('', Validators.required),
			content: new FormControl('', Validators.required),
			lat: new FormControl(''),
			long: new FormControl(''),
			image_url: new FormControl('')
		});
	}

	getRouteParam() {
		this.route.paramMap.subscribe((param) => {
			 const cityID = +param.get('id');
			if (cityID) {
				this.getCity(cityID);
			} else {
				this.city = {
					id: null,
					title: [ null, Validators.required ],
					content: [ null, Validators.required ],
					lat: null,
					long: null,
					image_url: null
				};
			}
		});
	}

	getCity(id) {
		this.apiService.getOne(id).subscribe((city) => this.editCity(city)), (err: any) => console.log(err);
	}

	editCity(city) {
		const { title, content, lat, long, image_url } = city;
		this.cityForm.patchValue({
			title: title,
			content: content,
			lat: lat,
			long: long,
			image_url: image_url
		});
	}

	submitHandler(): void {
		this.mapToCityModel();
		console.log(this.cityForm);
		if (this.city.id) {
			this.apiService.updateCity(this.city).subscribe(() => this.router.navigate([ '' ])),
				(err) => console.log(err);
		} else {
			this.apiService.addCity(this.city).subscribe(() => this.router.navigate([ '' ])), (err) => console.log(err);
		}
	}

	mapToCityModel() {
		this.city.title = this.cityForm.value.title;
		this.city.content = this.cityForm.value.content;
		this.city.lat = this.cityForm.value.lat;
		this.city.long = this.cityForm.value.long;
		this.city.image_url = this.cityForm.value.image_url;
	}

	onCancelClick() {
		this.loaction.back();
	}
}
