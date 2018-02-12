import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import * as Rx from "rxjs/Rx";

import { GoogleAnalyticsService } from "../../../shared/";

enum LINK_TYPE {
  GIT = "Git",
  URL = "Url",
  DOWNLOAD = "Download"
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

  resume = {
    name: "Resume",
    category: "Addresses",
    pdf:
      "https://docs.google.com/document/d/16jbB9ipqmReDTs5IkEcjt8wsuCRJDGXjNvg9r2l6XQo/export?format=pdf",
    url:
      "https://docs.google.com/document/d/16jbB9ipqmReDTs5IkEcjt8wsuCRJDGXjNvg9r2l6XQo"
  };

  handleButtonClick(btnData: any, linkType?: string) {
    event.preventDefault();

    this.googleAnalyticsService.emitEvent(
      `${btnData.category} ${linkType || ""}`,
      btnData.name,
      $ => {
        let url: string;

        switch (linkType) {
          case LINK_TYPE.GIT:
            url = btnData.git;
            break;
          case LINK_TYPE.DOWNLOAD:
            url = btnData.pdf;
            break;
          default:
            if (btnData.name === "Phone" || btnData.name === "Email") {
              window.location.href = btnData.url;
              return;
            }
            url = btnData.url;
        }
        window.open(url, "_blank");
      }
    );
  }

  constructor(
    private httpClient: HttpClient,
    private googleAnalyticsService: GoogleAnalyticsService
  ) {}
}
