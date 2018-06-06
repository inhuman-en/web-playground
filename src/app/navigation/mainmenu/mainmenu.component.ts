import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'wpl-mainmenu',
    templateUrl: './mainmenu.component.html',
    styleUrls: ['./mainmenu.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MainmenuComponent implements OnInit {

    sidenavExpanded = true;

    constructor() {}

    ngOnInit() {}

    toggleSidenav() {
        this.sidenavExpanded = !this.sidenavExpanded;
    }
}
