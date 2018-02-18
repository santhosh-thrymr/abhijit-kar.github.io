import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import {
  MatCardModule,
  MatExpansionModule,
  MatListModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatTabsModule
} from "@angular/material";

import { HomeRoutingModule, HomeComponents } from "./home-routing.module";
import { SharedModule } from "../../shared/shared.module";

const MaterialModules = [
  MatCardModule,
  MatExpansionModule,
  MatListModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatTabsModule
];

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    SharedModule,
    ...MaterialModules
  ],
  declarations: HomeComponents
})
export class HomeModule {}
