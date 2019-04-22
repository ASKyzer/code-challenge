import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TableComponent } from './componets/table/table.component';
import { CardComponent } from './components/card/card.component';
import { MapComponent } from './components/map/map.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';
import { NewCityComponent } from './components/new-city/new-city.component';

@NgModule({
	declarations: [ AppComponent, ToolbarComponent, TableComponent, CardComponent, MapComponent, FormComponent, HomeComponent, EditComponent, NewCityComponent ],
	imports: [ BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}

