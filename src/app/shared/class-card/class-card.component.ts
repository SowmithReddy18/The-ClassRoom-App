import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-class-card',
  templateUrl: './class-card.component.html',
  styleUrls: ['./class-card.component.css']
})
export class ClassCardComponent implements OnInit {

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) { }

  @Input() CourseId: string;

  ngOnInit() {
  }

  getAnnouncements() {
    this._router.navigate([this.CourseId + '/announcement'],{relativeTo: this._activatedRoute});
  }
}
