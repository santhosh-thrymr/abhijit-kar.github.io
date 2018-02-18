import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  EducationRoutingModule,
  EducationComponents
} from "./education-routing.module";

@NgModule({
  imports: [CommonModule, EducationRoutingModule],
  declarations: EducationComponents
})
export class EducationModule {}
