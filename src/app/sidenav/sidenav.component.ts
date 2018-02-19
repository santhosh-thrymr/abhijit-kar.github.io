import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { LinkHandlerService, LINK_TYPES } from "../shared";

@Component({
  selector: "ak-sidenav",
  templateUrl: "sidenav.component.html",
  styleUrls: ["sidenav.component.css"]
})
export class SidenavComponent {
  link_types = LINK_TYPES;

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
    public linkHandlerService: LinkHandlerService
  ) {}
}
