import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule, MatListModule } from "@angular/material";

import {
  ContactRoutingModule,
  ContactComponents
} from "./contact-routing.module";

const MaterialModules = [MatCardModule, MatListModule];

@NgModule({
  imports: [CommonModule, ContactRoutingModule, ...MaterialModules],
  declarations: ContactComponents
})
export class ContactModule {}
