import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SignInComponent } from './auth/callback-components/signin-callback.component';
import { HomeComponentComponent } from './home/home-component.component';
import { ClassComponentComponent } from './class/class-component.component';
import { AuthGuardService } from './auth/guards/auth.guard';
import { AnnouncementsComponent } from './class/announcements/announcements.component';
import { AnnouncementResolver } from './class/resolvers/anouncement-reslover.service';


const routes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  {
    path: 'class',
    component: ClassComponentComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: ':id/announcement',
        component: AnnouncementsComponent,
        resolve: { announcements: AnnouncementResolver }
      }
    ]
  },
  { path: 'signin-callback', component: SignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
