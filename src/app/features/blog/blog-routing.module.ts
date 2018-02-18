import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BlogComponent } from "./";

const routes: Routes = [
  { path: "", component: BlogComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}

export const BlogComponents = [BlogComponent];
