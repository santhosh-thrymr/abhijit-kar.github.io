import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatCardModule, MatListModule } from "@angular/material";

import { FaqRoutingModule, FaqComponents } from "./faq-routing.module";

const MaterialModules = [MatCardModule, MatListModule];

@NgModule({
  imports: [CommonModule, FaqRoutingModule, ...MaterialModules],
  declarations: FaqComponents
})
export class FaqModule {}
