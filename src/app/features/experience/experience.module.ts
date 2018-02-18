import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatCardModule, MatListModule } from "@angular/material";

import {
  ExperienceRoutingModule,
  ExperienceComponents
} from "./experience-routing.module";

const MaterialModules = [MatCardModule, MatListModule];

@NgModule({
  imports: [CommonModule, ExperienceRoutingModule, ...MaterialModules],
  declarations: ExperienceComponents
})
export class ExperienceModule {}
