import { Action } from '@ngrx/store';
import { UserInfo } from '../auth.models';
import { User } from '../user';

export enum LoginActionTypes {
    LOGIN_ATTEMPT = 'LOGIN_ATTEMPT',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAILURE = 'LOGIN_FAILURE'
}

export class LoginAttempt implements Action {

    type = LoginActionTypes.LOGIN_ATTEMPT;

    constructor (public payload: User) {}
}

export class LoginSuccess implements Action {

    type = LoginActionTypes.LOGIN_SUCCESS;

    constructor (public payload: UserInfo) {}
}

export class LoginFailure implements Action {

    type = LoginActionTypes.LOGIN_FAILURE;

    constructor (public payload: string) {}
}

export type LoginAction = LoginAttempt | LoginSuccess | LoginFailure;
