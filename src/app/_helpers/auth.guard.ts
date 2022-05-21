import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '@/_services';

// 👇 O auth guard serve pra 
// impedir que outros usuários acessem rotas proibidas
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            //  👇 se autorizado retorna verdadeiro
            return true;
        }

        //  👇 caso não esteja logado, sera redirecionado para pagina de login!
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}