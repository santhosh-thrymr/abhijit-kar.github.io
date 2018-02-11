import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatCardModule,
  MatExpansionModule,
  MatListModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatButtonModule
} from "@angular/material";

import { HomeRoutingModule, HomeComponents } from "./home-routing.module";

const MaterialModules = [
  MatCardModule,
  MatExpansionModule,
  MatListModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatButtonModule
];

@NgModule({
  imports: [CommonModule, HomeRoutingModule, ...MaterialModules],
  declarations: HomeComponents
})
export class HomeModule {}
