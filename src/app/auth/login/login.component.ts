import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '../../material';
import { of } from 'rxjs';
import { catchError} from 'rxjs/operators';

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
            .subscribe((d) => {
                console.info(`${username} successfully logged in!`, d);
                this.dialogRef.close();
                // TODO: success svg animation
            }, (error) => {
                console.warn(`failed to authenticate ${username}: ${error.message}`);
                    this.errorMessage = error.message;
                    this.loginInProcess = false;

                    return of(null);
            });
    }
}
