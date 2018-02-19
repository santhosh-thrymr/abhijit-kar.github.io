import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "ak-skills",
  templateUrl: "skills.component.html",
  styleUrls: ["skills.component.css"]
})
export class SkillsComponent {
  skills: Observable<any> = this.httpClient.get("./assets/configs/skills.json");

  constructor(private httpClient: HttpClient) {}
}
