import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core';
import { NavigationModule } from './navigation';
import { SharedModule } from './shared';
import { DashboardModule } from './dashboard/dashboard.module';

// import { AuthService } from './auth/auth.service';
// import { AuthGuard } from './auth/auth.guard';

@NgModule({
    declarations: [AppComponent],
    imports: [CoreModule, NavigationModule, SharedModule, DashboardModule, AppRoutingModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
