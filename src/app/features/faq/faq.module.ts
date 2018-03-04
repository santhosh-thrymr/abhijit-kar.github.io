import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule, MatListModule } from "@angular/material";

import { SharedModule } from "../../shared/shared.module";
import { FaqRoutingModule, FaqComponents } from "./faq-routing.module";

const MaterialModules = [MatCardModule, MatListModule];

@NgModule({
  imports: [CommonModule, FaqRoutingModule, SharedModule, ...MaterialModules],
  declarations: FaqComponents
})
export class FaqModule {}
