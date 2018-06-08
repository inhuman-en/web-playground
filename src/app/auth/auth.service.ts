import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';

import { User } from './user';

@Injectable()
export class AuthService {
    authenticated: Boolean = false;
    // TODO: separate models for user and userInfo
    userDisplayMame = null;
    redirectTo: String = '/';
    uid: Number;
    constructor(private router: Router, private http: HttpClient) {
        this.uid = Math.random();
    }

    validUser: User = new User('admin', '1');

    login(user: User) {
        console.log(`trying to login: ${user.username}, ${user.password}`);

        return this.http.post<User>(`/auth/signin`, user)
            .pipe(
                catchError((response) => {
                    this.authenticated = false;
                    return throwError(response.error);
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
