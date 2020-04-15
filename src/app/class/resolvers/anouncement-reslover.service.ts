import { Injectable, Input } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GoogleApiService } from 'src/app/services/goolgle-api-services';

@Injectable({
    providedIn:"root"
})
export class AnnouncementResolver implements Resolve<Announcement>{

    constructor(private _googleApiService: GoogleApiService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Announcement | Observable<Announcement> | Promise<Announcement> {
        return this._googleApiService.getAnnouncements(route.paramMap.get("id"));
    }
}