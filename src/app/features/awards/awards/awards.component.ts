import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { LinkHandlerService, LINK_TYPES } from "../../../shared";

@Component({
  selector: "ak-awards",
  templateUrl: "awards.component.html",
  styleUrls: ["awards.component.css"]
})
export class AwardsComponent {
  link_types = LINK_TYPES;

  awards: Observable<any> = this.httpClient.get("./assets/configs/awards.json");

  constructor(
    private httpClient: HttpClient,
    public linkHandlerService: LinkHandlerService
  ) {}
}
