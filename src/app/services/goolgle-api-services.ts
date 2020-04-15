import { Injectable, OnInit } from "@angular/core";
import { GoogleAuthService } from '../auth/google-auth/google-auth.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class GoogleApiService implements OnInit {

    constructor(private _authService: GoogleAuthService, private _httpClient: HttpClient) {
    }

    ngOnInit(): void {
    }

    baseUrl: string = "https://classroom.googleapis.com";
    private accessToken: string | void = '';

    getCourses(): Observable<any> {
       return this._httpClient.get(this.baseUrl + '/v1/courses');
    }

    getAnnouncements(courseId: string): Observable<any> {
        return this._httpClient.get(this.baseUrl + '/v1/courses/' + courseId + '/announcements');
    }

    getCourseWork(courseId: string): Observable<any> {
        return this._httpClient.get(this.baseUrl + '/v1/courses/' + courseId + '/courseWork');
    }

    getAliases(courseId: string): Observable<any> {
        return this._httpClient.get(this.baseUrl + '/v1/courses/' + courseId + '/aliases');
    }
}