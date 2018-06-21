export interface UserInfo {
    username: string;
}

export interface AuthState {
    authenticated: boolean;
    loginInProcess: boolean;
    userInfo?: UserInfo;
    errorMessage?: string;
}
