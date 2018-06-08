import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';

@Injectable()
export class AuthService {
    authenticated: Boolean = false;
    redirectTo: String = '/';
    uid: Number;
    constructor(private router: Router) {
        this.uid = Math.random();
    }

    validUser: User = new User('admin', '1');

    login(user: User) {
        console.log(`trying to login: ${user.username}, ${user.password}`);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user.username === this.validUser.username && user.password === this.validUser.password) {
                    this.authenticated = true;
                    this.router.navigate([this.redirectTo]);
                    resolve();
                } else {
                    reject({
                        message: 'incorrect login or password'
                    });
                }
            }, 1000);
        });
    }

    logout() {
        this.authenticated = false;
        this.router.navigate(['/login']);
    }
}
