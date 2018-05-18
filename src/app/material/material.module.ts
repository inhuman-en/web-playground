import { NgModule } from '@angular/core';
import { MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
    imports: [MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule],
    exports: [MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule]
})
export class MaterialModule {}
