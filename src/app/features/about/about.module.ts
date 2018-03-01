import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatCardModule, MatButtonModule } from "@angular/material";

import { AboutRoutingModule, AboutComponents } from "./about-routing.module";

const MaterialModules = [MatCardModule, MatButtonModule];

@NgModule({
  imports: [CommonModule, AboutRoutingModule, ...MaterialModules],
  declarations: AboutComponents
})
export class AboutModule {}
