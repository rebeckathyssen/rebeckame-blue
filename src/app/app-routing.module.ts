import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "../app/home/home.component";
import { ProjectComponent } from "./project/project.component";
import { MyProjectsComponent } from "./my-projects/my-projects.component";
import { AppComponent } from "./app.component";

const routes: Routes = [
  //{ path: "", component: HomeComponent },
  { path: "", component: MyProjectsComponent },

  {
    path: "project/:id",
    component: ProjectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
