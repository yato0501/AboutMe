import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatTabsModule} from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';
import { OtherLinkComponent } from './other-link/other-link.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ResumeComponent,
    OtherLinkComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
