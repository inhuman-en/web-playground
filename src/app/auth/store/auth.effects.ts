import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { AuthService } from '../auth.service';
import { LoginActionTypes, LoginAttempt, LoginSuccess, LoginFailure } from './actions';

@Injectable()
export class AuthEffects {
    @Effect()
    login$: Observable<Action> = this.actions$.pipe(
        ofType(LoginActionTypes.LOGIN_ATTEMPT),
        mergeMap((action: LoginAttempt) =>
            this.authService.login(action.payload).pipe(
                map(d => new LoginSuccess({ username: d.username })),
                catchError(errorMessage => of(new LoginFailure(errorMessage)))
            )
        )
    );

    constructor(
        private authService: AuthService,
        private actions$: Actions
    ) {}
}
