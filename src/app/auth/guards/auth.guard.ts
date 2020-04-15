import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GoogleAuthService } from '../google-auth/google-auth.component';

@Injectable({
    providedIn: "root"
})
export class AuthGuardService implements CanActivate{

    constructor(private _googleAuthService: GoogleAuthService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this._googleAuthService.isLoggedIn().then(res=>{
            if(res == false){
                this._googleAuthService.signin();
            }
            else{
                return res;
            }
        });
    }
}