import { Component } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { LinkHandlerService } from "../../../shared";

@Component({
  selector: "ak-experience",
  templateUrl: "experience.component.html",
  styleUrls: ["experience.component.css"]
})
export class ExperienceComponent {
  experiences: Observable<any> = this.httpClient.get(
    "./assets/configs/experiences.json"
  );

  constructor(
    private httpClient: HttpClient,
    public linkHandlerService: LinkHandlerService
  ) {}
}
