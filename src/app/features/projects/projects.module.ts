import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  ProjectsRoutingModule,
  ProjectsComponents
} from "./projects-routing.module";

@NgModule({
  imports: [CommonModule, ProjectsRoutingModule],
  declarations: ProjectsComponents
})
export class ProjectsModule {}
