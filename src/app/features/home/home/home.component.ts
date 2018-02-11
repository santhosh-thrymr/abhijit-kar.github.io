import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import * as Rx from "rxjs/Rx";

import { GoogleAnalyticsService } from "../../../shared/";

@Component({
  selector: "app-home",
  templateUrl: "home.component.html",
  styleUrls: ["home.component.css"]
})
export class HomeComponent {
  addresses: Observable<any> = this.httpClient.get(
    "./assets/configs/addresses.json"
  );

  socialNetworks: any[] = [
    {
      name: "Twitter",
      category: "Social",
      class: "fa-twitter",
      url: "https://twitter.com/AbhijitKarDikha"
    },
    {
      name: "LinkedIn",
      category: "Social",
      class: "fa-linkedin",
      url: "https://www.linkedin.com/in/abhijit-kar/"
    }
  ];

  skills: Observable<any> = this.httpClient.get("./assets/configs/skills.json");

  handleButtonClick(btnData: any) {
    event.preventDefault();
    
    this.googleAnalyticsService.emitEvent(btnData.category, btnData.name, $ => {
      window.open(btnData.url, "_blank");
    });
  }

  constructor(
    private httpClient: HttpClient,
    private googleAnalyticsService: GoogleAnalyticsService
  ) {}
}
