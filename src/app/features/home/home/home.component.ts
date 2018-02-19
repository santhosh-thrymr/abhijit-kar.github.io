import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import * as Rx from "rxjs/Rx";

import { LinkHandlerService, LINK_TYPES } from "../../../shared/";

@Component({
  selector: "ak-home",
  templateUrl: "home.component.html",
  styleUrls: ["home.component.css"]
})
export class HomeComponent {
  link_types = LINK_TYPES;

  projects: Observable<any> = this.httpClient.get(
    "./assets/configs/projects.json"
  );

  constructor(
    private httpClient: HttpClient,
    public linkHandlerService: LinkHandlerService
  ) {}
}
