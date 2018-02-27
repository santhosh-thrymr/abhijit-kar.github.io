import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ServiceWorkerModule } from "@angular/service-worker";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import { ReactiveFormsModule } from "@angular/forms";

import {
  MatCardModule,
  MatTabsModule,
  MatListModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";

import { environment } from "../environments/environment";

import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";

import { FeaturesModule } from "./features/features.module";
import {
  AppComponent,
  HeaderComponent,
  SidenavComponent,
  FooterComponent
} from "./";

const MaterialModules = [
  MatCardModule,
  MatTabsModule,
  MatListModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatButtonModule,
  MatDialogModule,
  LayoutModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "abhijit-kar" }),
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    FeaturesModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ...MaterialModules,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
