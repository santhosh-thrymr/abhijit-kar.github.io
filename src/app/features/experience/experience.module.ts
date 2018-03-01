import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  MatCardModule,
  MatListModule,
  MatButtonModule
} from "@angular/material";

import {
  ExperienceRoutingModule,
  ExperienceComponents
} from "./experience-routing.module";

import { SharedModule } from "../../shared/shared.module";

const MaterialModules = [MatCardModule, MatListModule, MatButtonModule];

@NgModule({
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    SharedModule,
    ...MaterialModules
  ],
  declarations: ExperienceComponents
})
export class ExperienceModule {}
