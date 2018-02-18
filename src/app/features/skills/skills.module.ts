import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatCardModule, MatListModule } from "@angular/material";

import { SkillsRoutingModule, SkillsComponents } from "./skills-routing.module";

const MaterialModules = [MatCardModule, MatListModule];

@NgModule({
  imports: [CommonModule, SkillsRoutingModule, ...MaterialModules],
  declarations: SkillsComponents
})
export class SkillsModule {}
