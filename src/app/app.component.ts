import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatSidenav } from './shared';

@Component({
    selector: 'wpl-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {

    @ViewChild('sidenav')
    sidenav: MatSidenav;

    sidenavOpened = false;

    onSidenavOpened() {
        this.sidenav.toggle();
    }
}
