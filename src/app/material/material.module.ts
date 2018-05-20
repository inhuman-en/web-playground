import { NgModule } from '@angular/core';
import { MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';

const COMPONENT_MODULES = [MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule];

@NgModule({
    imports: [...COMPONENT_MODULES],
    exports: [...COMPONENT_MODULES]
})
export class MaterialModule {}
