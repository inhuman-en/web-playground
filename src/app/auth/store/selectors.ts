import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import { LoginState } from '../auth.models';

export const selectAuthState = createFeatureSelector<LoginState>('login');

export const getLoginErrorMessage = createSelector(
    selectAuthState,
    (state: LoginState) => state.errorMessage
);

export const getLoginInProcess = createSelector(
    selectAuthState,
    (state: LoginState) => state.loginInProcess
);
