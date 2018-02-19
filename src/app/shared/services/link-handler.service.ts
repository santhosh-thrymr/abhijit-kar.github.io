import { Injectable } from "@angular/core";

import { GoogleAnalyticsService } from "./google-analytics.service";

export enum LINK_TYPES {
  GIT = "Git",
  URL = "Url",
  DOWNLOAD = "Download"
}

@Injectable()
export class LinkHandlerService {
  constructor(private googleAnalyticsService: GoogleAnalyticsService) {}

  handleButtonClick(btnData: any, linkType?: string) {
    event.preventDefault();

    this.googleAnalyticsService.emitEvent(
      `${btnData.category} ${linkType || ""}`,
      btnData.name,
      $ => {
        switch (linkType) {
          case LINK_TYPES.GIT:
            window.open(btnData.git, "_blank");
            break;
          case LINK_TYPES.DOWNLOAD:
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
