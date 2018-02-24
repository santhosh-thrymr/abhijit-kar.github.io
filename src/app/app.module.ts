import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ServiceWorkerModule } from "@angular/service-worker";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {
  MatCardModule,
  MatTabsModule,
  MatListModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatButtonModule,
  MatSnackBarModule,
  MatDialogModule
} from "@angular/material";

import { environment } from "../environments/environment";

import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";

import { FeaturesModule } from "./features/features.module";
import {
  AppComponent,
  HeaderComponent,
  SidenavComponent,
  FooterComponent,
  ChatBotComponent
} from "./";
import { LayoutModule } from "@angular/cdk/layout";

const MaterialModules = [
  MatCardModule,
  MatTabsModule,
  MatListModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatButtonModule,
  MatSnackBarModule,
  MatDialogModule,
  LayoutModule
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    ChatBotComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "abhijit-kar" }),
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    FeaturesModule,
    AppRoutingModule,
    ...MaterialModules,
    SharedModule
  ],
  entryComponents: [ChatBotComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
