import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth';
import { MatSidenav } from '../shared';

@Component({
    selector: 'wpl-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

    ngOnInit() {}

    onSidenavOpened() {
        console.log('toggling sidenav');
    }
}
