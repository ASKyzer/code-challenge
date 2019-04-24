import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-server-error',
	templateUrl: './server-error.component.html',
	styleUrls: [ './server-error.component.scss' ]
})
export class ServerErrorComponent implements OnInit {
	@Input('errorMsg') errorMsg: string;

	customErrorMessage: string = 'We are currently experiencing an internal server error.  The amazing places you are currently looking for are not available.  Please check back later.  We apologize for any convinience.  Meanwhile, check out some travel photos from the most talented photographers of Flickr by clicking below.';
	errorImage: string = 'https://cdn.dribbble.com/users/761395/screenshots/6130138/error_500.png';
	externalTravelLink: string = 'https://www.flickr.com/search/?text=travel';

	constructor() {}

	ngOnInit() {
		console.log(this.errorMsg);
		this.errorMsg = this.customErrorMessage;
	}
}
