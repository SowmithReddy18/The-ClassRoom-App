import { Component, OnInit } from "@angular/core";
import { GoogleAuthService } from '../google-auth/google-auth.component';
import { Router } from '@angular/router';

@Component({
    template:`<div></div>`
})
export class SignInComponent implements OnInit{

    constructor(private _authService: GoogleAuthService, private _router: Router) {
    }

    ngOnInit(): void {
        this._authService.signInComplete().then((res)=>console.log(res));
        this._router.navigate(['/home'], {replaceUrl: true});
    }

}