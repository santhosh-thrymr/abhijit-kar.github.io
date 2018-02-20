import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { LinkHandlerService, LINK_TYPES } from "../../../shared";

@Component({
  selector: "ak-projects",
  templateUrl: "projects.component.html",
  styleUrls: ["projects.component.css"]
})
export class ProjectsComponent {
  link_types = LINK_TYPES;

  projects: Observable<any> = this.httpClient.get(
    "./assets/configs/projects.json"
  );

  constructor(
    private httpClient: HttpClient,
    public linkHandlerService: LinkHandlerService
  ) {}
}
