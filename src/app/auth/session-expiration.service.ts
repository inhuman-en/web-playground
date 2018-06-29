import { Injectable } from '@angular/core';
import { Observable, timer, pipe, fromEvent } from 'rxjs';
import { tap, switchMapTo, take, takeUntil, debounceTime } from 'rxjs/operators';

@Injectable()
export class SessionExpirationService {

    private readonly EXPIRATION_TIMEOUT: number = 30000;

    private readonly NOTIFICATION_TIMEOUT: number = 1000;

    private readonly LOGOUT_TIMEOUT: number = 5000;

    constructor() {}

    /**
     * trackUser
     */
    public trackUser(): Observable<number> {
        return this.userIsActive().pipe(
                debounceTime(this.EXPIRATION_TIMEOUT),
                switchMapTo(this.expirationStart())
            );
    }

    private expirationStart(): Observable<number> {
        return timer(this.NOTIFICATION_TIMEOUT)
            .pipe(
                take(1),
                tap(() => {
                    console.log(Date.now(), 'are you still here?');
                }),
                switchMapTo(
                    timer(this.LOGOUT_TIMEOUT).pipe(
                        takeUntil(this.userIsActive()),
                        tap(() => {
                            console.log(Date.now(), 'logging out..');
                        })
                    )
                )

            );
    }

    private userIsActive(): Observable<Event> {
        return fromEvent(document, 'mousemove');
    }
}
