import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeComponentComponent } from './home/home-component.component';
import { ClassComponentComponent } from './class/class-component.component';
import { HttpClientModule } from '@angular/common/http';
import { AssignmentComponent } from './class/assignment/assignment.component';
import { AnnouncementsComponent } from './class/announcements/announcements.component';
import { ClassCardComponent } from './shared/class-card/class-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ClassComponentComponent,
    AssignmentComponent,
    AnnouncementsComponent,
    ClassCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
