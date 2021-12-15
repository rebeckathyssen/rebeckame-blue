import { Component, OnInit, Input } from "@angular/core";
import { ProjectService } from "../Shared/Services/project.service";
import { Project } from "../Shared/Models/project";

@Component({
  selector: "app-my-projects",
  templateUrl: "./my-projects.component.html",
  styleUrls: ["./my-projects.component.scss"],
})
export class MyProjectsComponent implements OnInit {
  projectListBase: Project[];

  constructor(public projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getAllProjects().subscribe((x) => {
      (this.projectListBase = x), console.log(x);
    });
  }
}
