import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { NavigationComponent } from './navigation.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [NavigationComponent],
  exports: [NavigationComponent]
})
export class NavigationModule { }
