import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';

@NgModule({
    imports: [CommonModule, MaterialModule],
    exports: [CommonModule, MaterialModule],
    declarations: [],
})
export class SharedModule {}
