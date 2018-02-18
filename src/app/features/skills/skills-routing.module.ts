import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SkillsComponent } from "./";

const routes: Routes = [
  { path: "", component: SkillsComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule {}

export const SkillsComponents = [SkillsComponent];
