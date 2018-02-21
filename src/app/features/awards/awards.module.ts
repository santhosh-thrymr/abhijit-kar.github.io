import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  MatCardModule,
  MatListModule,
  MatButtonModule
} from "@angular/material";

import { AwardsRoutingModule, AwardsComponents } from "./awards-routing.module";

const MaterialModules = [MatCardModule, MatListModule, MatButtonModule];

@NgModule({
  imports: [CommonModule, AwardsRoutingModule, ...MaterialModules],
  declarations: AwardsComponents
})
export class AwardsModule {}
