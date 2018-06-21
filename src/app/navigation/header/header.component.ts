import { Component, OnInit, Output, EventEmitter, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import { AuthService, AuthState, UserInfo, getUserInfo } from '../../core';

@Component({
    selector: 'wpl-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit, OnDestroy {
    @Output() sidenavOpened: EventEmitter<void> = new EventEmitter<void>();

    subscription: Subscription;
    userInfo: UserInfo;

    constructor(public authService: AuthService, private store: Store<any>) {}

    ngOnInit() {
        this.subscription = this.store.pipe(
            select(getUserInfo),
            tap((info: UserInfo) => {
                this.userInfo = info;
            })
        ).subscribe(() => {});
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onSidenavButtonClick() {
        this.sidenavOpened.emit();
    }
}
