import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { GoogleAnalyticsService } from "../shared/";

enum LINK_TYPE {
  GIT = "Git",
  URL = "Url",
  DOWNLOAD = "Download"
}

@Component({
  selector: "ak-left-sidenav",
  templateUrl: "left-sidenav.component.html",
  styleUrls: ["left-sidenav.component.css"]
})
export class LeftSidenavComponent {
  addresses: Observable<any> = this.httpClient.get(
    "./assets/configs/addresses.json"
  );
  socialNetworks: Observable<any> = this.httpClient.get(
    "./assets/configs/social-networks.json"
  );

  resume = {
    name: "Resume",
    category: "Addresses",
    pdf:
      "https://docs.google.com/document/d/16jbB9ipqmReDTs5IkEcjt8wsuCRJDGXjNvg9r2l6XQo/export?format=pdf",
    url:
      "https://docs.google.com/document/d/16jbB9ipqmReDTs5IkEcjt8wsuCRJDGXjNvg9r2l6XQo"
  };

  constructor(
    private httpClient: HttpClient,
    private googleAnalyticsService: GoogleAnalyticsService
  ) {}

  handleButtonClick(btnData: any, linkType?: string) {
    event.preventDefault();

    this.googleAnalyticsService.emitEvent(
      `${btnData.category} ${linkType || ""}`,
      btnData.name,
      $ => {
        switch (linkType) {
          case LINK_TYPE.GIT:
            window.open(btnData.git, "_blank");
            break;
          case LINK_TYPE.DOWNLOAD:
            window.location.href = btnData.pdf;
            break;
          default:
            if (btnData.name === "Phone" || btnData.name === "Email") {
              window.location.href = btnData.url;
              break;
            }
            window.open(btnData.url, "_blank");
        }
      }
    );
  }
}
