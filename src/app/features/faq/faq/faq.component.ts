import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "ak-faq",
  templateUrl: "faq.component.html",
  styleUrls: ["faq.component.css"]
})
export class FaqComponent {
  faqs: Observable<any> = this.httpClient.get("./assets/configs/faqs.json");

  constructor(private httpClient: HttpClient) {}
}
