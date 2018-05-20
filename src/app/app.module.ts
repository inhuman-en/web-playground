import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core';
import { NavigationModule } from './navigation';

@NgModule({
    declarations: [AppComponent],
    imports: [AppRoutingModule, CoreModule, NavigationModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
