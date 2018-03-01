import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { LinkHandlerService } from "../../../shared";

@Component({
  selector: "ak-about",
  templateUrl: "about.component.html",
  styleUrls: ["about.component.css"]
})
export class AboutComponent {
  contributions: Observable<any> = this.httpClient.get(
    "./assets/configs/contributions.json"
  );

  constructor(
    private httpClient: HttpClient,
    public linkHandlerService: LinkHandlerService
  ) {}
}
