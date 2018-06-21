import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core';
import { AuthModule } from './auth';
import { NavigationModule } from './navigation';
import { SharedModule } from './shared';
import { DashboardModule } from './dashboard/dashboard.module';

// import { AuthService } from './auth/auth.service';
// import { AuthGuard } from './auth/auth.guard';

@NgModule({
    declarations: [AppComponent],
    imports: [
        CoreModule,
        NavigationModule,
        SharedModule,
        DashboardModule,
        AuthModule,
        AppRoutingModule,
        StoreModule.forRoot({}),
        StoreDevtoolsModule.instrument({
            maxAge: 25
        }),
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
