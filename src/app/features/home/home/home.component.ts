import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { LinkHandlerService } from "../../../shared";

@Component({
  selector: "ak-home",
  templateUrl: "home.component.html",
  styleUrls: ["home.component.css"]
})
export class HomeComponent {
  highlights: Observable<any> = this.httpClient.get(
    "./assets/configs/highlights.json"
  );

  constructor(
    private httpClient: HttpClient,
    public linkHandlerService: LinkHandlerService
  ) {}
}
