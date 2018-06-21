import { Component, OnInit, OnDestroy, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription, of, merge } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthState } from '../auth.models';
import { LoginAttempt, LoginSuccess, LoginFailure, getLoginErrorMessage, getLoginInProcess } from '../store';

import { User } from '../user';
import { AuthService } from '../auth.service';

@Component({
    selector: 'wpl-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit, OnDestroy {
    @Output() loginSuccess: EventEmitter<string> = new EventEmitter<string>();

    user = new User();
    errorMessage: string;
    loginInProcess = false;

    subscription: Subscription;

    constructor(
        public auth: AuthService,
        private store: Store<AuthState>
    ) {}

    ngOnInit() {
        this.subscription = merge(
            this.store.pipe(
                select(getLoginErrorMessage),
                tap(message => {
                    this.errorMessage = message;
                })
            ),
            this.store.pipe(
                select(getLoginInProcess),
                tap(inProcess => {
                    this.loginInProcess = inProcess;
                })
            )
        ).subscribe(() => {});
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    googleLogin() {
        console.log('oauth');
    }

    localLogin() {
        this.store.dispatch(new LoginAttempt(this.user));
    }
}
