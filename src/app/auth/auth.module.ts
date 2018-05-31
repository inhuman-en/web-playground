import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';

import { AuthGuard } from './auth.guard';
import { SharedModule } from '../shared';

const routes: Routes = [{ path: 'login', component: LoginComponent }];

@NgModule({
    imports: [CommonModule, SharedModule, FormsModule, RouterModule.forChild(routes)],
    providers: [
        AuthService,
        AuthGuard
    ],
    declarations: [LoginComponent],
    exports: [RouterModule, LoginComponent],
})
export class AuthModule {}
