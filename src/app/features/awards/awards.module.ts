import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  AwardsRoutingModule,
  AwardsComponents
} from "./awards-routing.module";

@NgModule({
  imports: [CommonModule, AwardsRoutingModule],
  declarations: AwardsComponents
})
export class AwardsModule {}
