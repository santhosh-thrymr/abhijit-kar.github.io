import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatCardModule, MatListModule } from "@angular/material";

import {
  ProjectsRoutingModule,
  ProjectsComponents
} from "./projects-routing.module";

const MaterialModules = [MatCardModule, MatListModule];

@NgModule({
  imports: [CommonModule, ProjectsRoutingModule, ...MaterialModules],
  declarations: ProjectsComponents
})
export class ProjectsModule {}
