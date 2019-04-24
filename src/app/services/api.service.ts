import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { City } from '../models/city.model';
@Injectable({
	providedIn: 'root'
})
export class ApiService {
	url = 'https://wf-challenge-ywlsrfkhim.herokuapp.com/api/v1/posts';

	constructor(private http: HttpClient) {}

	private handleError(error: HttpErrorResponse) {
		return Observable.throw(error.message || 'Server Error');
	}

	getAll() {
		return this.http.get<City[]>(this.url).catch(this.handleError);
	}

	getOne(id: number) {
		return this.http.get<City[]>(`${this.url}/${id}`).catch(this.handleError);
	}

	updateCity(city: City) {
		return this.http.put(`${this.url}/${city.id}`, city, {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			})
		});
	}

	addCity(city: City) {
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
