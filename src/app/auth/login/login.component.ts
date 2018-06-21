import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { LoginState } from '../auth.models';
import { LoginAttempt, LoginSuccess, LoginFailure, getLoginErrorMessage, getLoginInProcess } from '../store';

import { User } from '../user';
import { AuthService } from '../auth.service';

@Component({
    selector: 'wpl-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
    @Output() loginSuccess: EventEmitter<string> = new EventEmitter<string>();

    user = new User();
    errorMessage: string;
    loginInProcess = false;

    constructor(
        public auth: AuthService,
        private store: Store<LoginState>
    ) {}

    ngOnInit() {
        this.store.pipe(select(getLoginErrorMessage))
            .subscribe(message => {
                this.errorMessage = message;
            });

        this.store.pipe(select(getLoginInProcess))
            .subscribe(inProcess => {
                this.loginInProcess = inProcess;
            });
    }

    googleLogin() {
        console.log('oauth');
    }

    localLogin() {
        const username: string = this.user.username;

        this.store.dispatch(new LoginAttempt(this.user));

        this.auth
            .login(this.user)
            .subscribe((d) => {
                console.info(`${username} successfully logged in!`, d);

                this.store.dispatch(new LoginSuccess({ username: d.username }));
                // TODO: success svg animation
            }, (errorMessage) => {
                console.warn(`failed to authenticate ${username}: ${errorMessage}`);
                    this.store.dispatch(new LoginFailure(errorMessage));
            });
    }
}
