import { Component, OnInit } from '@angular/core';
import { GoogleAuthService } from './auth/google-auth/google-auth.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ClassRoom';
  isLoggedIn: boolean = false;

  constructor(private _authService: GoogleAuthService) { }

  ngOnInit(): void {
    this._authService.isLoggedIn().then(res => this.isLoggedIn = res.valueOf());
  }

  login() {
    this._authService.signin();
  }
}
