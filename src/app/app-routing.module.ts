import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component'
import { EditComponent } from './components/edit/edit.component'
import { NewCityComponent } from './components/new-city/new-city.component'
import { CityComponent } from './components/city/city.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'city/:id', component: CityComponent },
  { path: 'edit', component: EditComponent },
  { path: 'new', component: NewCityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
