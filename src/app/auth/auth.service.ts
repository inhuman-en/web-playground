import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { of, throwError, Observable, Subscription } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';

import { User } from './user';
import { SessionExpirationService } from './session-expiration.service';

@Injectable()
export class AuthService {
    public redirectTo: String = '/dashboard';
    public uid: Number;

    private sessionExpiration$: Observable<number>;
    private subscription: Subscription;

    constructor(
        private router: Router,
        private timeoutService: SessionExpirationService,
        private http: HttpClient
    ) {
        this.uid = Math.random();
        this.sessionExpiration$ = this.timeoutService.trackUser();
    }

    login(user: User) {
        console.log(`trying to login: ${user.username}, ${user.password}`);

        return this.http.post<User>(`/auth/signin`, user)
            .pipe(
                catchError((response) => {
                    const errorMessage: string = response.error.message || response.error;

                    return throwError(errorMessage);
                }),
                tap((userData) => {
                    return of(userData);
                }),
                tap(() => {
                    this.router.navigate([this.redirectTo]);
                }),
                tap(() => {
                    this.subscription = this.sessionExpiration$.subscribe(this.logout.bind(this));
                })
            );
    }

    logout() {
        this.subscription.unsubscribe();
        this.router.navigate(['/login']);
    }
}
