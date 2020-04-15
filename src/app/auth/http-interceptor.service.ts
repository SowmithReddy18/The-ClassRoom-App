import { Injectable } from "@angular/core";
import { AuthModule } from './auth.module';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { GoogleAuthService } from './google-auth/google-auth.component';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private _gooleAuthService: GoogleAuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        if (req.url.startsWith("https://classroom.googleapis")) {
            return from(this._gooleAuthService.getAccessToken().then(token => {
                var header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
                var authReq = req.clone({ headers: header });
                return next.handle(authReq).toPromise();
            }));
        }
        else{
            return next.handle(req);
        }
    }

}