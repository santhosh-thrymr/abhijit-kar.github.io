import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import {
  MatCardModule,
  MatExpansionModule,
  MatListModule,
  MatButtonModule
} from "@angular/material";

import { HomeRoutingModule, HomeComponents } from "./home-routing.module";
import { SharedModule } from "../../shared/shared.module";

const MaterialModules = [
  MatCardModule,
  MatExpansionModule,
  MatListModule,
  MatButtonModule
];

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ...MaterialModules
  ],
  declarations: HomeComponents
})
export class HomeModule {}
