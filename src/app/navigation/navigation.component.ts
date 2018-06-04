import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth';
import { MatSidenav } from '../shared';

@Component({
    selector: 'wpl-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

    @Output()
    sidenavOpened: EventEmitter<void> = new EventEmitter<void>();

    constructor(private authService: AuthService) {}

    ngOnInit() {}

    onSidenavButtonClick() {
        this.sidenavOpened.emit();
    }
}
