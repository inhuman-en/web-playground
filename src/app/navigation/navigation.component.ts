import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { AuthService } from '../auth';
import { MainmenuComponent } from './mainmenu';

@Component({
    selector: 'wpl-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
    @ViewChild('mainmenu') mainmenu: MainmenuComponent;

    ngOnInit() {}

    onSidenavOpened() {
        this.mainmenu.toggleSidenav();
    }
}
