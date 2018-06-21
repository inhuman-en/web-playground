import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';

import { User } from './user';

@Injectable()
export class AuthService {
    authenticated: Boolean = false;
    userDisplayMame = null;
    redirectTo: String = '/';
    uid: Number;

    constructor(private router: Router, private http: HttpClient) {
        this.uid = Math.random();
    }

    login(user: User) {
        console.log(`trying to login: ${user.username}, ${user.password}`);

        return this.http.post<User>(`/auth/signin`, user)
            .pipe(
                catchError((response) => {
                    const errorMessage: string = response.error.message || response.error;

                    this.authenticated = false;
                    return throwError(errorMessage);
                }),
                tap((userData) => {
                    this.authenticated = true;
                    this.userDisplayMame = userData.username;
                    return of(userData);
                })
            );
    }

    logout() {
        this.authenticated = false;
        this.router.navigate(['/login']);
    }
}
