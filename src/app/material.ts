import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
	imports: [
		MatButtonModule,
		MatCheckboxModule,
		MatToolbarModule,
		MatIconModule,
		MatMenuModule,
		MatTableModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatProgressSpinnerModule
	],
	exports: [
		MatButtonModule,
		MatCheckboxModule,
		MatToolbarModule,
		MatIconModule,
		MatMenuModule,
		MatTableModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatProgressSpinnerModule
	]
})
export class MaterialModule {}
