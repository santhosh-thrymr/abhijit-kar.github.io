import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatCardModule, MatListModule } from "@angular/material";

import { BlogRoutingModule, BlogComponents } from "./blog-routing.module";

const MaterialModules = [MatCardModule, MatListModule];

@NgModule({
  imports: [CommonModule, BlogRoutingModule, ...MaterialModules],
  declarations: BlogComponents
})
export class BlogModule {}
