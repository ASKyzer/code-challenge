import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { City } from '../models/city.model';
@Injectable({
	providedIn: 'root'
})
export class ApiService {
	url = 'https://wf-challenge-ywlsrfkhim.herokuapp.com/api/v1/posts';

	constructor(private http: HttpClient) {}

	// private handleError(errorResponse: HttpErrorResponse) {
	// 	if (errorResponse.error instanceof ErrorEvent) {
	// 		console.error('Client Side Error: ', errorResponse.error.message);
	// 	} else {
	// 		console.error('Server Side Error: ', errorResponse);
	// 	}
	// 	return new ErrorObservable(
	// 		'There is a problem with our server.  We are working on it. Please try again later.'
	// 	);
	// }

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
