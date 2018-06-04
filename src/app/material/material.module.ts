import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,

    MatSidenav
} from '@angular/material';

const COMPONENT_MODULES = [
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule
];

@NgModule({
    imports: [...COMPONENT_MODULES],
    exports: [...COMPONENT_MODULES],
})
export class MaterialModule {}
