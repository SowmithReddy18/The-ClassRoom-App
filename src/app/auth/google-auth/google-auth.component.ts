import { Component, Injectable } from "@angular/core";
import { UserManager, User } from "oidc-client";
import { Subject } from 'rxjs';
import { promise } from 'protractor';

@Injectable({
    providedIn: "root"
})
export class GoogleAuthService {

    private _userManager: UserManager;
    private _user: User;
    private _userSubject: Subject<User> = new Subject<User>();
    private _scopeList = [
        "openid",
        "profile",
        "https://www.googleapis.com/auth/classroom.courses.readonly",
        "https://www.googleapis.com/auth/classroom.announcements.readonly",
        "https://www.googleapis.com/auth/classroom.student-submissions.me.readonly",
        "https://www.googleapis.com/auth/classroom.coursework.students",
        "https://www.googleapis.com/auth/classroom.topics.readonly",
    ]

    CurrentUser = this._userSubject.asObservable();

    constructor() {
        this._userManager = new UserManager({
            authority: "https://accounts.google.com",
            client_id: "843327619114-ldobqmc9uthslaqcp99j37qb81kp1ofc.apps.googleusercontent.com",
            client_secret: "TmzjY3J99sU_HDZvwVNfBEyL",
            redirect_uri: "http://localhost:4200/signin-callback",
            scope: this._scopeList.join(" "),
            response_type: "id_token token"
        })
    }

    signin() {
        this._userManager.signinRedirect().then((res) => console.log(res));
    }

    signInComplete() {
        return this._userManager.signinRedirectCallback();
    }

    isLoggedIn(): Promise<boolean> {
        return this._userManager.getUser().then(user => {
            var loggedIn = !!user && !user.expired;
            if (this._user != user) this._userSubject.next(user);
            if (loggedIn) this._user = user;
            return loggedIn;
        })
    }

    getAccessToken(): Promise<string | void> {
        return this._userManager.getUser().then(user => {
            return !!user && !user.expired ? user.access_token : '';
        })
    }
}