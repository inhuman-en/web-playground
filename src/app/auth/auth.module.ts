import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { StoreModule } from '@ngrx/store';

import { authReducer } from './store';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { SharedModule } from '../shared';

import { LoginComponent } from './login/login.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [{ path: 'login', component: LoginpageComponent}];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('auth', authReducer)
    ],
    providers: [
        AuthService,
        AuthGuard
    ],
    declarations: [LoginComponent, LoginpageComponent],
    exports: [RouterModule, LoginComponent],
    entryComponents: [LoginComponent]
})
export class AuthModule {}
