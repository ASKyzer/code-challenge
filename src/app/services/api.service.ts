import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

	getOne(id) {
		return this.http.get<City[]>(`${this.url}/${id}`);
	}
}
