import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './dashboardpage/dashboardpage.component';

@NgModule({
  imports: [
    DashboardRoutingModule
  ],
  declarations: [DashboardPageComponent]
})
export class DashboardModule { }
