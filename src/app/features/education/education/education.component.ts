import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "ak-education",
  templateUrl: "education.component.html",
  styleUrls: ["education.component.css"]
})
export class EducationComponent {
  educations: Observable<any> = this.httpClient.get("./assets/configs/educations.json");

  constructor(private httpClient: HttpClient) {}
}
