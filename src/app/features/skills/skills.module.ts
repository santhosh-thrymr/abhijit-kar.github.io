import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  SkillsRoutingModule,
  SkillsComponents
} from "./skills-routing.module";

@NgModule({
  imports: [CommonModule, SkillsRoutingModule],
  declarations: SkillsComponents
})
export class SkillsModule {}
