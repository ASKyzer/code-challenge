import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TableComponent } from './components/table/table.component';
import { CardComponent } from './components/card/card.component';
import { MapComponent } from './components/map/map.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';
import { NewCityComponent } from './components/new-city/new-city.component';
import { CityComponent } from './components/city/city.component';
import { ServerErrorComponent } from './components/server-error/server-error.component';

import { ApiService } from './services/api.service';

@NgModule({
	declarations: [
		AppComponent,
		ToolbarComponent,
		TableComponent,
		CardComponent,
		MapComponent,
		FormComponent,
		HomeComponent,
		EditComponent,
		NewCityComponent,
		CityComponent,
		ServerErrorComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		
	],
	providers: [ ApiService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
