import { Router } from '@angular/router';
import { AuthService } from './auth.service';

describe('AuthService', () => {
    const setup = () => {
            routerMock = {
                navigate: url => url
            };
            service = new AuthService(routerMock as Router);
        },
        teardown = () => {
            service = null;
        };
    let service, routerMock;

    beforeEach(setup);
    afterEach(teardown);

    it('logout shound redirect the user to the login page', () => {
        spyOn(routerMock, 'navigate');

        service.logout();

        expect(routerMock.navigate).toHaveBeenCalledWith(['/login']);
    });
});
