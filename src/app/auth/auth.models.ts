export interface UserInfo {
    username: string;
}

export interface LoginState {
    authenticated: boolean;
    loginInProcess: boolean;
    userInfo?: UserInfo;
    errorMessage?: string;
}
