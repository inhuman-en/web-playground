import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core';
import { NavigationModule } from './navigation';
import { SharedModule } from './shared';

// import { AuthService } from './auth/auth.service';
// import { AuthGuard } from './auth/auth.guard';

@NgModule({
    declarations: [AppComponent],
    imports: [CoreModule, NavigationModule, AppRoutingModule, SharedModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
