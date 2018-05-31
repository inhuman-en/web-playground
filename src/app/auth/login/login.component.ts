import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { User } from '../user';
import { AuthService } from '../auth.service';

@Component({
    selector: 'wpl-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
    user = new User();

    constructor(public auth: AuthService) {}

    ngOnInit() {}

    onSubmit() {
        console.log(this.auth.uid);
        this.auth
            .login(this.user)
            .then(() => console.info(`${this.user.username} successfully logged in!`))
            .catch(() => console.warn(`failed to authenticate ${this.user.username}`));
    }
}
