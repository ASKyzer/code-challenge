import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { City } from '../models/city.model';
@Injectable({
	providedIn: 'root'
})
export class ApiService {
	url = 'https://wf-challenge-ywlsrfkhim.herokuapp.com/api/v1/posts';

	constructor(private http: HttpClient) {}

	getAll() {
		return this.http.get<City[]>(this.url);
	}

	getOne(id: number) {
		return this.http.get<City[]>(`${this.url}/${id}`);
	}

	updateCity(city: City) {
		console.log(city);
		return this.http.put(`${this.url}/${city.id}`, city, {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			})
		});
	}

	addCity(city: City) {
		console.log(city);
		return this.http.post(this.url, city, {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			})
		});
	}

	deleteOne(id: number) {
		return this.http.delete(`${this.url}/${id}`);
	}
}
