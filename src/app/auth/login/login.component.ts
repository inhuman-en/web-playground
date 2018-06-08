import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '../../material';

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
        // TODO: separate form from dialog
        public dialogRef: MatDialogRef<LoginComponent>
    ) {}

    ngOnInit() {}

    googleLogin() {
        console.log('oauth');
    }

    localLogin() {
        const username: string = this.user.username;

        this.errorMessage = null;
        this.loginInProcess = true;

        console.log(this.auth.uid);
        this.auth
            .login(this.user)
            .then(() => {
                console.info(`${username} successfully logged in!`);
                this.dialogRef.close();
                // TODO: success svg animation
            })
            .catch((err) => {
                console.warn(`failed to authenticate ${username}: ${err.message}`);
                this.errorMessage = err.message;
                this.loginInProcess = false;
            });
    }
}
