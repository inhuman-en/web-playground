import { LoginActionTypes, LoginAction } from './actions';
import { AuthState, UserInfo } from '../auth.models';

const initialState: AuthState = {
    authenticated: false,
    loginInProcess: false
};

export function authReducer(state: AuthState = initialState, action: LoginAction): AuthState {
    switch (action.type) {
        case LoginActionTypes.LOGIN_ATTEMPT: {
            return { ...state, loginInProcess: true };
        }

        case LoginActionTypes.LOGIN_SUCCESS: {
            return {
                authenticated: true,
                loginInProcess: false,
                userInfo: <UserInfo>action.payload,
                errorMessage: null
            };
        }

        case LoginActionTypes.LOGIN_FAILURE: {
            return {
                authenticated: false,
                loginInProcess: false,
                errorMessage: <string>action.payload,
                userInfo: null
            };
        }

        default: {
            return state;
        }
    }
}
