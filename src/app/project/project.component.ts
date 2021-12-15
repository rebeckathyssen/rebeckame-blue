import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { ProjectService } from "../Shared/Services/project.service";
import { Project } from "../Shared/Models/project";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.scss"],
})
export class ProjectComponent implements OnInit {
  project: Project;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.getProject();
  }

  getProject(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.projectService.getProject(id).subscribe((data) => {
      this.project = data;
    });
  }
}
