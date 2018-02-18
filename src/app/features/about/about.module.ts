import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  MatCardModule,
  MatListModule
} from "@angular/material";

import { AboutRoutingModule, AboutComponents } from "./about-routing.module";

const MaterialModules = [
  MatCardModule,
  MatListModule
];

@NgModule({
  imports: [CommonModule, AboutRoutingModule, ...MaterialModules],
  declarations: AboutComponents
})
export class AboutModule {}
