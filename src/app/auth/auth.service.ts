import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError} from 'rxjs/operators';

import { User } from './user';

@Injectable()
export class AuthService {
    authenticated: Boolean = false;
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
                // () => {
                //     this.authenticated = true;
                //     return of(null);
                // },
                catchError((err) => of({
                    message: 'Incorrect login or password'
                }))
            );

            /*
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user.username === this.validUser.username && user.password === this.validUser.password) {
                    this.authenticated = true;
                    this.router.navigate([this.redirectTo]);
                    resolve();
                } else {
                    reject({
                        message: 'Incorrect login or password'
                    });
                }
            }, 1000);
        });
        */
    }

    logout() {
        this.authenticated = false;
        this.router.navigate(['/login']);
    }
}
