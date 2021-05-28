import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

const modules = [
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatDialogModule,
    MatIconModule,
];

@NgModule({
    imports: [...modules],
    exports: [...modules],
})
export class MaterialModule { }
