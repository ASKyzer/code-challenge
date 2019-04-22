import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
	declarations: [ AppComponent, ToolbarComponent ],
	imports: [ BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
