import { Component, OnInit } from '@angular/core';
import { GoogleApiService } from '../services/goolgle-api-services';

@Component({
  selector: 'app-class-component',
  templateUrl: './class-component.component.html',
  styleUrls: ['./class-component.component.css']
})
export class ClassComponentComponent implements OnInit {

  constructor(private _googleApiService: GoogleApiService) { }

  Courses: Array<Course>;

  ngOnInit() {
    this._googleApiService.getCourses().subscribe(res => {
      this.Courses = res.courses;
      });
  }

  getClasses() {
    this._googleApiService.getCourses().subscribe();
  }

  getAnnouncements() {
    this._googleApiService.getAnnouncements("68367828330").subscribe(res => console.log(res));
  }

  getCourseWork() {
    this._googleApiService.getCourseWork("69326146081").subscribe(res => console.log(res));
  }

  getAliases() {
    this._googleApiService.getAliases("68367828330").subscribe(res => console.log(res));
  }
}
