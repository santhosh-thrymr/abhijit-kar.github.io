import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatCardModule, MatListModule } from "@angular/material";

import { AwardsRoutingModule, AwardsComponents } from "./awards-routing.module";

const MaterialModules = [MatCardModule, MatListModule];

@NgModule({
  imports: [CommonModule, AwardsRoutingModule, ...MaterialModules],
  declarations: AwardsComponents
})
export class AwardsModule {}
