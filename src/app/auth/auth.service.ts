import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';

import { User } from './user';

@Injectable()
export class AuthService {
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

                    return throwError(errorMessage);
                }),
                tap((userData) => {
                    return of(userData);
                })
            );
    }

    logout() {
        this.router.navigate(['/login']);
    }
}
