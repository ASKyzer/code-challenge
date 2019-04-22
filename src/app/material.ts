import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@NgModule({
	imports: [
		MatButtonModule,
		MatCheckboxModule,
		MatToolbarModule,
		MatIconModule,
		MatMenuModule,
		MatTableModule,
		MatCardModule
	],
	exports: [
		MatButtonModule,
		MatCheckboxModule,
		MatToolbarModule,
		MatIconModule,
		MatMenuModule,
		MatTableModule,
		MatCardModule
	]
})
export class MaterialModule {}
