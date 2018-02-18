import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { EducationComponent } from "./";

const routes: Routes = [
  { path: "", component: EducationComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationRoutingModule {}

export const EducationComponents = [EducationComponent];
