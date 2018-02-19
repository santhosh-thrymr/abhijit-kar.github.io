import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  MatCardModule,
  MatListModule,
  MatButtonModule
} from "@angular/material";

import { SkillsRoutingModule, SkillsComponents } from "./skills-routing.module";
import { SharedModule } from "../../shared/shared.module";

const MaterialModules = [MatCardModule, MatListModule, MatButtonModule];

@NgModule({
  imports: [
    CommonModule,
    SkillsRoutingModule,
    SharedModule,
    ...MaterialModules
  ],
  declarations: SkillsComponents
})
export class SkillsModule {}
