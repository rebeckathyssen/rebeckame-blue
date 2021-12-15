import { Injectable } from "@angular/core";
import { Project } from "../Models/project";
import { PROJECTS } from "../mockprojects";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProjectService {
  constructor() {}

  getAllProjects(): Observable<Project[]> {
    return of(PROJECTS.sort((a, b) => b.id - a.id));
  }

  getProject(id: string): Observable<Project> {
    return of(PROJECTS.find((x) => x.id === id));
  }
}
