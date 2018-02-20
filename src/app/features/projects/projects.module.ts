import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  MatCardModule,
  MatListModule,
  MatButtonModule
} from "@angular/material";

import {
  ProjectsRoutingModule,
  ProjectsComponents
} from "./projects-routing.module";
import { SharedModule } from "../../shared/shared.module";

const MaterialModules = [MatCardModule, MatListModule, MatButtonModule];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProjectsRoutingModule,
    ...MaterialModules
  ],
  declarations: ProjectsComponents
})
export class ProjectsModule {}
