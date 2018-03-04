import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  MatCardModule,
  MatListModule,
  MatButtonModule
} from "@angular/material";

import { SharedModule } from "../../shared/shared.module";
import { AwardsRoutingModule, AwardsComponents } from "./awards-routing.module";

const MaterialModules = [MatCardModule, MatListModule, MatButtonModule];

@NgModule({
  imports: [
    CommonModule,
    AwardsRoutingModule,
    SharedModule,
    ...MaterialModules
  ],
  declarations: AwardsComponents
})
export class AwardsModule {}
