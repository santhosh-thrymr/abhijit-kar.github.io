import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import * as Rx from "rxjs/Rx";

@Component({
  selector: "app-home",
  templateUrl: "home.component.html",
  styleUrls: ["home.component.css"]
})
export class HomeComponent {
  addresses: Observable<any> = this.httpClient.get(
    "./assets/configs/addresses.json"
  );

  socialIcons: string[] = ["fa-twitter", "fa-linkedin"];

  skills: Observable<any> = this.httpClient.get("./assets/configs/skills.json");

  constructor(private httpClient: HttpClient) {}
}
