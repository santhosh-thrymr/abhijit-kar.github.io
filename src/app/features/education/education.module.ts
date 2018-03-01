import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatCardModule, MatButtonModule } from "@angular/material";

import {
  EducationRoutingModule,
  EducationComponents
} from "./education-routing.module";

const MaterialModules = [MatCardModule, MatButtonModule];

@NgModule({
  imports: [CommonModule, EducationRoutingModule, ...MaterialModules],
  declarations: EducationComponents
})
export class EducationModule {}
