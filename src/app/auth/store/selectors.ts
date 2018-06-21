import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from '../auth.models';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const getLoginErrorMessage = createSelector(
    selectAuthState,
    (state: AuthState) => state.errorMessage
);

export const getLoginInProcess = createSelector(
    selectAuthState,
    (state: AuthState) => state.loginInProcess
);

export const getUserInfo = createSelector(
    selectAuthState,
    (state: AuthState) => state.userInfo
);
