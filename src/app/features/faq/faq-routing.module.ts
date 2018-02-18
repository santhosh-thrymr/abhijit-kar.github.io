import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FaqComponent } from "./";

const routes: Routes = [
  { path: "", component: FaqComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqRoutingModule {}

export const FaqComponents = [FaqComponent];
