import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../core';
import { MatDialog } from '../../material';
import { LoginComponent } from '../../auth';

@Component({
    selector: 'wpl-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
    @Output() sidenavOpened: EventEmitter<void> = new EventEmitter<void>();

    loginVisible = false;

    constructor(private authService: AuthService, private dialogService: MatDialog) {}

    ngOnInit() {}

    onSidenavButtonClick() {
        this.sidenavOpened.emit();
    }

    showLoginForm() {

        if (this.loginVisible) {
            return;
        }

        this.loginVisible = true;

        const dialogRef = this.dialogService.open(LoginComponent, {
            hasBackdrop: false,
            panelClass: 'login-panel'
        });

        dialogRef.afterClosed().subscribe(() => this.loginVisible = false);
    }
}
