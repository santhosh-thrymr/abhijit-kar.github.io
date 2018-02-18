import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AwardsComponent } from "./";

const routes: Routes = [
  { path: "", component: AwardsComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AwardsRoutingModule {}

export const AwardsComponents = [AwardsComponent];
