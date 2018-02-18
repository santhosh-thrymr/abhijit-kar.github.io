import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  BlogRoutingModule,
  BlogComponents
} from "./blog-routing.module";

@NgModule({
  imports: [CommonModule, BlogRoutingModule],
  declarations: BlogComponents
})
export class BlogModule {}
