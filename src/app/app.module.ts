import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ServiceWorkerModule } from "@angular/service-worker";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { MatCardModule, MatTabsModule, MatListModule } from "@angular/material";

import { environment } from "../environments/environment";

import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";

import { FeaturesModule } from "./features/features.module";
import { AppComponent, HeaderComponent } from "./";

const MaterialModules = [MatCardModule, MatTabsModule, MatListModule];

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "abhijit-kar" }),
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    }),
    NoopAnimationsModule,
    FeaturesModule,
    AppRoutingModule,
    ...MaterialModules,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
