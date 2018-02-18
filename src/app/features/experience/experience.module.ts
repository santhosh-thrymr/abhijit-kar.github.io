import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  ExperienceRoutingModule,
  ExperienceComponents
} from "./experience-routing.module";

@NgModule({
  imports: [CommonModule, ExperienceRoutingModule],
  declarations: ExperienceComponents
})
export class ExperienceModule {}
