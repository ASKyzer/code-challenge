import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';

@NgModule({
	imports: [ MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule, MatTableModule ],
	exports: [ MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule, MatTableModule ]
})
export class MaterialModule {}
