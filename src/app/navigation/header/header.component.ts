import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../core';

@Component({
    selector: 'wpl-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

    @Output()
    sidenavOpened: EventEmitter<void> = new EventEmitter<void>();

    constructor(private authService: AuthService) {}

    ngOnInit() {}

    onSidenavButtonClick() {
        this.sidenavOpened.emit();
    }
}
