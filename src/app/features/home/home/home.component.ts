import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import * as Rx from "rxjs/Rx";

import { GoogleAnalyticsService } from "../../../shared/";

enum LINK_TYPE {
  GIT = "GIT",
  URL = "URL"
}

@Component({
  selector: "app-home",
  templateUrl: "home.component.html",
  styleUrls: ["home.component.css"]
})
export class HomeComponent {
  addresses: Observable<any> = this.httpClient.get(
    "./assets/configs/addresses.json"
  );
  socialNetworks: Observable<any> = this.httpClient.get(
    "./assets/configs/social-networks.json"
  );
  skills: Observable<any> = this.httpClient.get("./assets/configs/skills.json");
  projects: Observable<any> = this.httpClient.get(
    "./assets/configs/projects.json"
  );

  handleButtonClick(btnData: any, type?: LINK_TYPE) {
    event.preventDefault();

    this.googleAnalyticsService.emitEvent(
      btnData.category + type === LINK_TYPE.GIT ? " Repo" : "",
      btnData.name,
      $ => {
        if (type === LINK_TYPE.GIT) {
          window.open(btnData.git, "_blank");
          return;
        }
        window.open(btnData.url, "_blank");
      }
    );
  }

  constructor(
    private httpClient: HttpClient,
    private googleAnalyticsService: GoogleAnalyticsService
  ) {}
}
