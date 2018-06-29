import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './dashboardpage/dashboardpage.component';

@NgModule({
  imports: [
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [DashboardPageComponent]
})
export class DashboardModule { }
