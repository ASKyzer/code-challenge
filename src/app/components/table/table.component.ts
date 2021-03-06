import { Component, OnInit, Input } from '@angular/core';

import { City } from '../../models/city.model';
@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: [ './table.component.scss' ]
})
export class TableComponent implements OnInit {
	@Input('cities') cities: City[];
	@Input('errorMsg') errorMsg: string;
	@Input('showSpinner') showSpinner: boolean;

	displayedColumns = [ 'city', 'description', 'view' ];

	constructor() {}

	ngOnInit() {}
}
