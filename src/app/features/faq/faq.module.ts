import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  FaqRoutingModule,
  FaqComponents
} from "./faq-routing.module";

@NgModule({
  imports: [CommonModule, FaqRoutingModule],
  declarations: FaqComponents
})
export class FaqModule {}
