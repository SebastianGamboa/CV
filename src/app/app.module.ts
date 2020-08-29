import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstResumeComponent } from './components/first-resume/first-resume.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SecondResumeComponent } from './components/second-resume/second-resume.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ResumeEnComponent } from './components/resume-en/resume-en.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstResumeComponent,
    SecondResumeComponent,
    ResumeEnComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
