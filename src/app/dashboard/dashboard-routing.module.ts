import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPageComponent } from './dashboardpage/dashboardpage.component';
import { AuthGuard } from '../auth';

const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardPageComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
