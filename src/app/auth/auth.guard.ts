import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { getIsAuthenticated } from './store';

import { AuthService } from './auth.service';
import { AuthState } from './auth.models';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private authService: AuthService, private router: Router, private store: Store<AuthState>) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.store.pipe(
            select(getIsAuthenticated),
            map((isAuthenticated: boolean) => {

                // if (!isAuthenticated) {
                //     this.authService.redirectTo = state.url;
                //     this.router.navigate(['/login']);
                // }
                console.log(isAuthenticated);
                return true;
            })
        );
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.canActivate(route, state);
    }
}
