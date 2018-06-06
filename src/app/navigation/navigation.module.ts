import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { NavigationComponent } from './navigation.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [NavigationComponent, MainmenuComponent, HeaderComponent, BreadcrumbComponent],
  exports: [NavigationComponent]
})
export class NavigationModule { }
