import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatCardModule,
  MatExpansionModule,
  MatListModule
} from "@angular/material";

import { HomeRoutingModule, HomeComponents } from "./home-routing.module";

const MaterialModules = [MatCardModule, MatExpansionModule, MatListModule];

@NgModule({
  imports: [CommonModule, HomeRoutingModule, ...MaterialModules],
  declarations: HomeComponents
})
export class HomeModule {}
