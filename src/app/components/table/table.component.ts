import { Component, OnInit, Input } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';

import { City } from '../../models/city.model';
@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: [ './table.component.scss' ]
})
export class TableComponent implements OnInit {
	@Input('cities') cities: City[];
	@Input('errorMsg') errorMsg: string;

	displayedColumns = [ 'city', 'description', 'view' ];

	constructor() {}

	ngOnInit() {}
}
