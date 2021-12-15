import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { MyProjectsComponent } from "./my-projects/my-projects.component";
import { ResumeComponent } from "./resume/resume.component";
import { ProjectComponent } from "./project/project.component";
import { ThetradesmanComponent } from "./project/thetradesman/thetradesman.component";
import { LudoComponent } from "./project/ludo/ludo.component";
import { TestcompComponent } from './testcomp/testcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    MyProjectsComponent,
    ResumeComponent,
    ProjectComponent,
    ThetradesmanComponent,
    LudoComponent,
    TestcompComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
