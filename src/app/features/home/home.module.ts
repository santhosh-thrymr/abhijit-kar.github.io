import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import {
  MatCardModule,
  MatExpansionModule,
  MatListModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatButtonModule
} from "@angular/material";

import { HomeRoutingModule, HomeComponents } from "./home-routing.module";

const MaterialModules = [
  MatCardModule,
  MatExpansionModule,
  MatListModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatButtonModule
];

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    ...MaterialModules
  ],
  declarations: HomeComponents
})
export class HomeModule {}
