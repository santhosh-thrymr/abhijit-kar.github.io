import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { LinkHandlerService, LINK_TYPES } from "../../../shared";

@Component({
  selector: "ak-skills",
  templateUrl: "skills.component.html",
  styleUrls: ["skills.component.css"]
})
export class SkillsComponent {
  link_types = LINK_TYPES;

  skills: Observable<any> = this.httpClient.get("./assets/configs/skills.json");

  constructor(
    private httpClient: HttpClient,
    public linkHandlerService: LinkHandlerService
  ) {}
}
