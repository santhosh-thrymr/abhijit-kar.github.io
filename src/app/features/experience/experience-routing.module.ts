import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ExperienceComponent } from "./";

const routes: Routes = [
  { path: "", component: ExperienceComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperienceRoutingModule {}

export const ExperienceComponents = [ExperienceComponent];
