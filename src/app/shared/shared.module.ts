import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material';

@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule],
    exports: [CommonModule, MaterialModule, RouterModule],
    declarations: [],
})
export class SharedModule {}
