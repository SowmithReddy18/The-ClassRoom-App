import { NgModule } from "@angular/core";
import { SignInComponent } from './callback-components/signin-callback.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './http-interceptor.service';

@NgModule({
    declarations:[
        SignInComponent
    ],
    imports:[],
    providers:[
        {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
    ]
})
export class AuthModule{}