import { LoginActionTypes, LoginAction } from './actions';
import { LoginState, UserInfo } from '../auth.models';

const initialState: LoginState = {
    authenticated: false,
    loginInProcess: false
};

export function loginReducer(state: LoginState = initialState, action: LoginAction): LoginState {
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
